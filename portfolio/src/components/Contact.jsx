import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "https://facebook.com",
      color: "#1877f2",
    },
    {
      name: "Twitter",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      url: "https://twitter.com",
      color: "#1da1f2",
    },
    {
      name: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z" />
        </svg>
      ),
      url: "https://instagram.com",
      color: "#e4405f",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://linkedin.com",
      color: "#0077b5",
    },
    
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleInputBlur = (fieldName) => {
    if (!formData[fieldName]) {
      setFocusedField("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFocusedField("");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Connect with me for collaborations, inquiries, or just to say hello
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h3 className="form-title">Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-container">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus("name")}
                    onBlur={() => handleInputBlur("name")}
                    className={`form-input ${
                      focusedField === "name" || formData.name ? "focused" : ""
                    }`}
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`floating-label ${
                      focusedField === "name" || formData.name ? "focused" : ""
                    }`}
                  >
                    Full Name
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-container">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus("email")}
                    onBlur={() => handleInputBlur("email")}
                    className={`form-input ${
                      focusedField === "email" || formData.email
                        ? "focused"
                        : ""
                    }`}
                    required
                  />
                  <label
                    htmlFor="email"
                    className={`floating-label ${
                      focusedField === "email" || formData.email
                        ? "focused"
                        : ""
                    }`}
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-container">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus("subject")}
                    onBlur={() => handleInputBlur("subject")}
                    className={`form-input ${
                      focusedField === "subject" || formData.subject
                        ? "focused"
                        : ""
                    }`}
                    required
                  />
                  <label
                    htmlFor="subject"
                    className={`floating-label ${
                      focusedField === "subject" || formData.subject
                        ? "focused"
                        : ""
                    }`}
                  >
                    Subject
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-container">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus("message")}
                    onBlur={() => handleInputBlur("message")}
                    className={`form-input textarea ${
                      focusedField === "message" || formData.message
                        ? "focused"
                        : ""
                    }`}
                    rows="5"
                    required
                  />
                  <label
                    htmlFor="message"
                    className={`floating-label ${
                      focusedField === "message" || formData.message
                        ? "focused"
                        : ""
                    }`}
                  >
                    Your Message
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="loading-spinner">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus && (
                <div className={`submit-status ${submitStatus}`}>
                  {submitStatus === "success"
                    ? "Message sent successfully! I'll get back to you soon."
                    : "Something went wrong. Please try again."}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="contact-info-container">
            <div className="contact-info">
              <h3 className="info-title">Contact Information</h3>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Kohima, Nagaland, India</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>contact@trzeliang.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+91 123 456 7890</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-content">
                  <h4>Office Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3 className="social-title">Follow Me</h3>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <button
                    key={social.name}
                    className="social-icon"
                    onClick={() => handleSocialClick(social.url)}
                    style={{ "--hover-color": social.color }}
                    aria-label={social.name}
                  >
                    <span className="icon-svg">{social.icon}</span>
                    <span className="icon-name">{social.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
       
      </div>
    </div>
  );
};

export default Contact;
