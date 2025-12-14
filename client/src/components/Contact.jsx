import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram, FaReddit, FaDiscord } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzpzrkr");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowNotification(true);
      // Hide notification after 4 seconds
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Have a project in mind? Let's connect and create something amazing together!</p>
        
        {/* Success Notification */}
        {showNotification && (
          <div className="notification-toast success">
            <div className="notification-content">
              <span className="notification-icon">✓</span>
              <div className="notification-text">
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="contact-wrapper">
          {/* Contact Form */}
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                />
                <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows="5"
                  required
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button type="submit" className="btn-submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <h3>Contact Information</h3>
            
            <div className="contact-info-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:mohitkadu@example.com">mohitkadu@example.com</a>
              </div>
            </div>

            <div className="contact-info-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>

            <div className="contact-info-item">
              <FaLinkedin className="contact-icon" />
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/mohitkadu" target="_blank" rel="noopener noreferrer">linkedin.com/in/mohitkadu</a>
              </div>
            </div>

            <div className="contact-info-item">
              <FaGithub className="contact-icon" />
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/mohitkadu" target="_blank" rel="noopener noreferrer">github.com/mohitkadu</a>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="https://instagram.com/mohitkadu" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://reddit.com/user/mohitkadu" target="_blank" rel="noopener noreferrer" title="Reddit">
                  <FaReddit />
                </a>
                <a href="https://discord.com/users/mohitkadu" target="_blank" rel="noopener noreferrer" title="Discord">
                  <FaDiscord />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;