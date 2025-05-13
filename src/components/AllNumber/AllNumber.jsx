import styles from "./AllNumber.module.css";

const AllNumber = ({ title, value }) => {
  const chooseColor = () => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle === "confirmed") return "#06d6a0";
    if (lowerTitle === "recovered") return "#118ab2";
    if (lowerTitle === "deaths") return "#ef476f";
    return "#ef476f";
  };

  return (
    <div className={styles.numberCard}>
      <h3 className={styles.numberTitle}>{title}</h3>
      <p className={styles.numberValue} style={{ color: chooseColor() }}>
        {value}
      </p>
    </div>
  );
};

export default AllNumber;
