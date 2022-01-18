import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.siteWrapper}>
    <header className={styles.header}>
      <h1 className={styles.textLogo}>tw.</h1>
    </header>
    {children}
    <footer className={styles.footer}>
      <h2 className={styles.textLogo}>tw. - {new Date().getFullYear()}</h2>
      <section className={styles.socialMedia}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/mrlepak"
        >
          Github
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/try-wijono"
        >
          Linkedin
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/tuhrye"
        >
          Instagram
        </a>
      </section>
    </footer>
  </div>
);

export default Layout;
