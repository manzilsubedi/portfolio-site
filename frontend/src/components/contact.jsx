import { useState } from "react";
import { C } from "../theme";
import { useReveal } from "../useReveal";

function encodeForNetlify(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Contact({ contact }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const revealRef = useReveal();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForNetlify({ "form-name": "contact", ...formData }),
      });
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" style={styles.section}>
      <div ref={revealRef} className="reveal" style={styles.inner}>
        <p style={styles.eyebrow}>Contact</p>
        <h2 style={styles.heading}>Get in touch</h2>
        <p style={styles.paragraph}>
          Feel free to reach out directly, or use the form below.
        </p>

        <div style={styles.directContact}>
          <a href={`mailto:${contact.email}`} style={styles.directLink}>
            <i className="uil uil-envelope" style={styles.directIcon}></i>
            {contact.email}
          </a>
          {contact.phone && (
            <span style={styles.directLink}>
              <i className="uil uil-phone" style={styles.directIcon}></i>
              {contact.phone}
            </span>
          )}
          <span style={styles.directLink}>
            <i className="uil uil-map-marker" style={styles.directIcon}></i>
            {contact.location}
          </span>
        </div>

        {status === "sent" ? (
          <p style={styles.successMessage}>
            <i className="uil uil-check-circle" style={{ color: C.accent }}></i>
            Thanks — your message has been sent. I'll get back to you soon.
          </p>
        ) : (
          <form
            name="contact"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            style={styles.form}
          >
            {/* Netlify needs this on the submitted form too, and a bot-field it hides from real users. */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="bot-field" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={styles.textarea}
            />
            <button type="submit" disabled={status === "sending"} style={styles.button}>
              <i className="uil uil-message"></i>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "error" && (
              <p style={styles.errorMessage}>
                Something went wrong — please email me directly instead.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: C.bg,
    padding: "5rem 5vw",
  },
  inner: {
    maxWidth: "560px",
    margin: "0 auto",
  },
  eyebrow: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9rem",
    color: C.accent,
    fontWeight: 600,
    margin: "0 0 0.5rem",
  },
  heading: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "clamp(1.7rem, 3.5vw, 2.1rem)",
    fontWeight: 400,
    color: C.ink,
    margin: "0 0 1.25rem",
  },
  paragraph: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.02rem",
    lineHeight: 1.7,
    color: C.soft,
    margin: "0 0 1.5rem",
  },
  directContact: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    marginBottom: "2.5rem",
    paddingBottom: "1.5rem",
    borderBottom: `1px solid ${C.rule}`,
  },
  directLink: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.95rem",
    color: C.ink,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
  },
  directIcon: {
    color: C.accent,
    fontSize: "1.05rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.95rem",
    padding: "0.75rem 1rem",
    border: `1px solid ${C.rule}`,
    borderRadius: "4px",
    backgroundColor: C.bg,
    color: C.ink,
    outline: "none",
  },
  textarea: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.95rem",
    padding: "0.75rem 1rem",
    border: `1px solid ${C.rule}`,
    borderRadius: "4px",
    backgroundColor: C.bg,
    color: C.ink,
    outline: "none",
    resize: "vertical",
  },
  button: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.95rem",
    backgroundColor: C.accent,
    color: "#fff",
    padding: "0.8rem 1.4rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  },
  successMessage: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.95rem",
    color: C.ink,
    backgroundColor: C.accentMuted,
    border: `1px solid ${C.rule}`,
    borderRadius: "6px",
    padding: "1rem 1.25rem",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },
  errorMessage: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.85rem",
    color: "#c0392b",
    margin: "0.5rem 0 0",
  },
};
