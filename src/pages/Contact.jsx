import { useState } from "react";
import CoomingSoon from "../components/CoomingSoon";
function Contact() {
  const [showCoomingSoon, setShowCoomingSoon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMap = () => {
    setIsOpen(!isOpen);
  };
  const toggleCoomingSoon = () => {
    setShowCoomingSoon(!showCoomingSoon);
  };
  return (
    <>
      <header className="contact-header">
        <div className="contact_header container">
          <div className="contact_header_text">
            <h1>Get in Touch</h1>
            <p>The freshest ingredients for you every day</p>
          </div>
          <div className="contact_header_right">
            <div>
              <h5>Open Time</h5>
              <p>Sunday - Friday</p>
            </div>
            <div className="headpoint"></div>
            <div className="contact_header_time">
              <p>
                Brunch <br />
                11:00–12:00
              </p>
              <p>
                Lunch <br />
                13:00–17:00
              </p>
              <p>
                Dinner <br />
                18:00–20:00
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="contacted_section container">
        <div className="contacted_div">
          <div className="contact_call">
            <div className="contacted_images">
              <img src="/Image 6.png" alt="" />
              <img src="/Orange.png" alt="" />
            </div>
            <div>
              <p>
                We can be contacted via <br />
                email <span>info@foodzero.com</span>
                <br />
                or telephone on
                <span>+86 852 346 000</span>
              </p>
            </div>
          </div>
          <div className="contact_location">
            <div>
              <p>
                We are located in 1959 Sepulveda Blvd. Culver <br />
                City, CA, 90230
              </p>
              <button onClick={toggleMap}>View in map</button>
              {isOpen && (
                <div className="map-modal">
                  <div className="map-container">
                    <span className="close-icon" onClick={toggleMap}>
                      X
                    </span>
                    <div className="iframe_div">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.731714511153!2d49.83552621486135!3d40.37047276637645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db6dbd373e3%3A0x8c437de271ebabfe!2sFiruz%C9%99%20Restorani!5e0!3m2!1saz!2saz!4v1680611310357!5m2!1saz!2saz"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              <img src="/Image.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact_reservation_sec">
        <div className="contact_reservation_div container">
          <div className="contact_reservation_text">
            <img src="/Mint.png" alt="" />
            <h1>Make a Reservation</h1>
            <p>Get in touch with restaurant</p>
          </div>
          <div className="contact_inputs">
            <div className="contact_name">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone" />
            <div className="datediv">
              <input type="date" name="" defaultValue="2021-06-22" id="" />
              <div className="selectdiv">
                <select name="" id="" className="select">
                  <option defaultValue="">6:00 pm</option>
                </select>
              </div>
            </div>
            <div className="selectdiv">
              <select name="" id="" className="select">
                <option defaultValue="">2 Person</option>
              </select>
            </div>
          </div>
          <button className="book" onClick={toggleCoomingSoon}>
            Book Now
          </button>
        </div>
      </section>
      {showCoomingSoon && <CoomingSoon toggleCoomingSoon={toggleCoomingSoon} />}
    </>
  );
}

export default Contact;
