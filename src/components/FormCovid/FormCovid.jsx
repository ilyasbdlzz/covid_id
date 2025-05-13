import { useState } from "react";
import styles from "./FormCovid.module.css";
import Alert from "./Alert";
import { provinceData } from "../utils/constants/province";

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
      const updatedData = data.map((item) => {
        if (item.province === province) {
          return {
            ...item,
            [status]: item[status] + parseInt(jumlah),
          };
        }
        return item;
      });

      setData(updatedData);
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
      <img src="./images/form.svg" alt="Form Covid" className={styles.image} />
      <form onSubmit={handleSubmit}>
        <h2 className={styles.sectionTitle}>Form Covid</h2>

        <div className={styles.formGroup}>
          <label htmlFor="province">Provinsi</label>
          <select
            id="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          >
            <option value="">-- Pilih Provinsi --</option>
            {provinceData.rows.map((prov) => (
              <option key={prov.index} value={prov.province}>
                {prov.province}
              </option>
            ))}
          </select>
          {isProvinceError && <Alert>Provinsi wajib dipilih</Alert>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">-- Pilih Status --</option>
            <option value="positive">Positif</option>
            <option value="healed">Sembuh</option>
            <option value="treated">Dirawat</option>
            <option value="died">Meninggal</option>
          </select>
          {isStatusError && <Alert>Status wajib dipilih</Alert>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="jumlah">Jumlah</label>
          <input
            type="number"
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
