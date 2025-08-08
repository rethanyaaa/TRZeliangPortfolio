import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [signatureComplete, setSignatureComplete] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const quickLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    {
      id: "political-career",
      label: "Political Career",
      href: "#political-career",
    },
    { id: "achievements", label: "Achievements", href: "#achievements" },
    { id: "gallery", label: "Gallery", href: "#gallery" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      url: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z" />
        </svg>
      ),
      url: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://linkedin.com",
    },
    {
      name: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: "https://youtube.com",
    },
  ];

  // Handle scroll visibility and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show footer when near bottom of page
      if (scrollPosition + windowHeight > documentHeight - 200) {
        setIsVisible(true);
      }

      // Show back-to-top button when scrolled down
      if (scrollPosition > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle signature animation
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setSignatureComplete(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleQuickLinkClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer visible">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="quick-links">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    className="quick-link"
                    onClick={() => handleQuickLinkClick(link.href)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <p>📍 Kohima, Nagaland, India</p>
              <p>📧 contact@trzeliang.com</p>
              <p>📞 +91 123 456 7890</p>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="footer-section">
            <h3 className="footer-title">Follow Me</h3>
            <div className="social-links">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  className="social-link"
                  onClick={() => handleSocialClick(social.url)}
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Signature Section */}
        <div className="signature-section">
          <div className="signature-container">
            <div className={`signature ${signatureComplete ? "complete" : ""}`}>
              <svg
                className="signature-svg"
                viewBox="0 0 300 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="signature-path"
                  d="M20,30 Q40,20 60,30 T100,30 Q120,40 140,30 T180,30 Q200,20 220,30 T260,30 Q280,40 300,30"
                  fill="none"
                  stroke="#4facfe"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="signature-text">T. R. Zeliang</span>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>© {currentYear} T. R. Zeliang. All rights reserved.</p>
            <p className="disclaimer">
              This website is for informational purposes only. The content
              represents the personal views and achievements of T. R. Zeliang.
            </p>
          </div>

          <div className="footer-legal">
            <button className="legal-link">Privacy Policy</button>
            <span className="separator">•</span>
            <button className="legal-link">Terms of Use</button>
            <span className="separator">•</span>
            <button className="legal-link">Disclaimer</button>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          className={`back-to-top ${showBackToTop ? "visible" : ""}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <span className="arrow-up">↑</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
