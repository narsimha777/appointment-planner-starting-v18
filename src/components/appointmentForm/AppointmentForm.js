import React, { useState } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  name,
  setName,
  contacts,
  title,
  setTitle,
  picker,
  setPicker,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  function handleselect(pik){
    setPicker(pik);
  }
  return (
    <>
      <form className="addcontact" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="Name" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label for="Date" className="form-label">Date:</label>
          <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" min={getTodayString()} value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Time: </label>
          <input type="time" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={time} onChange={(e) => setTime(e.target.value)} required />
          <ContactPicker contacts={contacts} handleselect={handleselect}/>
        </div>
        <button type="submit" className="btn btn-outline-info">Submit</button>
      </form>
    </>
  );
};
