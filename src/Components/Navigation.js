
import { NavLink } from "react-router-dom";
 import { useEffect } from "react";
import Logo from "../assets/Logo.svg";

function Navigation() {
  
    useEffect(() => {
        const hamburger = document.querySelector(".hamburger-menu");
        const navbarList = document.querySelector(".navbar-list");
    
        const toggleMenu = () => {
          hamburger.classList.toggle("active");
          navbarList.classList.toggle("active");
        };
    
        hamburger.addEventListener("click", toggleMenu);
    
        const navLinks = document.querySelectorAll(".navbar-list a");
        navLinks.forEach(link => {
          link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navbarList.classList.remove("active");
          });
        });
    
        return () => {
          hamburger.removeEventListener("click", toggleMenu);
          navLinks.forEach(link => {
            link.removeEventListener("click", () => {
              hamburger.classList.remove("active");
              navbarList.classList.remove("active");
            });
          });
        };
      }, []);
    
    return (
        <navbar className="navbar">
             <div className="hamburger-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <NavLink to="/"><img src={Logo} alt="Little lemon logo" className="nav-image"/></NavLink>
             
            <ul className="navbar-list">
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
