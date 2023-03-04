import { Table } from "react-bootstrap";

interface TableRow {
 row: { param: string; value: string }
}
interface TableMakerProps {

  tableRows: TableRow[];
}

export default function ParameterTable({tableRows }: TableMakerProps) {
  return (
    <>
      <h4>Endpoint Parameters</h4>
      <Table striped bordered>
        <thead>
          <th>Parameter</th>
          <th>Value</th>
        </thead>
        <tbody>
          {tableRows.map((row, index) => {
            return (
              <tr key={index + "a"}>
                <td key={index + "b"}>{row.row.param}</td>
                <td key={index + "c"}>{row.row.value}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export type {TableRow}