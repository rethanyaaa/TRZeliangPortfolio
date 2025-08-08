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
      "Empowering the next generation through quality education, skill development, and cultural awareness.",
    details:
      "Expand higher education access in rural areas, strengthen vocational and technical training institutes, promote digital literacy, and encourage youth leadership through sports and cultural activities.",
  },
  {
    id: 2,
    title: "Infrastructure & Connectivity",
    icon: "🌉",
    description:
      "Modernizing transport and communication infrastructure to connect communities and boost the economy.",
    details:
      "Accelerate completion of National Highway projects, develop Foothill Road, improve rural roads, expand internet connectivity, and promote sustainable town planning.",
  },
  {
    id: 3,
    title: "Economic Growth & Employment",
    icon: "📈",
    description:
      "Creating resilient economic opportunities rooted in local strengths and resources.",
    details:
      "Promote tourism and eco-tourism, modernize agriculture and horticulture, support small and medium enterprises, and encourage youth entrepreneurship in emerging sectors.",
  },
  {
    id: 4,
    title: "Cultural Preservation & Identity",
    icon: "🎨",
    description:
      "Safeguarding Naga heritage while adapting to modern challenges.",
    details:
      "Strengthen traditional arts and crafts markets, document indigenous languages, celebrate cultural festivals, and integrate heritage into school curricula.",
  },
  {
    id: 5,
    title: "Healthcare & Social Welfare",
    icon: "🏥",
    description:
      "Ensuring accessible and quality healthcare for all, with a focus on rural communities.",
    details:
      "Upgrade district hospitals, expand preventive healthcare programs, improve telemedicine access, and implement nutrition and welfare schemes for vulnerable groups.",
  },
  {
    id: 6,
    title: "Environmental Sustainability",
    icon: "🌿",
    description:
      "Protecting Nagaland's biodiversity and promoting responsible development.",
    details:
      "Community-led conservation projects, reforestation programs, renewable energy promotion, and sustainable farming practices.",
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
        {/* Section Title */}
        <motion.h2
          className="vision-section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          VISION
        </motion.h2>

        {/* Hero Vision Statement */}
        <motion.div
          className="vision-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="vision-title">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering Nagaland Through
            </motion.span>
            <br />
            <motion.span
              className="highlight-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
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
