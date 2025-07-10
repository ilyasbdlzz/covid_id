import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import AllNumber from "../components/AllNumber/AllNumber";

function Home() {
  const [globalData, setGlobalData] = useState({
    confirmed: 0,
    recovered: 0,
    death: 0,
  });

  const [regionData, setRegionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://covid-fe-2023.vercel.app/api/global.json")
      .then((res) => {
        const raw = res.data;

        const confirmed = raw.global.find((d) => d.status === "confirmed")?.total || 0;
        const recovered = raw.global.find((d) => d.status === "recovered")?.total || 0;
        const death = raw.global.find((d) => d.status === "death")?.total || 0;

        setGlobalData({ confirmed, recovered, death });
        setRegionData(raw.regions || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching global data:", err);
        setLoading(false);
      });
  }, []);

  const Dot = ({ color }) => (
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: color,
        marginLeft: "8px",
      }}
    />
  );

  return (
    <>
      <Navbar />
      <Hero
        title="Covid ID"
        subtitle="Monitoring Perkembangan Covid Global"
        description="Pantau data terbaru penyebaran Covid-19 secara global."
        showButton={true}
        buttonText="Cek Dashboard Vaksin"
        buttonLink="https://vaksin.kemkes.go.id/"
      />

      <section style={{ textAlign: "center", padding: "2rem 1rem" }}>
        <h2 style={{ fontSize: "2rem", color: "#06d6a0", marginBottom: "0.5rem" }}>
          Global Situation
        </h2>
        <p style={{ marginBottom: "2rem" }}>Data Covid Berdasarkan Global</p>

        {loading ? (
          <p>Loading data...</p>
        ) : (
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            <AllNumber title="Confirmed" value={globalData.confirmed} />
            <AllNumber title="Recovered" value={globalData.recovered} />
            <AllNumber title="Death" value={globalData.death} />
          </div>
        )}
      </section>

      {!loading && regionData.length > 0 && (
        <section style={{ textAlign: "center", padding: "3rem 1rem" }}>
          <h2 style={{ fontSize: "2rem", color: "#06d6a0", marginBottom: "0.5rem" }}>
            Situation by Regions
          </h2>
          <p style={{ marginBottom: "2rem" }}>Situasi Covid berdasarkan Negara</p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {regionData.map((region) => (
            <div
              key={region.name}
              style={{
                background: "#fff",
                padding: "1.5rem",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                width: "220px",
                textAlign: "left",
              }}
            >
              <h3 style={{ textAlign: "center", color: "#073b4c" }}>{region.name}</h3>

              {/* Confirmed */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ margin: 0, color: "#06d6a0", fontWeight: "bold" }}>Confirmed</p>
                  <p style={{ margin: 0 }}>{region.numbers.confirmed.toLocaleString()}</p>
                </div>
                <Dot color="#06d6a0" />
              </div>

              {/* Recovered */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ margin: 0, color: "#118ab2", fontWeight: "bold" }}>Recovered</p>
                  <p style={{ margin: 0 }}>{region.numbers.recovered.toLocaleString()}</p>
                </div>
                <Dot color="#118ab2" />
              </div>

              {/* Death */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ margin: 0, color: "#ef476f", fontWeight: "bold" }}>Death</p>
                  <p style={{ margin: 0 }}>{region.numbers.death.toLocaleString()}</p>
                </div>
                <Dot color="#ef476f" />
              </div>
            </div>
          ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

export default Home;
