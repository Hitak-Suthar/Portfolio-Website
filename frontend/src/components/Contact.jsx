import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData.js";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const API_BASE = import.meta.env.VITE_API_URL || "";

      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage({ type: "success", text: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage({ type: "error", text: data.error || "Something went wrong." });
      }
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Could not reach the server. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <p className="section-tag">Contact</p>
      <h2 className="section-heading">Let's Connect</h2>
      <div className="section-underline"></div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-info-item">
            <FaEnvelope />
            <span>{personalInfo.email}</span>
          </div>
          <div className="contact-info-item">
            <FaPhone />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt />
            <span>{personalInfo.location}</span>
          </div>
          <div className="contact-info-item">
            <FaGithub />
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              {personalInfo.github}
            </a>
          </div>
          <div className="contact-info-item">
            <FaLinkedin />
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              {personalInfo.linkedin}
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {statusMessage && (
            <p className={`form-message ${statusMessage.type}`}>
              {statusMessage.text}
            </p>
          )}

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
