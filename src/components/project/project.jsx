import { useState } from "react";
import "./project.css";

const Project = ({ title, desc, img, colors, languages, youtubeUrl }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleToggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div>
      <div className="blog__container">
        {showVideo ? (
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={youtubeUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img src={img} className="blog_img" alt="project image" />
        )}
        <div className="blog_data">
          <h2 className="blog__title">{title}</h2>
          <p className="blog_description">{desc}</p>
          <div className="project__button">
            <button>View Code</button>
            <button>View Live</button>
            <button onClick={handleToggleVideo}>
              {showVideo ? "Close Demo" : "View Demo"}
            </button>
          </div>
          <div className="project__tech">
            {colors.map((color, index) => (
              <div
                key={index}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: color,
                    marginRight: "5px",
                    borderRadius: '50%'
                  }}
                ></div>
                <span className="project__language">{languages[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;