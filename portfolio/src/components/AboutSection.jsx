import React, { useState, useEffect, useRef } from "react";
import "./AboutSection.css";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  const timelineData = [
    {
      id: 1,
      year: "1985",
      title: "Early Life",
      description:
        "Born in a small village, Zeliang showed early signs of leadership and community involvement.",
      icon: "👶",
    },
    {
      id: 2,
      year: "2000-2005",
      title: "Education",
      description:
        "Completed his primary and secondary education with distinction, actively participating in student leadership roles.",
      icon: "🎓",
    },
    {
      id: 3,
      year: "2005-2010",
      title: "Higher Education",
      description:
        "Pursued higher studies in political science and public administration, laying the foundation for his future career.",
      icon: "📚",
    },
    {
      id: 4,
      year: "2010-2015",
      title: "Community Service",
      description:
        "Began his journey in community service, working with local organizations and understanding grassroots issues.",
      icon: "🤝",
    },
    {
      id: 5,
      year: "2015",
      title: "Political Entry",
      description:
        "Officially entered politics, joining the youth wing of his party and starting his political career.",
      icon: "🏛️",
    },
  ];

  const fullBio = `Zeliang is a dedicated public servant and political leader who has devoted his life to serving the community. Born in a humble background, he understood the challenges faced by ordinary people from an early age. His journey from a small village to becoming a prominent political figure is a testament to his determination and commitment to public service.

Throughout his career, Zeliang has consistently worked towards improving the lives of his constituents, focusing on education, healthcare, and infrastructure development. His approach to politics is characterized by transparency, accountability, and a deep understanding of local issues.

As a leader, he believes in inclusive development and has always prioritized the welfare of the most vulnerable sections of society. His vision for the future is centered around sustainable development, technological advancement, and social justice.`;

  const shortBio = `Zeliang is a dedicated public servant and political leader who has devoted his life to serving the community. Born in a humble background, he understood the challenges faced by ordinary people from an early age.`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleItems((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems =
      timelineRef.current?.querySelectorAll(".timeline-item");
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
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

        {/* Timeline Section */}
        <div className="timeline-section">
          <h3>Journey Through Time</h3>
          <div className="timeline" ref={timelineRef}>
            {timelineData.map((item) => (
              <div
                key={item.id}
                className={`timeline-item ${
                  visibleItems.includes(item.id) ? "visible" : ""
                }`}
                data-id={item.id}
              >
                <div className="timeline-icon">
                  <span>{item.icon}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
