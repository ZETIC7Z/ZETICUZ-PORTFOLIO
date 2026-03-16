import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline" id="career-timeline-scroll">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>DICT PHILIPPINES</h5>
              </div>
              <h3>2017</h3>
            </div>
            <p>
              Started professional journey at DICT, focusing on software development
              and government-level application frameworks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Solo/Freelance Developer</h4>
                <h5>Mitten Made Properties Real Estate Michigan USA</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Transitioned to freelance development, building custom solutions
              for various clients and refining full-stack expertise.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Mitten Made Properties Real Estate Michigan USA</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed complex systems including ZETFLIX and NEXUS, mastering
              modern tech stacks and performance optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Multiplatform Front End Development React/React.js</h4>
                <h5>Accenture Philippines</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Leading complex UI development, architecting scalable frontend solutions, and delivering highly responsive, optimized cross-platform React applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
