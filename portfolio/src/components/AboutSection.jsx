import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const journeyRef = useRef(null);

  const journeyData = [
    {
      id: 1,
      phase: "Early Years",
      year: "1985",
      title: "The Beginning",
      description:
        "Born in a small village, Zeliang showed early signs of leadership and community involvement that would shape his future path.",
      icon: "🌟",
      color: "#667eea",
      highlights: ["Natural leadership", "Community spirit", "Strong values"],
    },
    {
      id: 2,
      phase: "Education",
      year: "2000-2005",
      title: "Academic Foundation",
      description:
        "Completed his primary and secondary education with distinction, actively participating in student leadership roles and extracurricular activities.",
      icon: "📚",
      color: "#764ba2",
      highlights: [
        "Academic excellence",
        "Student leadership",
        "Skill development",
      ],
    },
    {
      id: 3,
      phase: "Higher Learning",
      year: "2005-2010",
      title: "University Years",
      description:
        "Pursued higher studies in political science and public administration, laying the foundation for his future career in public service.",
      icon: "🎓",
      color: "#f093fb",
      highlights: [
        "Political science",
        "Public administration",
        "Research focus",
      ],
    },
    {
      id: 4,
      phase: "Community Service",
      year: "2010-2015",
      title: "Grassroots Experience",
      description:
        "Began his journey in community service, working with local organizations and understanding the real issues faced by people.",
      icon: "🤝",
      color: "#4facfe",
      highlights: ["Grassroots work", "Community development", "Social impact"],
    },
    {
      id: 5,
      phase: "Political Career",
      year: "2015-Present",
      title: "Leadership Journey",
      description:
        "Officially entered politics, joining the youth wing of his party and starting his remarkable political career that continues to evolve.",
      icon: "🏛️",
      color: "#43e97b",
      highlights: [
        "Youth leadership",
        "Political mobilization",
        "Public service",
      ],
    },
  ];

  const fullBio = `Zeliang is a dedicated public servant and political leader who has devoted his life to serving the community. Born in a humble background, he understood the challenges faced by ordinary people from an early age. His journey from a small village to becoming a prominent political figure is a testament to his determination and commitment to public service.

Throughout his career, Zeliang has consistently worked towards improving the lives of his constituents, focusing on education, healthcare, and infrastructure development. His approach to politics is characterized by transparency, accountability, and a deep understanding of local issues.

As a leader, he believes in inclusive development and has always prioritized the welfare of the most vulnerable sections of society. His vision for the future is centered around sustainable development, technological advancement, and social justice.`;

  const shortBio = `Zeliang is a dedicated public servant and political leader who has devoted his life to serving the community. Born in a humble background, he understood the challenges faced by ordinary people from an early age.`;

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % journeyData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Zeliang</h2>

        <div className="about-content">
          {/* Profile Image */}
          <div className="profile-section">
            <div className="profile-image-container">
              <img
                src="/bio.jpg"
                alt="Zeliang"
                className="profile-image"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x300/667eea/ffffff?text=Zeliang";
                }}
              />
            </div>
          </div>

          {/* Bio Section */}
          <div className="bio-section">
            <h3>Biography</h3>
            <div className="bio-content">
              <p>{isExpanded ? fullBio : shortBio}</p>
              <button
                className="read-more-btn"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>

        {/* Journey Through Time - New Design */}
        <div className="journey-section" ref={journeyRef}>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="journey-title"
          >
            Journey Through Time
          </motion.h3>

          <motion.p
            className="journey-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            A remarkable evolution from humble beginnings to leadership
            excellence
          </motion.p>

          {/* Journey Navigation */}
          <div className="journey-navigation">
            {journeyData.map((item, index) => (
              <motion.button
                key={item.id}
                className={`journey-nav-item ${
                  activePhase === index ? "active" : ""
                }`}
                onClick={() => setActivePhase(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  borderColor:
                    activePhase === index ? item.color : "transparent",
                  backgroundColor:
                    activePhase === index ? `${item.color}20` : "transparent",
                }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-phase">{item.phase}</span>
              </motion.button>
            ))}
          </div>

          {/* Journey Content */}
          <div className="journey-content">
            {journeyData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`journey-card ${
                  activePhase === index ? "active" : ""
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: activePhase === index ? 1 : 0,
                  scale: activePhase === index ? 1 : 0.8,
                  display: activePhase === index ? "block" : "none",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="journey-card-header">
                  <div
                    className="journey-icon"
                    style={{ backgroundColor: item.color }}
                  >
                    <span>{item.icon}</span>
                  </div>
                  <div className="journey-info">
                    <h4 className="journey-card-title">{item.title}</h4>
                    <div className="journey-year">{item.year}</div>
                  </div>
                </div>

                <p className="journey-description">{item.description}</p>

                <div className="journey-highlights">
                  <h5>Key Highlights:</h5>
                  <div className="highlights-grid">
                    {item.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        className="highlight-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                        style={{ borderColor: item.color }}
                      >
                        <span
                          className="highlight-bullet"
                          style={{ backgroundColor: item.color }}
                        ></span>
                        {highlight}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Journey Progress */}
          <div className="journey-progress">
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{
                  width: `${((activePhase + 1) / journeyData.length) * 100}%`,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
            <div className="progress-text">
              {activePhase + 1} of {journeyData.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
