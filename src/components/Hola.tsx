import React from 'react'
import { HolaDTO } from '../api/dto/hola.dto'

interface Props{
    data: HolaDTO;
}

const Hola = ({data} : Props) => {
    return <div>
        Nama : {data.nama}<br/>
        No ID : {data.NoID}<br/>
        No Telp : {data.NoTelp}<br/>
        Asuransi : {data.Asuransi}<br/>
        Appointment : {data.Apointment}<br/>
    </div>

};

export default Hola;