import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import {
  SiReact,
  SiPwa,
  SiNodedotjs,
  SiThemoviedatabase,
  SiMui,
  SiSupabase,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiElectron,
  SiVite,
} from "react-icons/si";

const projects = [
  {
    title: "NEXUS WEBSITE",
    category: "Premium Streaming PWA",
    tools: "Frontend: React, PWA | Backend: Node.js, TMDB API",
    image: "/images/nexus.png",
    link: "https://zeticuz.online/",
    icons: [<SiReact key="react" />, <SiPwa key="pwa" />, <SiNodedotjs key="node" />, <SiThemoviedatabase key="tmdb" />],
  },
  {
    title: "ZETFLIX",
    category: "Entertainment Hub",
    tools: "Frontend: React, MUI | Backend: Supabase, MongoDB, TMDB API",
    image: "/images/zetflix.png",
    link: "https://zetflix-tv.vercel.app/",
    icons: [<SiReact key="react" />, <SiMui key="mui" />, <SiSupabase key="supa" />, <SiMongodb key="mongo" />, <SiThemoviedatabase key="tmdb" />],
  },
  {
    title: "DEKARON STAMPEDE",
    category: "Action-MMORPG Hub",
    tools: "Frontend: React, TypeScript, Framer Motion, Tailwind CSS",
    image: "/images/dekaron.png",
    link: "https://dekaron-stampede.vercel.app/",
    icons: [<SiReact key="react" />, <SiTypescript key="ts" />, <SiFramer key="framer" />, <SiTailwindcss key="tw" />],
  },
  {
    title: "NEXUS DESKTOP APP",
    category: "Software Development",
    tools: "Frontend: Electron, TypeScript, Vite",
    image: "/images/nexus-desktop.png",
    link: "https://github.com/ZETIC7Z/NEXUS-desktop",
    icons: [<SiElectron key="electron" />, <SiTypescript key="ts" />, <SiVite key="vite" />],
  },
  {
    title: "EXECUTIVE SPACES",
    category: "Business Solutions",
    tools: "Frontend: React, Modern UI/UX | Backend: SEO Optimized Architecture",
    image: "/images/Solidx.png",
    link: "https://www.executivespaces.in/",
    icons: [<SiReact key="react" />],
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Work = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const imageIndex = page % projects.length;
  // If page is negative, we need to wrap around correctly for the index
  const currentIndex = imageIndex < 0 ? projects.length + imageIndex : imageIndex;

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  const goToSlide = (index: number) => {
    // Determine the shortest direction
    const newDirection = index > currentIndex ? 1 : -1;
    setPage([page + (index - currentIndex), newDirection]);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page, paginate, isHovered]);

  const currentProject = projects[currentIndex];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={() => paginate(-1)}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={() => paginate(1)}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container" style={{ position: "relative", overflow: "hidden", minHeight: "550px" }}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="carousel-slide-motion"
                style={{ position: "absolute", width: "100%", height: "100%" }}
              >
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="carousel-link"
                  data-cursor="disable"
                >
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{currentIndex + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{currentProject.title}</h4>
                        <p className="carousel-category">
                          {currentProject.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">TOOLS & FEATURES</span>
                          <p>{currentProject.tools}</p>
                          <div className="project-icons">
                            {currentProject.icons}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={currentProject.image} alt={currentProject.title} />
                    </div>
                  </div>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
