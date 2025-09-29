import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3 className="footer-title">IELTS Pro</h3>
          <p className="footer-text">
            Helping students achieve their dream scores since 2024.
          </p>
        </div>
        <div>
          <h4 className="footer-heading">Contact Us</h4>
          <p>Email: info@ieltspro.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 IELTS Pro. All rights reserved.
      </div>
    </footer>
  );
}
