import YouTubeVideo from '../YoutubeVideo/YoutubeVideo'
import "./project.css";

const Project = ({ title, desc, video, colors, languages, videoThumbnail }) => {
  return (
    <div>
      <div className="blog__container">
        <YouTubeVideo videoId={video} thumbnailUrl={videoThumbnail} />
        <div className="blog_data">
          <h2 className="blog__title">{title}</h2>
          <p className="blog_description">{desc}</p>
          <div className="project__button">
            <button>View Code</button>
            <button>View Live</button>
            <button>View Docs</button>
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
