import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { Tile } from "../../components/tile/Tile";

export const AppointmentsPage = ({contacts}) => {
  /*
  Define state variables for 
  appointment info
  */
 const [name,setName] = useState();
//  const [contact,setContact] = useState("No Contact Selected");
 const [date,setDate] = useState();
 const [time,setTime] = useState();
 const [picker,setPicker] = useState("No Contact Selected");
 const [arr,setArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   setArr((prev)=>[...prev,[name,date,time,picker]]);
   setDate('');
   setName('');
   setPicker("No Contact Selected");
   setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm name={name} setName={setName} contacts={contacts} date={date} picker={picker} setPicker={setPicker} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <Tile arr={arr}/>
      </section>
    </div>
  );
};