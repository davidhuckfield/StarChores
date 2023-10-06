import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <div id="contactdetails">
        <h1>CONTACT US</h1>
        <p>Phone: 555-555-5555</p>
        <p>Email:enquiries@starchores.co.uk</p>
        <p>Address: 123 Skywalker Street, Tattooine, SW1 1AA</p>
      </div>

      <div id="contactform">
        <h1>SEND US A MESSAGE</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" id="message" />
        <button>SUBMIT</button>
      </div>

    </div>
  );
}

export default Contact;