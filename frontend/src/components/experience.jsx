import { C } from "../theme";
import { useReveal } from "../useReveal";

export default function Experience({ experience }) {
  const revealRef = useReveal();

  return (
    <section id="experience" style={styles.section}>
      <div ref={revealRef} className="reveal" style={styles.inner}>
        <p style={styles.eyebrow}>Experience</p>
        <h2 style={styles.heading}>Where I've worked</h2>

        <div style={styles.list}>
          {experience.map((job) => (
            <div key={job.company} style={styles.job}>
              <div style={styles.jobIconWrap}>
                <i className={`uil ${job.icon}`} style={styles.jobIcon}></i>
              </div>
              <div style={styles.jobBody}>
                <div style={styles.jobHeader}>
                  <div>
                    <p style={styles.role}>
                      {job.role}
                      {job.current && <span style={styles.currentBadge}>Current</span>}
                    </p>
                    <p style={styles.company}>{job.company} · {job.location}</p>
                  </div>
                  <p style={styles.period}>{job.period}</p>
                </div>
                <ul style={styles.points}>
                  {job.points.map((point, i) => (
                    <li key={i} style={styles.point}>{point}</li>
                  ))}
                </ul>
              </div>
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
    margin: "0 0 2.5rem",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  job: {
    display: "flex",
    gap: "1rem",
    border: `1px solid ${C.rule}`,
    borderRadius: "8px",
    padding: "1.5rem",
    backgroundColor: C.card,
  },
  jobIconWrap: {
    flex: "0 0 auto",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: C.accentMuted,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  jobIcon: {
    fontSize: "1.2rem",
    color: C.accent,
  },
  jobBody: {
    flex: "1 1 auto",
    minWidth: 0,
  },
  jobHeader: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  role: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.05rem",
    fontWeight: 600,
    color: C.ink,
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },
  currentBadge: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.7rem",
    fontWeight: 600,
    color: C.accent,
    backgroundColor: C.accentMuted,
    padding: "0.15rem 0.55rem",
    borderRadius: "999px",
  },
  company: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.92rem",
    color: C.soft,
    margin: "0.2rem 0 0",
  },
  period: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.85rem",
    color: C.soft,
    whiteSpace: "nowrap",
  },
  points: {
    margin: 0,
    paddingLeft: "1.1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },
  point: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.92rem",
    lineHeight: 1.6,
    color: C.soft,
  },
};
