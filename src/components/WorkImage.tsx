import { useState } from "react";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    setIsHovered(true);
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <div
        className={`work-image-in ${isHovered ? "work-image-hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => { setIsHovered(false); setIsVideo(false); }}
      >
        <img src={props.image} alt={props.alt} />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
        <div className={`work-image-overlay ${isHovered ? "work-image-overlay-visible" : ""}`}>
          <span className="work-image-overlay-text">CLICK IMAGE TO VIEW SITE</span>
        </div>
      </div>
    </div>
  );
};

export default WorkImage;
