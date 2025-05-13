import styles from "./CovidTable.module.css";

const CovidTable = ({ data }) => {
  return (
    <div className={styles.wrapperTabel}>
      <table className={styles.tabelData}>
        <thead>
          <tr>
            <th>No</th>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Dirawat</th>
            <th>Meninggal</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ index, province, positive, healed, treated, died }) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{province}</td>
                <td>{positive}</td>
                <td>{healed}</td>
                <td>{treated}</td>
                <td>{died}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CovidTable;
