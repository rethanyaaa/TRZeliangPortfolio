import React, { useState, useEffect, useRef } from "react";
import "./Achievements.css";

const Achievements = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);

  const achievementsData = [
    {
      id: 1,
      title: "Infrastructure Development",
      description:
        "Transformed Nagaland's infrastructure with modern roads, bridges, and public facilities",
      icon: "🏗️",
      stats: "500+ km roads",
      color: "#667eea",
    },
    {
      id: 2,
      title: "Education Reforms",
      description:
        "Implemented comprehensive education reforms improving literacy rates and school infrastructure",
      icon: "📚",
      stats: "95% literacy rate",
      color: "#764ba2",
    },
    {
      id: 3,
      title: "Healthcare Enhancement",
      description:
        "Upgraded healthcare facilities and implemented universal health coverage programs",
      icon: "🏥",
      stats: "100+ clinics",
      color: "#f093fb",
    },
    {
      id: 4,
      title: "Digital Transformation",
      description:
        "Led digital initiatives bringing government services online and improving connectivity",
      icon: "💻",
      stats: "80% digitization",
      color: "#4facfe",
    },
    {
      id: 5,
      title: "Rural Development",
      description:
        "Focused on rural upliftment with sustainable development projects and skill training",
      icon: "🌾",
      stats: "200+ villages",
      color: "#43e97b",
    },
    {
      id: 6,
      title: "Women Empowerment",
      description:
        "Launched programs for women's education, employment, and leadership development",
      icon: "👩‍💼",
      stats: "50K+ women",
      color: "#fa709a",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      position: "Education Minister",
      quote:
        "Zeliang's vision for education reform has transformed our state's learning landscape. His commitment to quality education is unmatched.",
      avatar: "👩‍🏫",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      position: "Local Business Owner",
      quote:
        "The infrastructure development under Zeliang's leadership has opened new opportunities for businesses like mine. The roads and connectivity improvements are remarkable.",
      avatar: "👨‍💼",
    },
    {
      id: 3,
      name: "Meena Devi",
      position: "Healthcare Worker",
      quote:
        "As a healthcare worker, I've seen firsthand how Zeliang's healthcare initiatives have improved access to medical services in remote areas.",
      avatar: "👩‍⚕️",
    },
    {
      id: 4,
      name: "Amit Singh",
      position: "Youth Leader",
      quote:
        "Zeliang's focus on youth development and digital transformation has created new pathways for young people in Nagaland.",
      avatar: "👨‍💻",
    },
    {
      id: 5,
      name: "Priya Sharma",
      position: "Rural Development Officer",
      quote:
        "The rural development projects initiated by Zeliang have brought sustainable change to hundreds of villages across the state.",
      avatar: "👩‍🌾",
    },
  ];

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
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="achievements" ref={sectionRef}>
      <div className="achievements-container">
        <h2 className="achievements-title">Key Achievements</h2>

        {/* Parallax Background */}
        <div className="parallax-bg" ref={parallaxRef}>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievementsData.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`achievement-card ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="achievement-icon"
                style={{ backgroundColor: achievement.color }}
              >
                <span>{achievement.icon}</span>
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">
                  {achievement.description}
                </p>
                <div className="achievement-stats">{achievement.stats}</div>
              </div>
              <div
                className="achievement-bg"
                style={{ backgroundColor: achievement.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h3>What People Say</h3>
          <div className="testimonials-container">
            <div className="testimonials-carousel">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-slide ${
                    index === currentTestimonial ? "active" : ""
                  }`}
                >
                  <div className="testimonial-content">
                    <div className="testimonial-avatar">
                      {testimonial.avatar}
                    </div>
                    <blockquote className="testimonial-quote">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="testimonial-author">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="carousel-controls">
              <button className="carousel-btn prev" onClick={prevTestimonial}>
                ‹
              </button>
              <div className="carousel-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentTestimonial ? "active" : ""
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  ></button>
                ))}
              </div>
              <button className="carousel-btn next" onClick={nextTestimonial}>
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="achievement-summary">
          <div className="summary-content">
            <h3>Transformative Leadership</h3>
            <p>
              Zeliang's tenure has been marked by unprecedented development and
              progress across all sectors. From infrastructure to education,
              healthcare to digital transformation, his initiatives have touched
              every aspect of life in Nagaland, creating a foundation for
              sustainable growth and prosperity.
            </p>
            <div className="summary-stats">
              <div className="summary-stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="summary-stat">
                <span className="stat-number">2M+</span>
                <span className="stat-label">Lives Impacted</span>
              </div>
              <div className="summary-stat">
                <span className="stat-number">₹50B+</span>
                <span className="stat-label">Investment Mobilized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
