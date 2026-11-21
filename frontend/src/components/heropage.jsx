import { C } from "../theme";
import { useReveal } from "../useReveal";
import { siteConfig } from "../siteConfig";

function GlobalStyles() {
  return (
    <style>{`
      @keyframes blobFloat {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-14px) rotate(4deg); }
      }
      @keyframes scrollBounce {
        0%, 100% { transform: translateY(0); opacity: 0.6; }
        50% { transform: translateY(6px); opacity: 1; }
      }
    `}</style>
  );
}

function HeroBlob() {
  return (
    <div className="avatar-tooltip" style={styles.blobWrap}>
      <div style={styles.blob}>
        <img src={siteConfig.avatar} alt={siteConfig.name} style={styles.blobImg} />
      </div>
      {siteConfig.avatarTooltip && (
        <span className="tooltip-text" style={styles.tooltip}>
          {siteConfig.avatarTooltip}
        </span>
      )}
    </div>
  );
}

export default function Hero({ hero, contact }) {
  const revealRef = useReveal();

  return (
    <section style={styles.section} id="home">
      <GlobalStyles />
      <div className="hero-inner" style={styles.inner}>
        <div ref={revealRef} className="reveal hero-text-side" style={styles.textSide}>
          <p style={styles.eyebrow}>{hero.eyebrow}</p>

          <h1 className="hero-title" style={styles.title}>{hero.title}</h1>

          <p style={styles.subtitle}>{hero.subtitle}</p>

          <div className="hero-actions" style={styles.actions}>
            <a href="#experience" style={styles.btnPrimary}>
              See my experience
            </a>
            <a href="#contact" style={styles.btnSecondary}>
              Get in touch
            </a>
          </div>

          <div className="hero-socials" style={styles.socials}>
            <a href={contact.linkedinUrl} style={styles.socialLink} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href={contact.githubUrl} style={styles.socialLink} target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="uil uil-github-alt"></i>
            </a>
            <a href={`mailto:${contact.email}`} style={styles.socialLink} aria-label="Email">
              <i className="uil uil-envelope"></i>
            </a>
          </div>

          <div className="hero-tech-stack" style={styles.techStack}>
            {hero.techBadges.map((t) => (
              <span key={t} style={styles.techBadge}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-graphic-side" style={styles.graphicSide}>
          <HeroBlob />
        </div>
      </div>

      <a href="#about" style={styles.scrollCue} aria-label="Scroll to About">
        <i className="uil uil-mouse-alt-2" style={{ fontSize: "1.4rem" }}></i>
        <i className="uil uil-arrow-down" style={{ fontSize: "0.9rem", animation: "scrollBounce 1.6s ease-in-out infinite" }}></i>
      </a>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    backgroundColor: C.bg,
    borderBottom: `1px solid ${C.rule}`,
    padding: "0 5vw",
  },
  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "5rem 0 6rem",
    display: "flex",
    alignItems: "center",
    gap: "3rem",
  },
  textSide: {
    flex: "1 1 460px",
    minWidth: 0,
  },
  graphicSide: {
    flex: "0 0 260px",
    display: "flex",
    justifyContent: "center",
  },
  eyebrow: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9rem",
    color: C.soft,
    letterSpacing: "0.02em",
    margin: "0 0 1.25rem",
  },
  title: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "clamp(1.9rem, 4.2vw, 2.6rem)",
    lineHeight: 1.3,
    fontWeight: 400,
    color: C.ink,
    margin: "0 0 1.5rem",
  },
  subtitle: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.02rem",
    lineHeight: 1.7,
    color: C.soft,
    maxWidth: "58ch",
    margin: "0 0 2rem",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    marginBottom: "1.5rem",
  },
  socials: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.9rem",
    marginBottom: "2.5rem",
  },
  socialLink: {
    fontSize: "1.15rem",
    color: C.accent,
    textDecoration: "none",
    border: `1px solid ${C.rule}`,
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnPrimary: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.92rem",
    backgroundColor: C.accent,
    color: "#fff",
    padding: "0.75rem 1.4rem",
    borderRadius: "6px",
    textDecoration: "none",
    display: "inline-block",
  },
  btnSecondary: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.92rem",
    border: `1px solid ${C.rule}`,
    backgroundColor: "transparent",
    color: C.ink,
    padding: "0.75rem 1.4rem",
    borderRadius: "6px",
    textDecoration: "none",
    display: "inline-block",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  techBadge: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.78rem",
    color: C.soft,
    border: `1px solid ${C.rule}`,
    padding: "0.25rem 0.65rem",
    borderRadius: "4px",
  },

  // blob graphic
  blobWrap: {
    position: "relative",
  },
  blob: {
    width: "260px",
    height: "260px",
    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "blobFloat 7s ease-in-out infinite",
    boxShadow: "0 20px 40px -12px rgba(110, 87, 224, 0.45)",
    cursor: "default",
  },
  blobImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  tooltip: {
    position: "absolute",
    bottom: "-2.2rem",
    left: "50%",
    backgroundColor: C.ink,
    color: C.bg,
    padding: "0.5rem 0.9rem",
    borderRadius: "6px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.78rem",
    whiteSpace: "nowrap",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    pointerEvents: "none",
  },

  scrollCue: {
    position: "absolute",
    left: "50%",
    bottom: "1.5rem",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.3rem",
    color: C.soft,
    textDecoration: "none",
  },
};
