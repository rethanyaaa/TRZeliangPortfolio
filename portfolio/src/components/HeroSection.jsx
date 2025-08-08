import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HeroSection.css";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "T. R. Zeliang (Taditui Rangkau Zeliang)";

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const [headingRef, headingInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [ctaRef, ctaInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="hero-section">
      {/* Parallax Background */}
      <motion.div
        className="hero-background"
        style={{
          y,
          backgroundImage: "url('/hero-bg.jpg')", // Path from public folder
        }}
      >
        <div className="background-overlay"></div>
      </motion.div>

      {/* Content Container */}
      <div className="hero-content">
        {/* Main Heading with Fade-in Animation */}
        <motion.h1
          ref={headingRef}
          className="hero-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hon'ble Deputy Chief Minister of Nagaland
        </motion.h1>

        {/* Subheading with Typing Animation */}
        <motion.h2
          className="hero-subheading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {text}
          <span className="typing-cursor">|</span>
        </motion.h2>

        {/* CTA Button with Floating Animation */}
        <motion.div
          ref={ctaRef}
          className="cta-container"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Explore Journey
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
