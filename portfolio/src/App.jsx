import React from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PoliticalCareer from "./components/PoliticalCareer";
import VisionSection from "./components/VisionSection";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Animated Background Particles */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about" className="section">
          <AboutSection />
        </section>

        <section id="political-career" className="section">
          <PoliticalCareer />
        </section>

        <section id="vision" className="section">
          <VisionSection />
        </section>

        <section id="achievements" className="section">
          <Achievements />
        </section>

        <section id="gallery" className="section">
          <Gallery />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
