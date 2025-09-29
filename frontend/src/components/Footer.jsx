export default function Footer() {
  const footerStyle = { backgroundColor: "#2563EB", color: "#fff", padding: "3rem 1.5rem" };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "2rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>IELTS Pro</h3>
          <p style={{ marginTop: "0.5rem", color: "#E5E7EB" }}>
            Helping students achieve their dream scores since 2024.
          </p>
        </div>
        <div>
          <h4 style={{ fontWeight: "600" }}>Contact Us</h4>
          <p>Email: info@ieltspro.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem", color: "#D1D5DB" }}>
        © 2025 IELTS Pro. All rights reserved.
      </div>
    </footer>
  );
}
