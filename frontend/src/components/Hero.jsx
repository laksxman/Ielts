

export default function Hero({ onGetStartedClick }) {
  const sectionStyle = {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "#F9FAFB",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 1.5rem",
  };

  const headlineStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "1rem",
  };

  const subtextStyle = {
    fontSize: "1.125rem",
    color: "#6B7280",
    marginBottom: "1.5rem",
  };

  const buttonStyle = {
    backgroundColor: "#2563EB",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    border: "none",
    fontWeight: "bold",
  };

  const imgStyle = {
    marginTop: "2rem",
    borderRadius: "1rem",
    maxWidth: "100%",
    height: "300px",
    width: "600px",
    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
    
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={{ textAlign: "center" }}>
          <h1 style={headlineStyle}>Achieve Your Dream IELTS Score</h1>
          <p style={subtextStyle}>
            Join our expert-guided courses, AI band score analysis, and real-time practice sessions.
          </p>
          <button style={buttonStyle} onClick={onGetStartedClick}>
            Get Started
          </button>
        </div>
        <img
          src="https://langogh.com/_next/image?url=%2Fielts-practice-test.jpg&w=2048&q=75"
          alt="IELTS Banner"
          style={imgStyle}
        />
      </div>
    </section>
  );
}
