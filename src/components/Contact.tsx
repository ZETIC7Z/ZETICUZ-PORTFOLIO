import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          {/* Email and Social removed as per request */}


          <div className="contact-footer-centered">
            <div className="contact-item">
              <h2>
                Designed and Developed by <span>Sam Pangilinan</span>
              </h2>
            </div>
            <div className="contact-item">
              <h5>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
