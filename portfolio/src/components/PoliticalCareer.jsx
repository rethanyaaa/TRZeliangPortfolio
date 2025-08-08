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
      "Serving as Deputy Chief Minister of Nagaland, working alongside the Chief Minister to implement infrastructure projects and policy reforms.",
    icon: "🏛️",
    achievements: [
      "Overseeing multiple highway and road projects",
      "Pushing Sustainable Development Goals (SDG) alignment",
      "Leading wildlife and conservation efforts",
    ],
    year: "2023 - Present",
  },
  {
    id: 2,
    title: "Chairman, United Democratic Alliance (UDA)",
    subtitle: "Nagaland",
    description:
      "Headed the ruling UDA coalition, coordinating between parties to ensure stable governance.",
    icon: "🤝",
    achievements: [
      "Maintained coalition unity",
      "Facilitated consensus on Naga political issues",
      "Strengthened political coordination in the state",
    ],
    year: "2022 - 2023",
  },
  {
    id: 3,
    title: "Leader of Opposition",
    subtitle: "Nagaland Legislative Assembly",
    description:
      "Led the opposition in the state assembly, holding the government accountable and voicing public concerns.",
    icon: "⚖️",
    achievements: [
      "Questioned government policies for transparency",
      "Advocated for rural development",
      "Strengthened opposition presence in assembly",
    ],
    year: "2018 - 2022",
  },
  {
    id: 4,
    title: "Chief Minister",
    subtitle: "Nagaland (Two Terms)",
    description:
      "Served as Chief Minister twice, leading significant infrastructure and institutional development projects.",
    icon: "👑",
    achievements: [
      "Expanded highway and road networks",
      "Opened Nagaland State Guest House in Delhi",
      "Introduced SDG Coordination Centre",
    ],
    year: "2014 - 2017, 2017 - 2018",
  },
  {
    id: 5,
    title: "Cabinet Minister",
    subtitle: "Nagaland Government",
    description:
      "Held multiple cabinet portfolios over the years, contributing to policy and development.",
    icon: "🛠️",
    achievements: [
      "Minister for Information & Tourism",
      "Minister for Environment & Forests, Geology & Mining",
      "Minister for Planning, Parliamentary Affairs, and Animal Husbandry",
    ],
    year: "1989 - 2003, 2008 - 2013",
  },
  {
    id: 6,
    title: "Member of Parliament",
    subtitle: "Rajya Sabha, Nagaland",
    description:
      "Represented Nagaland in the Upper House of Parliament, contributing to national debates.",
    icon: "🏛️",
    achievements: [
      "Advocated for Northeast infrastructure funding",
      "Raised tribal rights and rural development issues",
      "Strengthened Nagaland’s voice in Parliament",
    ],
    year: "2004 - 2008",
  },
  {
    id: 7,
    title: "Member of Legislative Assembly",
    subtitle: "Tening & Peren Constituencies",
    description:
      "Elected multiple times as MLA, representing the people and ensuring their needs are addressed.",
    icon: "🗳️",
    achievements: [
      "Represented two different constituencies",
      "Initiated local infrastructure projects",
      "Worked on healthcare and education improvement",
    ],
    year: "1989 - 2003, 2008 - Present",
  },
  {
    id: 8,
    title: "Youth Leader",
    subtitle: "Student & Party Roles",
    description:
      "Began public life in youth and student leadership, later leading the Peren District Youth Congress.",
    icon: "🌟",
    achievements: [
      "President, Zeliangrong Students Union",
      "General Secretary, Zeliangrong Youth Organisation",
      "President, Peren District Youth Congress (1976)",
    ],
    year: "1970s - 1980s",
  },
  {
  id: 9,
  title: "Party Founder",
  subtitle: "Nagaland Congress (Merged into NPF)",
  description:
    "Co-founded the Nagaland Congress in 2003 after breaking away from the Indian National Congress, aiming to create a stronger regional political voice.",
  icon: "🏴",
  achievements: [
    "Established a new regional party structure",
    "Strengthened Naga political unity through merger with NPF",
    "Enhanced regional representation in state politics",
  ],
  year: "2003",
},
];


  const targetStats = {
    yearsInService: 43,
    positionsHeld: 8,
    constituenciesServed: 2,
    projectsCompleted: 7,
  };

  useEffect(() => {
    // Start animation immediately when component mounts
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      console.log("Starting stats animation");

      // Simple animation with fewer steps for reliability
      let currentStep = 0;
      const totalSteps = 50;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / totalSteps;

        const newStats = {
          yearsInService: Math.floor(targetStats.yearsInService * progress),
          positionsHeld: Math.floor(targetStats.positionsHeld * progress),
          constituenciesServed: Math.floor(
            targetStats.constituenciesServed * progress
          ),
          projectsCompleted: Math.floor(
            targetStats.projectsCompleted * progress
          ),
        };

        setStats(newStats);

        if (currentStep >= totalSteps) {
          clearInterval(interval);
          setStats(targetStats);
          console.log("Animation completed");
        }
      }, 60); // 60ms per step = 3 seconds total
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
    Zeliang's political journey spans over four decades, marked by
    dedicated service and progressive leadership. From grassroots
    mobilization in student and youth organizations to the highest
    offices of state governance, he has consistently worked towards
    the development and welfare of the people of Nagaland.
  </p>
  <p>
    His leadership has been characterized by transparency,
    accountability, and a deep commitment to inclusive development.
    Through various positions, he has successfully initiated and
    implemented numerous infrastructure projects, welfare schemes,
    and policy reforms that have positively impacted communities
    across the state.
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default PoliticalCareer;
