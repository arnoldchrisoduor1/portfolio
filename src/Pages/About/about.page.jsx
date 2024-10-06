import Navbar from "../../components/navbar/navbar";
import myImage from '../../assets/me.jpg'
import Education from "../../components/education/education";
import Skills from "../../components/skills/skills";
import Blog from "../../components/Blog/blog"

import "./about.css"

const About = () => {
  return (
    <div className="main_container">
      <Navbar/>
      <div className="about__container">

        <div className="data__div">
            <h2 className="education_head">Education</h2>
            <Education />
            <h2 className="education_head">Skills</h2>
            <Skills />
            <div className="education_head">
            <Blog />
          </div>
        </div>

        <div className="img_div">
          <img src={myImage} className="my_picture" alt="My Picture" />

        </div>

      </div>
      
    </div>
  )
}

export default About;