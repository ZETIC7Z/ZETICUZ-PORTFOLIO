import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
gsap.config({ trialWarn: false } as any);
export let smoother: ScrollSmoother | undefined;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother?.scrollTop(0);
    smoother?.paused(true);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        // Stop any ongoing slow-scrolls (like Career)
        if (smoother) gsap.killTweensOf(smoother);
        
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const elem = e.currentTarget as HTMLAnchorElement;
          const section = elem.getAttribute("data-href");
          if (smoother) smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="#top" className="navbar-title" data-cursor="disable" onClick={(e) => {
          e.preventDefault();
          if (smoother) gsap.killTweensOf(smoother);
          smoother?.scrollTo(0, true);
        }}>
          <img src="/images/zc-logo.png" alt="ZC Logo" className="navbar-logo" />
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about" title="About">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career" title="Career & Experience" onClick={() => {
              if (window.innerWidth <= 1024) return;
              setTimeout(() => {
                if (smoother) {
                  const targetScroll = smoother.offset("#work", "top top");
                  gsap.to(smoother, {
                    scrollTop: targetScroll,
                    duration: 15, // Slow movie-credits effect
                    ease: "none",
                  });
                }
              }, 1200);
            }}>
              <HoverLinks text="CAREER & EXPERIENCE" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" title="Work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#techstack" href="#techstack" title="Technologies">
              <HoverLinks text="TECHNOLOGIES" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" title="Contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
