import { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroTop = heroRef.current.offsetTop - 120;
      const featuresTop = featuresRef.current.offsetTop - 120;
      const testimonialsTop = testimonialsRef.current.offsetTop - 120;
      const contactTop = contactRef.current.offsetTop - 120;
      const scrollPos = window.scrollY;

      if (scrollPos >= contactTop) {
        setActiveSection("contact");
      } else if (scrollPos >= testimonialsTop) {
        setActiveSection("testimonials");
      } else if (scrollPos >= featuresTop) {
        setActiveSection("features");
      } else {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Navbar
        activeSection={activeSection}
        onLogoClick={() => scrollToSection(heroRef)}   
        onFeaturesClick={() => scrollToSection(featuresRef)}
        onTestimonialsClick={() => scrollToSection(testimonialsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <div ref={heroRef}>
        <Hero onGetStartedClick={() => scrollToSection(featuresRef)} />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
