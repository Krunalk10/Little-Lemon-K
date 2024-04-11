import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Hamburger from '../assets/hamburger.svg';
import Close from '../assets/close1.png';
// import Header from './Sections/HeadingPages/Header';
function Navigation() {
    
        const [navbarOpen, setNavbarOpen] = useState(false);
    
        const handleToggleMenu = () => {
            setNavbarOpen(!navbarOpen);
        };
    return (
        <navbar className={`navbar ${navbarOpen ? "open" : ""}`}>
            {/* {props.device === 'mobile' ? ("") : (<NavLink to="/"> <img src={Logo} alt="Little lemon logo" className="nav-image"/></NavLink> )} */}
            <NavLink to="/"><img src={Logo} alt="Little lemon logo" className="nav-image"/></NavLink>
              {/* <div className="menu">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
              </div> */}
               <button className="hamburger-button" onClick={handleToggleMenu}>
                <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
               </button>

            <ul className={`navbar-list ${navbarOpen ? "visible" : ""}`} >
                <li><NavLink  to="/home">Home</NavLink></li>
                <li><NavLink  to="/about">About</NavLink></li>
                <li><a href={require("../assets/menu2.jpg")} target="_blank" rel="noreferrer" > Menu </a></li>
                <li><NavLink  to="/reservation">Reservations</NavLink></li>
                <li><NavLink  to="/orderOnline">Order Online</NavLink></li>
                <li><NavLink  to="/login">Login</NavLink></li>
                
            </ul>
                     

        </navbar>
        
    );
}

export default Navigation;