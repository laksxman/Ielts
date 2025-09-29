import { useState } from "react";

const testimonials = [
  {
    name: "Riya Sharma",
    review: "IELTS Pro helped me score Band 8 in just 2 months! The speaking practice was a game changer."
  },
  {
    name: "Arjun Mehta",
    review: "I loved the mock tests. They felt just like the real exam and boosted my confidence."
  },
  {
    name: "Sophia Thomas",
    review: "The AI band score feedback saved so much time. Highly recommend!"
  },
  {
    name: "Rahul Kapoor",
    review: "Amazing instructors and structured courses. My writing score improved significantly."
  },
  {
    name: "Neha Singh",
    review: "Mock tests and feedback sessions made me confident for the real exam."
  },
  {
    name: "Ankit Verma",
    review: "The speaking practice sessions helped me overcome nervousness and speak fluently."
  },
  {
    name: "Priya Nair",
    review: "I loved the AI band score analysis. It showed exactly where I needed improvement."
  },
  {
    name: "Siddharth Jain",
    review: "The course materials were clear and easy to follow. Highly effective."
  },
  {
    name: "Kavya Menon",
    review: "Excellent support from trainers. I could ask questions anytime and get detailed answers."
  },
  {
    name: "Aman Sharma",
    review: "The listening exercises were top-notch. My listening band improved drastically."
  },
  {
    name: "Tanvi Desai",
    review: "I felt confident after attending the mock speaking sessions. Highly recommended!"
  },
  {
    name: "Vikram Patil",
    review: "The structured lessons and practice tests helped me achieve my target band score."
  }
];

export default function Testimonials() {
  const sectionStyle = { padding: "5rem 1.5rem", textAlign: "center", backgroundColor: "#F3F4F6" };
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
          Student Testimonials
        </h2>
        <div style={gridStyle}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} name={t.name} review={t.review} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, review }) {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    backgroundColor: "#fff",
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
      <p style={{ fontStyle: "italic", color: "#6B7280" }}>"{review}"</p>
      <h4 style={{ marginTop: "1rem", fontWeight: "600", color: "#2563EB" }}>- {name}</h4>
    </div>
  );
}
