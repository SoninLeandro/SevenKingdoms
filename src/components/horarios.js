import React from "react";
import Table from "react-bootstrap/Table";

function Horarios() {
  return (
    <div className="table-app">
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>17.00hs</td>
            <td>2 lugares</td>
            <td>4 lugares</td>
            <td>Libre</td>
            <td>3 lugares</td>
            <td>Ocupado</td>
          </tr>
          <tr>
            <td>18.00hs</td>
            <td>1 lugar</td>
            <td>Libre</td>
            <td>Ocupado</td>
            <td>1 lugar</td>
            <td>3 lugares</td>
          </tr>
          <tr>
            <td>19.00hs</td>
            <td>2 lugares</td>
            <td>Libre</td>
            <td>Ocupado</td>
            <td>Libre</td>
            <td>2 lugares</td>
          </tr>
          <tr>
            <td>20.00hs</td>
            <td colSpan="2">Ocupado</td>
            <td>1 lugar</td>
            <td>1 lugar</td>
            <td>Ocupado</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Horarios;
