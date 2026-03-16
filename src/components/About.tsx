import "./styles/About.css";
import { MdBrush, MdCode, MdAutoAwesome, MdViewInAr } from "react-icons/md";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiThreedotjs,
  SiVite,
  SiBlender,
  SiJavascript,
  SiWebflow,
  SiCanva,
} from "react-icons/si";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Hi, I'm a passionate Creative Developer & UX/UI Designer dedicated to
          bridging technical complexity with elegant user-centered design. With a
          focus on impactful interaction and visual narrative, I craft digital
          experiences that are not only functional but visually captivating. Driven by
          curiosity and a commitment to continuous learning, I leverage my expertise to
          push the boundaries of what's possible in web and digital media.
        </p>

        <div className="about-skills-container">
          <div className="about-skills-box">
            <h4>CORE SKILLS</h4>
            <div className="about-skills-flex">
              <div className="skill-item">
                <div className="skill-icon">
                  <MdBrush />
                </div>
                <span>UI/UX Design</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <MdCode />
                </div>
                <span>Front-End Development</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <MdAutoAwesome />
                </div>
                <span>Creative Coding</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <MdViewInAr />
                </div>
                <span>3D Modeling</span>
              </div>
            </div>
          </div>

          <div className="about-skills-box">
            <h4>TECH STACK & TOOLS</h4>
            <div className="tech-stack-flex">
              <div className="tech-icon"><FaReact /></div>
              <div className="tech-icon"><SiThreedotjs /></div>
              <div className="tech-icon"><FaNodeJs /></div>
              <div className="tech-icon"><FaFigma /></div>
              <div className="tech-icon"><SiVite /></div>
              <div className="tech-icon"><SiCanva title="Canva" /></div>
              <div className="tech-icon"><SiWebflow title="Webflow" /></div>
              <div className="tech-icon"><SiBlender /></div>
              <div className="tech-icon"><SiJavascript /></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
