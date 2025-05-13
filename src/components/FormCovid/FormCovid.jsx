import { useState } from "react";
import styles from "./FormCovid.module.css";
import { nanoid } from "nanoid";
import Alert from "./Alert";

function FormCovid({ data, setData }) {
  const [province, setProvince] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  const [isProvinceError, setIsProvinceError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (province === "") {
      setIsProvinceError(true);
    } else if (status === "") {
      setIsStatusError(true);
    } else if (jumlah === "") {
      setIsJumlahError(true);
    } else {
      const newData = {
        id: nanoid(),
        province,
        status,
        jumlah,
      };

      setData([...data, newData]);
      setProvince("");
      setStatus("");
      setJumlah("");
      setIsProvinceError(false);
      setIsStatusError(false);
      setIsJumlahError(false);
    }
  }

  return (
    <section className={styles.formSection}>
      <img
        src="./images/form.svg"
        alt="Form Covid"
        className={styles.image}
      />
      <form onSubmit={handleSubmit}>
        <h2 className={styles.sectionTitle}>Form Covid</h2>

        <div className={styles.formGroup}>
          <label htmlFor="province">Provinsi</label>
          <input
            type="text"
            id="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
          {isProvinceError && <Alert>Provinsi wajib diisi</Alert>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          {isStatusError && <Alert>Status wajib diisi</Alert>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="jumlah">Jumlah</label>
          <input
            type="text"
            id="jumlah"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
          />
          {isJumlahError && <Alert>Jumlah wajib diisi</Alert>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default FormCovid;
