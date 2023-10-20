import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <div id="contactdetails">
        <h1>CONTACT US</h1>
        <p>Phone: 555-555-5556</p>
        <p>Email:enquiries@starchores.co.uk</p>
        <p>Address: 123 Skywalker Street, Tattooine, SW1 1AA</p>
      </div>

      <form name="contact" id="contact" netlify>
        <h1>SEND US A MESSAGE</h1>
        <input type="text" name="name" id="name" placeholder="Name" required/>
        <input type="text" name="email" id="email" placeholder="Email" required/>
        <input type="text" name="message" id="message" placeholder="Message" required/>
        <button type="submit">SUBMIT</button>
      </form>

    </div>
  );
}

export default Contact;