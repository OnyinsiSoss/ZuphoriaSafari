import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

  const [result, setResult] = React.useState("");
 
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "66a3af37-e7c6-447a-adb6-39f534bbf127");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      {/* <div className="contact-col">
        <h3>
          
          Contact us
        </h3>
        <p>
        I declare that I have read and accepted the Privacy Policy and Cookie Policy and I authorize Zuphoria Safaris to process my personal data, in accordance with the European Privacy Regulation 679/2016.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            zuphoriasafaris@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +254702817815
          </li>
          <li>
            <img src={location_icon} alt="" />
            23,moi avenue <br />
            nairobi 00100,kenya
          </li>
        </ul>
      </div> */}
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="First Name"
            required
          />

          <input
            type="text"
            name="name"
            placeholder="Last Name"
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            required
          />

          <label>Write Your Message:</label>
          <textarea
            name="message"
            rows="6"
            placeholder="message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            
            Submit Now<img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
