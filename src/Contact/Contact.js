import './Contact.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xjvqlkad");
  if (state.succeeded) {
      return <p>Thanks for your email!</p>;
  }
  return (
    <div className="Contact">
      <div id="contactdetails">
        <h1>CONTACT US</h1>
        <p>Phone : 07929632287</p>
        <p>Email : starchores@hotmail.com</p>
      </div>

      <h1>SEND US A MESSAGE</h1>
      <form onSubmit = {handleSubmit} method="POST" className="contactform">
        {/* <label htmlFor="name">Name</label> */}
        <input type="text" name="name" id="name" placeholder="Name" required/>
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />  

        {/* <label for="email">Email</label> */}
        <input type="text" name="email" id="email" placeholder="Email" required/>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

       {/* <label for="address">Address</label> */}
       <input type="text" name="address" id="address" placeholder="Address" required/>
        <ValidationError 
          prefix="Address" 
          field="address"
          errors={state.errors}
        />

        {/* <label for="message">Message</label> */}
        <input type="text" name="message" id="message" placeholder="Message" required/>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />

     

        <button type="submit" disabled={state.submitting}>SUBMIT</button>

      </form>
      

    </div>
  );
}

export default Contact;