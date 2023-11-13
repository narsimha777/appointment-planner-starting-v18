import React from "react";

export const Tile = ({arr}) => {
  return (
    <div className="tile-container">
      {arr.map((ele,ind)=>(<div>
        <h1>Appointment {ind+1}:</h1>
        <p>Name:{ele[0]}</p>
        <p>Date:{ele[1]}</p>
        <p>Time:{ele[2]}</p>
        <p>Picker:{ele[3]}</p>
      </div>))}
    </div>
  );
};
