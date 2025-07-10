import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AllNumber from "../components/AllNumber/AllNumber";
import Hero from "../components/Hero/Hero";
import styled from "styled-components";

// Styled components
const Section = styled.section`
  text-align: center;
  padding: 3rem 1rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #06d6a0;
  margin-bottom: 0.5rem;
`;

const SubText = styled.p`
  margin-bottom: 2rem;
  color: #333;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 2rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`;

const Th = styled.th`
  padding: 0.75rem;
  border: 1px solid #ccc;
  background-color: #06d6a0;
  color: white;
`;

const Td = styled.td`
  padding: 0.5rem;
  border: 1px solid #ccc;
  text-align: center;
`;

function Indonesia() {
  const [indonesiaData, setIndonesiaData] = useState({
    confirmed: 0,
    recovered: 0,
    death: 0,
  });
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://covid-fe-2023.vercel.app/api/indonesia.json")
      .then((res) => {
        const data = res.data;
        const summary = data.indonesia;

        setIndonesiaData({
          confirmed: summary.find((d) => d.status === "confirmed")?.total || 0,
          recovered: summary.find((d) => d.status === "recovered")?.total || 0,
          death: summary.find((d) => d.status === "death")?.total || 0,
        });

        setProvinces(data.regions);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Indonesia data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero
        title="Covid ID"
        subtitle="Monitoring Perkembangan Covid di Indonesia"
        description="Pantau data terbaru penyebaran Covid-19 di Indonesia"
        showButton={true}
        buttonText="Cek Dashboard Vaksin"
      />

      <Section>
        <Heading>Data Covid Indonesia</Heading>
        <SubText>Update data Covid-19 terbaru untuk wilayah Indonesia</SubText>

        {loading ? (
          <p>Memuat data...</p>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <AllNumber title="Terkonfirmasi" value={indonesiaData.confirmed} />
            <AllNumber title="Sembuh" value={indonesiaData.recovered} />
            <AllNumber title="Meninggal" value={indonesiaData.death} />
          </div>
        )}
      </Section>

      {!loading && provinces.length > 0 && (
        <Section style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ color: "#073B4C", marginBottom: "1rem" }}>
            Data Covid Berdasarkan Provinsi
          </h2>

          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  <Th>No</Th>
                  <Th>Provinsi</Th>
                  <Th>Terkonfirmasi</Th>
                  <Th>Sembuh</Th>
                  <Th>Dirawat</Th>
                  <Th>Meninggal</Th>
                </tr>
              </thead>
              <tbody>
                {provinces.map((prov, index) => (
                  <tr key={prov.name}>
                    <Td>{index + 1}</Td>
                    <Td>{prov.name}</Td>
                    <Td>{prov.numbers.confirmed.toLocaleString()}</Td>
                    <Td>{prov.numbers.recovered.toLocaleString()}</Td>
                    <Td>{prov.numbers.treatment.toLocaleString()}</Td>
                    <Td>{prov.numbers.death.toLocaleString()}</Td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TableWrapper>
        </Section>
      )}

      <Footer />
    </>
  );
}

export default Indonesia;
