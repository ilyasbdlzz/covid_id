import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h1 className={styles.hero__title}>Covid ID</h1>
          <h2 className={styles.hero__genre}>Monitoring Perkembangan Covid</h2>
          <p className={styles.hero__description}>
            Covid ID  
Pantau Perkembangan Covid-19 Secara Real-Time  
Covid ID adalah aplikasi untuk memantau data dan perkembangan kasus Covid-19 secara global, nasional, dan per provinsi. Dapatkan informasi akurat dan terkini dari sumber terpercaya.

          </p>
          <button className={styles.hero__button}>Info Vaksin</button>
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
