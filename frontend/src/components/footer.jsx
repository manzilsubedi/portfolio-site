import { C } from "../theme";
import { siteConfig } from "../siteConfig";

// Social links come from the Contact section in the database (editable in /admin).
export default function Footer({ contact }) {
  const linkedinUrl = contact?.linkedinUrl;
  const githubUrl = contact?.githubUrl;

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
      <div style={styles.links}>
        {linkedinUrl && (
          <a href={linkedinUrl} style={styles.link} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin-alt"></i>
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} style={styles.link} aria-label="GitHub" target="_blank" rel="noreferrer">
            <i className="uil uil-github-alt"></i>
          </a>
        )}
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: C.bg,
    borderTop: `1px solid ${C.rule}`,
    padding: "2rem 5vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
  text: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.85rem",
    color: C.soft,
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    fontSize: "1.15rem",
    color: C.ink,
    textDecoration: "none",
    border: `1px solid ${C.rule}`,
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
