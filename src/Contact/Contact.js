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

      <form name="contact" method="POST" id="contact" data-netlify-recaptcha="true" data-netlify="true" >
        <h1>SEND US A MESSAGE</h1>
        <input type="hidden" name="form-name" value="contact" />
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" required/>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" placeholder="Email" required/>
        <label for="message">Message</label>
        <input type="text" name="message" id="message" placeholder="Message" required/>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit">SUBMIT</button>
      </form>

    </div>
  );
}

export default Contact;