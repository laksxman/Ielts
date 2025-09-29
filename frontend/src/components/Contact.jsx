import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const sectionStyle = {
    padding: "5rem 1.5rem",
    textAlign: "center",
    backgroundColor: "#fff",
  };

  const containerStyle = { maxWidth: "800px", margin: "0 auto" };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "2rem",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  };

  const inputStyle = {
    padding: "0.75rem 1rem",
    border: "1px solid #D1D5DB",
    borderRadius: "0.75rem",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "120px",
    resize: "vertical",
  };

  const buttonStyle = {
    padding: "0.75rem 1rem",
    backgroundColor: "#2563EB",
    color: "#fff",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#1E40AF",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "#2563EB";
    e.target.style.boxShadow = "0 4px 8px rgba(37,99,235,0.2)";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "#D1D5DB";
    e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Message Sent Successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        alert("⚠️ Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Get in Touch</h2>
        <form style={formStyle} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={inputStyle}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
          <input
            type="tel"
            placeholder="Your Mobile Number"
            style={inputStyle}
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
          <textarea
            placeholder="Your Message"
            style={textareaStyle}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
          <button
            type="submit"
            style={buttonStyle}
            disabled={loading}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
