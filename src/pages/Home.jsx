import Footer from "../components/Footer/Footer";
import FormCovid from "../components/FormCovid/FormCovid";
import Hero from "../components/Hero/Hero";
import CovidTable from "../components/CovidTable/CovidTable";
import Navbar from "../components/Navbar/Navbar";
import AllNumber from "../components/AllNumber/AllNumber";
import { indonesiaData } from "../components/utils/constants/indonesia";
import { provinceData } from "../components/utils/constants/province";
import { useState } from "react";
import styles from './Home.module.css';

function Home() {
  const [data, setData] = useState(provinceData.rows);

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section className={styles.statsSection}>
          <h2 className={styles.sectionTitle}>Indonesia</h2>
          <h3 className={styles.sectionSubtitle}>
            Data Covid Berdasarkan Indonesia
          </h3>
          <div className={styles.statsGrid}>
            <AllNumber title="Confirmed" value={indonesiaData.confirmed} />
            <AllNumber title="Recovered" value={indonesiaData.recovered} />
            <AllNumber title="Death" value={indonesiaData.death} />
          </div>
        </section>

        <section className={styles.tableSection}>
          <h2 className={styles.sectionTitle}>Provinsi</h2>
          <p className={styles.sectionSubtitle}>
            Data Covid Berdasarkan Provinsi
          </p>
          <CovidTable data={data} />
        </section>

        <FormCovid data={data} setData={setData} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
