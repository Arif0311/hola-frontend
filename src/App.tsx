import React, { useEffect, useState } from 'react';
import './App.css';
import { HolaAPI } from './api/hola.api';
import { HolaDTO } from './api/dto/hola.dto';
import { Card, Table, CardTitle, Col } from "reactstrap";




function App() {

  const [holas, setHolas] = useState<HolaDTO[]> ([])
  useEffect(() => {

    async function fetchAll() {
      const resp = await HolaAPI.getAll();

      setHolas(resp);
    }

    fetchAll();

  }, [])
  return (
    <div className="App">
    <Col lg="3">
        <CardTitle tag="h2" className="border-bottom p-3 mb-3">
            <i className="bi bi-card-text me-8"> </i>
            Table Data Pasien
        </CardTitle>
        <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
          <tr>
              <th>Nama</th>
              <th>No ID</th>
              <th>No Telp</th>
              <th>Asuransi</th>
              <th>Appointment</th>
            </tr>
          </thead>
          <tbody>
            {
              holas.map(hola => {
                return <li key = {hola.id}>
                  <td>{hola.nama} </td>
                  <td>{hola.NoID} </td>
                  <td> {hola.NoTelp} </td>
                  <td> {hola.Asuransi} </td>
                  <td> {hola.Apointment} </td>
                </li>
              })
            }
          </tbody>
        </Table>
      </Col>
    </div>
  );
}

export default App;
