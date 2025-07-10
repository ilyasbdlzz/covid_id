function RegionCard({ name, confirmed, recovered, death }) {
    return (
        <div
        style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            width: "200px",
            margin: "10px",
            textAlign: "center",
            transition: "all 0.3s ease-in-out",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "260px" // optional, untuk memastikan tinggi seragam
        }}
        >
        <h3
            style={{
            fontSize: "1.2rem",
            marginBottom: "1rem",
            color: "#073B4C",
            wordWrap: "break-word",
            whiteSpace: "normal",
            minHeight: "2.8rem", // untuk jaga jarak antar kartu tetap rata
            }}
        >
            {name}
        </h3>

        <p style={{ color: "#06d6a0", margin: "0.5rem 0" }}>
            Confirmed<br />
            <strong>{confirmed.toLocaleString()}</strong>
        </p>
        <p style={{ color: "#118ab2", margin: "0.5rem 0" }}>
            Recovered<br />
            <strong>{recovered.toLocaleString()}</strong>
        </p>
        <p style={{ color: "#ef476f", margin: "0.5rem 0" }}>
            Death<br />
            <strong>{death.toLocaleString()}</strong>
        </p>
        </div>
    );
}

export default RegionCard;
