import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.subject.trim() || !form.message.trim()) {
      setFeedback("Please complete all fields.");
      return;
    }

    setFeedback(`Thank you, ${form.name}! Your message has been received.`);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <>
      <section className="page-banner contact-banner">
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </section>

      <section className="contact-section section">
        <div className="contact-info">
          <span className="subtitle">GET IN TOUCH</span>
          <h2>Let's Talk</h2>

          <p>
            Have a question or need assistance with your reservation? Our team
            is ready to help you.
          </p>

          <div className="contact-detail">
            <h3>📍 Our Location</h3>
            <p>Abuja, Nigeria</p>
          </div>

          <div className="contact-detail">
            <h3>📞 Phone Number</h3>
            <p>+234 800 123 4567</p>
          </div>

          <div className="contact-detail">
            <h3>✉️ Email Address</h3>
            <p>info@royalstay.com</p>
          </div>

          <div className="contact-detail">
            <h3>🕒 Working Hours</h3>
            <p>Monday – Sunday: 24 Hours</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="primary-button">
            Send Message
          </button>

          {feedback && <p className="form-message">{feedback}</p>}
        </form>
      </section>
    </>
  );
}

export default Contact;
