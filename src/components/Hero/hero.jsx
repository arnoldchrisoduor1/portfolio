import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";
import { FaKaggle } from "react-icons/fa";
import "./hero.css";
import "../../App.css";

import "../../App.css";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__data">
        <div className="bar"></div>
        <p className="sub__header">Building Intelligent Systems</p>
        <p className="ml__header">
          ML
          <br />
          Engineer
        </p>
        <p className="sub__header" style={{ marginBottom: ".5rem" }}>
          Web Development + Cloud
        </p>
      </div>

      <div className="hero__cta">
        <a href="https://www.linkedin.com/in/arnoldchrisoduor/">
          <FaLinkedin className="link_icons" />{" "}
          <span className="active_link">arnoldchrisoduor</span>
          <MdArrowOutward className="outward__arrow" />
        </a>
        <a href="https://github.com/arnoldchrisoduor1/">
          <FaGithub className="link_icons" />{" "}
          <span className="active_link">arnoldchrisoduor1</span>
          <MdArrowOutward className="outward__arrow" />
        </a>
        <a href="https://twitter.com/arnold0duor">
          <FaXTwitter className="link_icons" />{" "}
          <span className="active_link">@arnold0duor</span>
          <MdArrowOutward className="outward__arrow" />
        </a>
        <a href="https://www.kaggle.com/arnoldoduor">
          <FaKaggle className="link_icons" />{" "}
          <span className="active_link">arnoldoduor</span>
          <MdArrowOutward className="outward__arrow" />
        </a>
        <a href="#">
          <BiLogoGmail className="link_icons" />{" "}
          <span className="active_link">arnoldchrisoduor@gmail.com</span>
          <MdArrowOutward className="outward__arrow" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
