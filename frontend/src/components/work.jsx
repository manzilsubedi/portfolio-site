import { C } from "../theme";
import { useReveal } from "../useReveal";

function ProjectCard({ project }) {
  return (
    <a href={project.link} target="_blank" rel="noreferrer" className="project-card" style={styles.card}>
      <div style={styles.cardHead}>
        <h3 style={styles.cardTitle}>{project.title}</h3>
        <i className="uil uil-external-link-alt" style={styles.cardLinkIcon}></i>
      </div>
      <p style={styles.cardDescription}>{project.description}</p>
      <div style={styles.cardTags}>
        {project.tags.map((tag) => (
          <span key={tag} style={styles.cardTag}>
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Work({ work }) {
  const revealRef = useReveal();
  const { introParagraph, projects } = work;

  return (
    <section id="work" style={styles.section}>
      <div ref={revealRef} className="reveal" style={styles.inner}>
        <p style={styles.eyebrow}>Work</p>
        <h2 style={styles.heading}>Freelance projects</h2>
        <p style={styles.paragraph}>{introParagraph}</p>

        <div style={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    display: "block",
    border: `1px solid ${C.rule}`,
    borderRadius: "8px",
    padding: "1.5rem",
    textDecoration: "none",
    backgroundColor: C.card,
  },
  cardHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
  cardLinkIcon: {
    color: C.accent,
    fontSize: "1rem",
    flexShrink: 0,
  },
  cardTitle: {
    fontFamily: "Georgia, serif",
    fontSize: "1.1rem",
    fontWeight: 400,
    color: C.ink,
    margin: "0 0 0.6rem",
  },
  cardDescription: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9rem",
    lineHeight: 1.6,
    color: C.soft,
    margin: "0 0 1.2rem",
  },
  cardTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },
  cardTag: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.75rem",
    color: C.ink,
    border: `1px solid ${C.rule}`,
    padding: "0.25rem 0.6rem",
    borderRadius: "999px",
    backgroundColor: C.accentMuted,
  },
};
