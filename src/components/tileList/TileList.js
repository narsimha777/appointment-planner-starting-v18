import React from "react";

export const TileList = (props) => {
  const contact = props.contact;
  return (
    <div className="Tilecontainer">
      {contact && contact.map((ele,ind) => (
        <div className="Tile" key={ele[0]}>
          <h2>Contact {ind+1}:</h2>
          <p>Name: {ele[0]}</p>
          <p>Phone Number: {ele[1]}</p>
          <p>Email: {ele[2]}</p>
        </div>
      ))}
    </div>
  );
};

