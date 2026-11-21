import { useEffect, useState } from "react";
import { C } from "../theme";
import { siteConfig } from "../siteConfig";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function MenuHeader() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a href="#home" style={styles.logo}>{siteConfig.logoText}</a>
        <nav className="site-nav" style={styles.nav}>
          <a href="#home" style={styles.link}><i className="uil uil-estate" style={styles.navIcon}></i>Home</a>
          <a href="#about" style={styles.link}><i className="uil uil-user" style={styles.navIcon}></i>About</a>
          <a href="#experience" style={styles.link}><i className="uil uil-suitcase" style={styles.navIcon}></i>Experience</a>
          <a href="#work" style={styles.link}><i className="uil uil-scenery" style={styles.navIcon}></i>Work</a>
          <a href="#contact" style={styles.contactBtn}><i className="uil uil-message" style={styles.navIcon}></i>Contact</a>
          <button
            type="button"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label="Toggle dark mode"
            style={styles.themeToggle}
          >
            <i className={theme === "dark" ? "uil uil-sun" : "uil uil-moon"}></i>
          </button>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    width: "100%",
    backgroundColor: C.bg,
    borderBottom: `1px solid ${C.rule}`,
    zIndex: 100,
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "16px 5vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.75rem",
  },
  logo: {
    fontFamily: "'Tillana', cursive",
    fontSize: "1.6rem",
    color: C.ink,
    textDecoration: "none",
    fontWeight: 700,
  },
  nav: {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: C.soft,
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
  },
  navIcon: {
    fontSize: "1rem",
    marginRight: "6px",
  },
  contactBtn: {
    textDecoration: "none",
    color: C.accent,
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9rem",
    border: `1px solid ${C.accent}`,
    padding: "6px 16px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
  },
  themeToggle: {
    border: `1px solid ${C.rule}`,
    backgroundColor: "transparent",
    color: C.ink,
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default MenuHeader;
