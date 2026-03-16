import { MdCopyright, MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <div className="contact-item">
              <h4>Email</h4>
              <p>
                <a href="mailto:samxerz.zeticuz@gmail.com" className="contact-social contact-email" data-cursor="disable">
                  samxerz.zeticuz@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-item">
              <h4>Location</h4>
              <p>Cebu City Philippines</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-item">
              <h4>Social</h4>
            </div>
            <div className="contact-item contact-social-col">
              <a href="https://github.com/ZETIC7Z" target="_blank" rel="noopener noreferrer" className="contact-social" data-cursor="disable">
                Github <MdArrowOutward />
              </a>
              <a href="https://www.linkedin.com/in/sam-pangilinan/" target="_blank" rel="noopener noreferrer" className="contact-social" data-cursor="disable">
                Linkedin <MdArrowOutward />
              </a>
              <a href="https://x.com/SamXerz" target="_blank" rel="noopener noreferrer" className="contact-social" data-cursor="disable">
                Twitter <MdArrowOutward />
              </a>
              <a href="https://www.instagram.com/zeticuz_?igsh=MW5ibWx6dzFpcXA3cQ==" target="_blank" rel="noopener noreferrer" className="contact-social" data-cursor="disable">
                Instagram <MdArrowOutward />
              </a>
            </div>
          </div>

        </div>
        
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
  );
};

export default Contact;
