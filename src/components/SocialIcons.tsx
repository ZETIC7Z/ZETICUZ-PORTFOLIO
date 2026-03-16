import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { useEffect } from "react";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/ZETIC7Z" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.facebook.com/share/185tBx61B1/" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebook />
          </a>
        </span>
        <span>
          <a href="https://x.com/SamXerz" target="_blank" rel="noopener noreferrer" title="Twitter">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/zeticuz_?igsh=MW5ibWx6dzFpcXA3cQ==" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram />
          </a>
        </span>
      </div>

    </div>
  );
};

export default SocialIcons;
