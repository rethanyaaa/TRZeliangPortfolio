import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import "./VisionSection.css";

const VisionSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const visionPillars = [
    {
      id: 1,
      title: "Education & Youth Development",
      icon: "📚",
      description:
        "Empowering the next generation through quality education and skill development programs.",
      details:
        "Focus on digital literacy, vocational training, and higher education accessibility.",
    },
    {
      id: 2,
      title: "Infrastructure & Connectivity",
      icon: "🌉",
      description:
        "Building modern infrastructure to connect communities and drive economic growth.",
      details:
        "Road networks, digital connectivity, and sustainable urban development.",
    },
    {
      id: 3,
      title: "Economic Growth & Employment",
      icon: "📈",
      description:
        "Creating sustainable economic opportunities and job creation across sectors.",
      details:
        "Tourism development, agriculture modernization, and small business support.",
    },
    {
      id: 4,
      title: "Cultural Preservation",
      icon: "🎨",
      description:
        "Preserving and promoting Naga heritage while embracing cultural evolution.",
      details: "Traditional arts, festivals, and cultural education programs.",
    },
    {
      id: 5,
      title: "Healthcare Advancements",
      icon: "🏥",
      description:
        "Ensuring accessible and quality healthcare for all communities.",
      details:
        "Modern medical facilities, preventive care, and health awareness programs.",
    },
  ];

  const timelineData = [
    {
      year: "2024-2025",
      title: "Foundation Phase",
      goals: [
        "Digital infrastructure setup",
        "Education reform initiation",
        "Healthcare facility planning",
      ],
    },
    {
      year: "2025-2027",
      title: "Development Phase",
      goals: [
        "Economic zone establishment",
        "Cultural center development",
        "Youth employment programs",
      ],
    },
    {
      year: "2027-2029",
      title: "Expansion Phase",
      goals: [
        "Tourism infrastructure",
        "Advanced healthcare systems",
        "Educational excellence centers",
      ],
    },
    {
      year: "2029-2034",
      title: "Sustainable Growth",
      goals: [
        "Green energy initiatives",
        "International partnerships",
        "Innovation hubs",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="vision-section" ref={containerRef}>
      {/* Animated Background Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
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
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="vision-container">
        {/* Hero Vision Statement */}
        <motion.div
          className="vision-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="vision-title">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Nagaland Through
            </motion.span>
            <br />
            <motion.span
              className="highlight-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sustainable Growth & Unity
            </motion.span>
          </h1>
        </motion.div>

        {/* Vision Pillars Grid */}
        <motion.div
          className="vision-pillars"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="section-title">Key Vision Pillars</h2>
          <div className="pillars-grid">
            {visionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                className={`pillar-card ${
                  hoveredCard === pillar.id ? "expanded" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredCard(pillar.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="pillar-icon">{pillar.icon}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
                <AnimatePresence>
                  {hoveredCard === pillar.id && (
                    <motion.div
                      className="pillar-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{pillar.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Timeline */}
      

        {/* Quote Overlay */}
        <motion.div
          className="vision-quote"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <blockquote>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2.4 }}
            >
              "A prosperous Nagaland is built on the foundation of its people's
              aspirations."
            </motion.p>
            <motion.cite
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2.6 }}
            >
              — T. R. Zeliang
            </motion.cite>
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionSection;
