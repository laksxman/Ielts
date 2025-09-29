import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero({ onGetStartedClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80", 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-headline">Achieve Your Dream IELTS Score</h1>
          <p className="hero-subtext">
            Join our expert-guided courses, AI band score analysis, and real-time practice sessions.
          </p>
          <button className="hero-button" onClick={onGetStartedClick}>
            Get Started
          </button>
        </div>

        <div className="hero-image-container">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`IELTS Banner ${index + 1}`}
              className={`hero-image ${currentIndex === index ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
