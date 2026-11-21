import { C } from "../theme";
import { useReveal } from "../useReveal";

export default function About({ about }) {
  const revealRef = useReveal();
  const { paragraph, skillGroups, education, certifications } = about;

  return (
    <section id="about" style={styles.section}>
      <div ref={revealRef} className="reveal" style={styles.inner}>
        <p style={styles.eyebrow}>About</p>
        <h2 style={styles.heading}>Background</h2>
        <p style={styles.paragraph}>{paragraph}</p>

        <div style={styles.skillGrid}>
          {skillGroups.map((group) => (
            <div key={group.label} style={styles.skillCard}>
              <div style={styles.skillCardHead}>
                <i className={`uil ${group.icon}`} style={styles.skillIcon}></i>
                <p style={styles.skillLabel}>{group.label}</p>
              </div>
              <div style={styles.skillRow}>
                {group.items.map((skill) => (
                  <span key={skill} style={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 style={styles.subheading}>
          <i className="uil uil-graduation-cap" style={styles.subheadingIcon}></i>
          Education
        </h3>
        <div style={styles.timeline}>
          {education.map((item) => (
            <div key={item.school} style={styles.timelineItem}>
              <div>
                <p style={styles.eduPeriod}>{item.period}</p>
                <p style={styles.eduDegree}>{item.degree}</p>
                <p style={styles.eduSchool}>{item.school}</p>
                <p style={styles.eduDetails}>{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={styles.subheading}>
          <i className="uil uil-award" style={styles.subheadingIcon}></i>
          Certifications
        </h3>
        <div style={styles.certList}>
          {certifications.map((cert) => (
            <div key={cert.name} style={styles.certItem}>
              <span style={styles.certName}>{cert.name}</span>
              <span style={styles.certDate}>{cert.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: C.bg,
    borderBottom: `1px solid ${C.rule}`,
    padding: "5rem 5vw",
  },
  inner: {
    maxWidth: "760px",
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
    margin: "0 0 2.5rem",
    maxWidth: "60ch",
  },
  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1rem",
    marginBottom: "3.5rem",
  },
  skillCard: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    border: `1px solid ${C.rule}`,
    borderRadius: "8px",
    padding: "1.25rem",
    backgroundColor: C.card,
  },
  skillCardHead: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  skillIcon: {
    fontSize: "1.2rem",
    color: C.accent,
  },
  skillLabel: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.8rem",
    color: C.ink,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    margin: 0,
  },
  skillRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  skillBadge: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.82rem",
    color: C.soft,
    border: `1px solid ${C.rule}`,
    padding: "0.3rem 0.7rem",
    borderRadius: "4px",
  },
  subheading: {
    fontFamily: "Georgia, serif",
    fontSize: "1.25rem",
    fontWeight: 400,
    color: C.ink,
    margin: "0 0 1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },
  subheadingIcon: {
    color: C.accent,
    fontSize: "1.1rem",
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    marginBottom: "3.5rem",
  },
  timelineItem: {
    borderLeft: `2px solid ${C.rule}`,
    paddingLeft: "1.25rem",
  },
  eduPeriod: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.78rem",
    color: C.accent,
    fontWeight: 600,
    margin: "0 0 0.25rem",
  },
  eduDegree: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.02rem",
    color: C.ink,
    fontWeight: 600,
    margin: 0,
  },
  eduSchool: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.92rem",
    color: C.soft,
    margin: "0.15rem 0 0.6rem",
  },
  eduDetails: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.88rem",
    lineHeight: 1.6,
    color: C.soft,
    margin: 0,
  },
  certList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  certItem: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    borderBottom: `1px solid ${C.rule}`,
    paddingBottom: "0.75rem",
  },
  certName: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.92rem",
    color: C.ink,
  },
  certDate: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.85rem",
    color: C.soft,
    whiteSpace: "nowrap",
  },
};
