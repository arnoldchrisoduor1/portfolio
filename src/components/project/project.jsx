import "./project.css";

const Project = ({ title, desc, img, colors, languages }) => {
  return (
    <div>
      <div className="blog__container">
        <img src={img} className='blog_img' alt="project image"/>
        <div className="blog_data">
          <h2 className="blog__title">{title}</h2>
          <p className="blog_description">{desc}</p>
          <div className="project__button">
            <button>View Code</button>
            <button>View Live</button>
            <button>View Demo</button>
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
