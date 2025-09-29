import { useState } from "react";

const features = [
  { title: "Speaking Practice", desc: "Live speaking sessions with expert trainers." },
  { title: "Mock Tests", desc: "Full-length tests to track your progress." },
  { title: "AI Band Score", desc: "Instant feedback with AI-powered scoring." },
  { title: "Flexible Timing", desc: "Learn at your own pace, anytime." },
];

export default function Features() {
  const sectionStyle = { padding: "5rem 1.5rem", textAlign: "center", backgroundColor: "#fff" };
  const containerStyle = { maxWidth: "1200px", margin: "0 auto" };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#111827", marginBottom: "3rem" }}>
          Our Features
        </h2>
        <div style={gridStyle}>
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc }) {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    backgroundColor: "#F9FAFB",
    padding: "1.5rem",
    borderRadius: "1rem",
    boxShadow: hover ? "0 10px 20px rgba(0,0,0,0.2)" : "0 4px 6px rgba(0,0,0,0.1)",
    transform: hover ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#2563EB" }}>{title}</h3>
      <p style={{ marginTop: "0.75rem", color: "#6B7280" }}>{desc}</p>
    </div>
  );
}
