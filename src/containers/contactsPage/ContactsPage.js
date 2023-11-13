import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contact,setContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState();
  const [phone, setPhn] = useState();
  const [email, setEmail] = useState();
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    // Check for duplicate contact name when props.contact changes
    if(contact){
      const duplicate = contact.some(contact => contact[0] === name);
      setIsDuplicate(duplicate);
    }
  }, [name, contact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isDuplicate) {
      setContact((prev)=>[...prev,[ name, phone, email ]]);
      setName('');
      setPhn('');
      setEmail('');
    } else {
      alert('Contact name already exists!');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} phone={phone} email={email} setEmail={setEmail} setName={setName} setPhone={setPhn} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contact={contact} />
      </section>
    </div>
  );
};
