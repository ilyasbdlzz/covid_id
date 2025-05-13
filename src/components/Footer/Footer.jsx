import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <h2 className={styles.footer__title}>Covid ID</h2>
          <p className={styles.footer__author}>Developed by Ilyas</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#">Global</a>
          <a href="#">Indonesia</a>
          <a href="#">Provinsi</a>
          <a href="#">About</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
