import styled from "styled-components";
import { useCovid } from "../../context/CovidContext";

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 0 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  min-width: 600px;
`;

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #06d6a0;
  color: white;
  font-weight: bold;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;

function CovidTable() {
  const { data } = useCovid();

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <Th>No</Th>
            <Th>Provinsi</Th>
            <Th>Positif</Th>
            <Th>Sembuh</Th>
            <Th>Dirawat</Th>
            <Th>Meninggal</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.index}>
              <Td>{item.index}</Td>
              <Td>{item.province}</Td>
              <Td>{item.positive}</Td>
              <Td>{item.healed}</Td>
              <Td>{item.treated}</Td>
              <Td>{item.died}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}

export default CovidTable;
