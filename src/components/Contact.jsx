import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import "./ContactForm.css";

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Are you open to freelance projects or collaborations?",
      answer:
        "Yes! I'm open to freelance projects, internships, and collaborations. Feel free to reach out!",
    },
    {
      question: "What's the best way to contact you?",
      answer:
        "You can email me at siddhigawade.sbg25@gmail.com or connect with me on LinkedIn.",
    },
    {
      question: "Where are you based?",
      answer:
        "I'm currently based in Navi Mumbai, India, but I'm open to remote work opportunities worldwide.",
    },
    {
      question: "Can I schedule a meeting with you?",
      answer: "Yes! You can drop me an email to schedule a call at your convenience.",
    },
    {
      question: "Do you provide mentorship or guidance?",
      answer:
        "Yes! I love helping students and beginners in tech. If you need guidance on projects, databases, or web development, let's connect!",
    },
    {
      question: "How do you approach learning new technologies?",
      answer:
        "I start by understanding the core concepts, then apply them through small projects or real use cases. I believe in learning by building, experimenting, and continuously improving through feedback and practice.",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // NOTE: Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    // You can sign up for free at https://www.emailjs.com/
    emailjs
      .sendForm(
        "service_g5whgo4",
        "template_4ywe7wi",
        form.current,
        "acPpPnkSeKWXJoLee"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message is sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Let's work together</p>
      </div>

      <div className="contact-content">
        {/* Contact Info Box */}
        <div className="contact-form-box">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div className="info-content">
                <h4>Email</h4>
                <a href="mailto:siddhigawade.sbg25@gmail.com">
                  siddhigawade.sbg25@gmail.com
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h3>Send Message</h3>
              <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <input type="text" name="user_name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="user_email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
            {/* Social Media Links - Removed */}
          </div>
        </div>

        {/* FAQ Section beside Contact Form */}
        <div className="faq-section">
          <h2 className="faq-head">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span>{activeIndex === index ? "▲" : "▼"}</span>
                </button>
                {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
