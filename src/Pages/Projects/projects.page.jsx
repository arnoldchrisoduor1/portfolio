import Navbar from "../../components/navbar/navbar";
import Project from "../../components/project/project"
import projects from '../../assets/projects.js'

import './projects.css'

const Projects = () => {
  return (
    <div className="project__container">
      <Navbar />
      <div className="project__items__container">
        <div className="project__items">
          {
            projects.map((project, index) => (
              <Project 
                key={index}
                title={project.title}
                desc={project.desc}
                img={project.img}
                languages={project.languages}
                colors = {project.colors}
                youtubeUrl = {project.youtubeUrl}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;