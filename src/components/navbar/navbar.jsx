import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GiMaterialsScience } from "react-icons/gi";

import "../../App.css";
import Quant from "../Quant/quant";
import "./navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };


    // Can be set to any device width
    const handleResize = () => {
      if (window.innerWidth >= 1150) { 
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
        setIsScrolled(false);
      }
    };


    // Called once to hance the initial state.
    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <span>
            <Quant />
          </span>
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <RiHome6Line className="icon" />
                <span>HOME</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                <MdOutlinePersonOutline className="icon" />
                <span>ABOUT</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/projects" className="nav__link">
                <GrProjects className="icon" />
                <span>PROJECTS</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/research" className="nav__link">
                <GiMaterialsScience className="icon" />
                <span>RESEARCH</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="cta">
          <div className="status"></div>
          Somewhere Training Machines
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
