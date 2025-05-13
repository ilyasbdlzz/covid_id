import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h1 className={styles.hero__title}>Covid ID</h1>
          <h2 className={styles.hero__genre}>Monitoring Perkembangan Covid</h2>
          <p className={styles.hero__description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>

        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src="./images/hero.svg"
            alt="Hero"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
