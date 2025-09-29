import { useState } from "react";

export default function Navbar({ activeSection, onLogoClick, onFeaturesClick, onTestimonialsClick, onContactClick }) {
  const navStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 50,
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
  };

  const menuStyle = {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
    color: "#4B5563",
  };

  const menuItems = [
    { label: "Features", onClick: onFeaturesClick, id: "features" },
    { label: "Testimonials", onClick: onTestimonialsClick, id: "testimonials" },
    { label: "Contact", onClick: onContactClick, id: "contact" },
  ];

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div
          onClick={onLogoClick}
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#2563EB",
            cursor: "pointer",
          }}
        >
          IELTS Pro
        </div>

        <ul style={menuStyle}>
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              label={item.label}
              onClick={item.onClick}
              active={activeSection === item.id}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ label, onClick, active }) {
  const [hover, setHover] = useState(false);

  const itemStyle = {
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    backgroundColor: hover ? "#2563EB" : active ? "#2563EB" : "transparent",
    color: hover || active ? "#fff" : "#4B5563",
    fontWeight: "500",
    transition: "all 0.3s ease",
  };

  return (
    <li
      style={itemStyle}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </li>
  );
}
