function AllNumber({ title, value }) {
  // Tentukan warna berdasarkan title
  const getColor = () => {
    if (title.toLowerCase() === "death" || title.toLowerCase() === "meninggal") {
      return "#ef476f"; // merah
    } else if (title.toLowerCase() === "recovered" || title.toLowerCase() === "sembuh") {
      return "#118ab2"; // biru
    } else {
      return "#06d6a0"; // hijau
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px 30px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        minWidth: "200px",
        textAlign: "center",
      }}
    >
      <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{title}</p>
      <p style={{ fontSize: "1.8rem", color: getColor() }}>
        {Number(value).toLocaleString()}
      </p>
    </div>
  );
}

export default AllNumber;
