import Hero from "../components/Hero/Hero";
import CovidTable from "../components/CovidTable/CovidTable";
import FormCovid from "../components/FormCovid/FormCovid";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Provinsi() {
    return (
        <>
        <Navbar />

        <Hero
            title="Covid ID"
            subtitle="Monitoring Perkembangan Covid Per Provinsi"
            description="Pantau data penyebaran Covid per provinsi dari data lokal."
            showButton={true}
            buttonText="Cek Dashboard Vaksin"
        />

        <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
            <h2 style={{ color: "#06d6a0", fontSize: "1.8rem", marginBottom: "1rem" }}>
            Provinsi
            </h2>
            <p style={{ marginBottom: "2rem", color: "#333" }}>
            Data Covid Berdasarkan Provinsi
            </p>
            <CovidTable />
        </section>

        <section
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            padding: "3rem 1rem",
            backgroundColor: "#f8f8f8",
            }}
        >
            <div style={{ flex: "1 1 300px", textAlign: "center" }}>
            <img
                src="/images/1.svg"
                alt="Covid Illustration"
                style={{ maxWidth: "80%", height: "auto" }}
            />
            </div>

            <div style={{ flex: "1 1 400px", padding: "1rem 2rem"}}>
            <h2 style={{ fontSize: "1.5rem", color: "#06d6a0", marginBottom: "1rem" , textAlign: "center" }}>
                Form Covid
            </h2>
            <FormCovid />
            </div>
        </section>

        <Footer />
        </>
    );
}

export default Provinsi;
