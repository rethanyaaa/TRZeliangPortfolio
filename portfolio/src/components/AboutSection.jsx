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
      phase: "Early Years & Education",
      year: "1952-1976",
      title: "Foundation Years",
      description:
        "Born on 21 February 1952 in Mbaupungwa village, Peren District, Zeliang completed his schooling at Don Bosco High School, Dibrugarh, and attended Kohima Arts College. His early leadership emerged through student organizations, serving as President of the Zeliangrong Students Union and General Secretary of various youth organizations.",
      icon: "🎓",
      color: "#667eea",
      highlights: [
        "Born in Mbaupungwa village, Peren District",
        "Education at Don Bosco High School, Dibrugarh",
        "Student leadership in Zeliangrong organizations",
        "Co-founded Peren College for education access",
      ],
    },
    {
      id: 2,
      phase: "Political Beginnings",
      year: "1976-2003",
      title: "Rise in Politics",
      description:
        "Entered formal politics as President of Peren District Youth Congress in 1976. After initial electoral setbacks, he was successfully elected in 1989 and served multiple terms, holding key ministerial positions including Information & Tourism, Relief & Rehabilitation, and Environment & Forests under Chief Minister S. C. Jamir.",
      icon: "🏛️",
      color: "#4facfe",
      highlights: [
        "Started as Peren District Youth Congress President",
        "Elected to Assembly in 1989, 1993, 1998, 2003",
        "Ministerial roles in multiple departments",
        "Formed Nagaland Congress in 2003",
      ],
    },
    {
      id: 3,
      phase: "Leadership & Chief Ministership",
      year: "2004-Present",
      title: "State Leadership",
      description:
        "Served as Rajya Sabha MP from 2004-2008, then returned to state politics winning from Peren constituency. Rose to become Chief Minister twice (2014-2017 and 2017-2018), currently serving as Deputy Chief Minister under Neiphiu Rio, demonstrating enduring commitment to Nagaland's development.",
      icon: "⭐",
      color: "#43e97b",
      highlights: [
        "Rajya Sabha MP (2004-2008)",
        "Chief Minister twice (2014-2017, 2017-2018)",
        "Current Deputy Chief Minister",
        "Multiple re-elections from Peren constituency",
      ],
    },
  ];

  const fullBio = `Taditui Rangkau Zeliang (born 21 February 1952)[1] is an Indian politician who is currently serving as the Deputy Chief Minister of Nagaland under Neiphiu Rio. He has served twice as the Chief Minister of Nagaland, from May 2014 to February 2017 and from July 2017 to March 2018. A leader of the Naga People's Front, T. R. Zeliang previously served as a Member of Parliament, representing Nagaland in the Rajya Sabha, the upper house of the Indian Parliament. He served as the Chairman of United Democratic Alliance (Nagaland) and was former leader of the NPF Legislature Party and former Leader of Opposition in Nagaland Legislative Assembly.He represents the Peren Assembly constituency in Nagaland Legislative Assembly since 2008.[3]`;

  const shortBio = `Taditui Rangkau Zeliang (born 21 February 1952)[1] is an Indian politician who is currently serving as the Deputy Chief Minister of Nagaland under Neiphiu Rio. He has served twice as the Chief Minister of Nagaland, from May 2014 to February 2017 and from July 2017 to March 2018. A leader of the Naga People's Front, T. R. Zeliang previously served as a Member of Parliament, representing Nagaland in the Rajya Sabha, the upper house of the Indian Parliament.`;

  // Removed automatic transition - now only manual navigation via buttons

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
                  activePhase === index && index < journeyData.length
                    ? "active"
                    : ""
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
                  activePhase === index && index < journeyData.length
                    ? "active"
                    : ""
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: activePhase === index ? 1 : 0,
                  scale: activePhase === index ? 1 : 0.8,
                  display: activePhase === index ? "block" : "none",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
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
                        transition={{ duration: 0.2, delay: 0.05 + idx * 0.03 }}
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
                  width: `${
                    (Math.min(activePhase + 1, journeyData.length) /
                      journeyData.length) *
                    100
                  }%`,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            </div>
            <div className="progress-text">
              {Math.min(activePhase + 1, journeyData.length)} of{" "}
              {journeyData.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
