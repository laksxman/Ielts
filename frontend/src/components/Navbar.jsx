import { useState } from "react";
import './Navbar.css';

export default function Navbar({
  activeSection,
  onLogoClick,
  onFeaturesClick,
  onTestimonialsClick,
  onContactClick,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Features", onClick: onFeaturesClick, id: "features" },
    { label: "Testimonials", onClick: onTestimonialsClick, id: "testimonials" },
    { label: "Contact", onClick: onContactClick, id: "contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div onClick={onLogoClick} className="logo">
          IELTS Pro
        </div>

        {/* Hamburger button for mobile */}
        <div
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
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
