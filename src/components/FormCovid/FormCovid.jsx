import { useState } from "react";
import styled from "styled-components";
import { useCovid } from "../../context/CovidContext";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 300px;
  margin: 20px auto;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #06d6a0;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

function FormCovid() {
  const { addData } = useCovid();
  const [province, setProvince] = useState("");
  const [status, setStatus] = useState("positive");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!province || !amount) return;

    addData({ province, status, amount });
    setAmount("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Select value={province} onChange={(e) => setProvince(e.target.value)}>
        <option value="">Pilih Provinsi</option>
        <option value="Jakarta">Jakarta</option>
        <option value="Jawa Barat">Jawa Barat</option>
        <option value="Jawa Tengah">Jawa Tengah</option>
        <option value="Jawa Timur">Jawa Timur</option>
        <option value="Banten">Banten</option>
      </Select>

      <Select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="positive">Positif</option>
        <option value="healed">Sembuh</option>
        <option value="treated">Dirawat</option>
        <option value="died">Meninggal</option>
      </Select>

      <Input
        type="number"
        placeholder="Jumlah"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default FormCovid;
