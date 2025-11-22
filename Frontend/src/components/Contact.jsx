import React, { useState, useEffect } from "react";
import ClickSound from "/mouse_click_sound.mp3";
import SocialMedia from "./SocialMedia";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://your-backend-url.com")
      .then(() => console.log("Backend warmed up"))
      .catch(() => console.log("Backend still sleeping…"));
  }, []);

  function handleButtonClick() {
    const clickSound = new Audio(ClickSound);
    clickSound.play();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleButtonClick();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.ok) {
        setLoading("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="Contact">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name *"
          required
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="How can I help?"
          value={form.message}
          onChange={handleChange}
        />
        <div className="form-buttons">
          <button type="submit" disabled={loading}>
            {loading === "sent"
              ? "Sent"
              : loading
              ? "Sending..."
              : "Get In Touch"}
          </button>
          <SocialMedia />
        </div>
      </form>
      <div className="contact-info">
        <div className="contact-info-heading">
          <h2>
            Let's <span>talk</span> for Something special
          </h2>
          <p>
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
        </div>
        <div className="contact-info-heading">
          <a
            href="https://mail.google.com/mail/?view=cm&to=sunny962002@gmail.com"
            target="_blank"
          >
            sunny962002@gmail.com
          </a>
          <a href="tel:+919347744815">+91 934 77 44 815</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
