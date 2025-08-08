import React, { useState, useEffect, useRef } from "react";
import "./PoliticalCareer.css";

const PoliticalCareer = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [stats, setStats] = useState({
    yearsInService: 0,
    positionsHeld: 0,
    constituenciesServed: 0,
    projectsCompleted: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const careerData = [
    {
      id: 1,
      title: "Deputy Chief Minister",
      subtitle: "Nagaland (Current)",
      description:
        "Currently serving as Deputy Chief Minister of Nagaland, working closely with the Chief Minister to implement progressive policies and development initiatives.",
      icon: "🏛️",
      achievements: [
        "Leading key development projects",
        "Overseeing infrastructure development",
        "Implementing welfare schemes",
      ],
      year: "2023 - Present",
    },
    {
      id: 2,
      title: "Chief Minister",
      subtitle: "Nagaland (Former)",
      description:
        "Served as the Chief Minister of Nagaland, leading the state through significant development and policy reforms.",
      icon: "👑",
      achievements: [
        "Implemented major infrastructure projects",
        "Enhanced healthcare facilities",
        "Improved education standards",
      ],
      year: "2014 - 2021",
    },
    {
      id: 3,
      title: "Member of Legislative Assembly",
      subtitle: "Multiple Terms",
      description:
        "Elected as MLA multiple times, representing the people and addressing their concerns in the state assembly.",
      icon: "🗳️",
      achievements: [
        "Represented multiple constituencies",
        "Passed important legislation",
        "Advocated for public welfare",
      ],
      year: "2008 - 2023",
    },
    {
      id: 4,
      title: "Youth Wing Leader",
      subtitle: "Party Leadership",
      description:
        "Led the youth wing of the party, mobilizing young leaders and fostering political awareness among youth.",
      icon: "🌟",
      achievements: [
        "Mobilized youth participation",
        "Organized leadership programs",
        "Built party infrastructure",
      ],
      year: "2005 - 2010",
    },
  ];

  const targetStats = {
    yearsInService: 25,
    positionsHeld: 8,
    constituenciesServed: 3,
    projectsCompleted: 150,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const animateStats = () => {
        let currentStep = 0;
        const interval = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;

          setStats({
            yearsInService: Math.floor(targetStats.yearsInService * progress),
            positionsHeld: Math.floor(targetStats.positionsHeld * progress),
            constituenciesServed: Math.floor(
              targetStats.constituenciesServed * progress
            ),
            projectsCompleted: Math.floor(
              targetStats.projectsCompleted * progress
            ),
          });

          if (currentStep >= steps) {
            clearInterval(interval);
            setStats(targetStats);
          }
        }, stepDuration);
      };

      animateStats();
    }
  }, [isVisible]);

  const handleCardFlip = (cardId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <div className="political-career" ref={sectionRef}>
      <div className="career-container">
        <h2 className="career-title">Political Career</h2>

        {/* Statistics Section */}
        <div className="stats-section">
          <h3>Key Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-number">{stats.yearsInService}+</div>
              <div className="stat-label">Years in Public Service</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">{stats.positionsHeld}</div>
              <div className="stat-label">Key Positions Held</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🗺️</div>
              <div className="stat-number">{stats.constituenciesServed}</div>
              <div className="stat-label">Constituencies Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-number">{stats.projectsCompleted}+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
        </div>

        {/* Career Cards Section */}
        <div className="career-cards-section">
          <h3>Key Positions & Achievements</h3>
          <div className="career-cards-grid">
            {careerData.map((position) => (
              <div
                key={position.id}
                className={`career-card ${
                  flippedCards[position.id] ? "flipped" : ""
                }`}
                onClick={() => handleCardFlip(position.id)}
              >
                <div className="card-inner">
                  {/* Front of Card */}
                  <div className="card-front">
                    <div className="card-icon">{position.icon}</div>
                    <h4 className="card-title">{position.title}</h4>
                    <p className="card-subtitle">{position.subtitle}</p>
                    <p className="card-year">{position.year}</p>
                    <div className="flip-hint">Click to learn more</div>
                  </div>

                  {/* Back of Card */}
                  <div className="card-back">
                    <h4 className="card-title">{position.title}</h4>
                    <p className="card-description">{position.description}</p>
                    <div className="achievements-list">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {position.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flip-hint">Click to flip back</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="career-summary">
          <h3>Career Journey</h3>
          <div className="summary-content">
            <p>
              Zeliang's political journey spans over two decades, marked by
              dedicated service and progressive leadership. From grassroots
              mobilization to the highest echelons of state governance, he has
              consistently worked towards the development and welfare of the
              people of Nagaland.
            </p>
            <p>
              His leadership has been characterized by transparency,
              accountability, and a deep commitment to inclusive development.
              Through various positions, he has successfully implemented
              numerous development projects and welfare schemes that have
              positively impacted thousands of lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticalCareer;
