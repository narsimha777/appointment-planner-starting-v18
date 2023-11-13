import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form className="addcontact" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="Name" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label for="Phoneno" className="form-label">Phone number:</label>
          <input type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <button type="submit" className="btn btn-outline-info">Submit</button>
      </form>
    </>
  );
};

