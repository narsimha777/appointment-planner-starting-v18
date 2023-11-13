import React from "react";

export const ContactPicker = ({contacts,handleselect}) => {
  return (
    <>
      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Contact-Picker</button>
      <ul class="dropdown-menu">
        {/* <li><a class="dropdown-item" href="#"></a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li> */}
        {contacts&&contacts.map((ele)=>(<li><a className="dropdown-item" href="#" onClick={handleselect(ele[0])}>{ele[0]}</a></li>))}
      </ul>
    </>
  );
};
