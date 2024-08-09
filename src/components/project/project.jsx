import { useState } from "react";
import "./project.css";

const Project = ({ title, desc, img, colors, languages, youtubeUrl, github, live }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleToggleVideo = () => {
    setShowVideo(!showVideo);
  };

  const renderVideoContent = () => {
    if (!youtubeUrl) {
      return <div className="no-demo">No demo Available</div>;
    }
    return (
      <iframe
        width="560"
        height="315"
        src={youtubeUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };

  const buttonStyle = (link) => ({
    opacity: link ? 1 : 0.5,
    cursor: link ? 'pointer' : 'not-allowed',
    backgroundColor: '',  // Example color, change as needed
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    marginRight: '10px'
  });

  return (
    <div>
      <div className="blog__container">
        {showVideo ? (
          <div className="video-container">
            {renderVideoContent()}
          </div>
        ) : (
          <img src={img} className="blog_img" alt="project image" />
        )}
        <div className="blog_data">
          <div className="project__top">
          <h2 className="blog__title">{title}</h2>
          <p className="blog_description">{desc}</p>
          </div>

          <div className="project__bottom">
          <div className="project__button">
            <button style={buttonStyle(github)} onClick={() => github && window.open(github, '_blank')}>
              View Code
            </button>
            <button style={buttonStyle(live)} onClick={() => live && window.open(live, '_blank')}>
              View Live
            </button>
            <button style={buttonStyle(youtubeUrl)} onClick={youtubeUrl ? handleToggleVideo : undefined}>
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
    </div>
  );
};

export default Project;