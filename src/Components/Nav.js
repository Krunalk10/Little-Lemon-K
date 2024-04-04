// import React, { useState } from 'react';
// // import Logo from '../assets/Logo.svg';
// import Hamburger from '../assets/hamburger.svg';
// import Close from '../assets/close1.png'
// import Navigation from '../Components/Navigation';

// function Nav() {
//     const [navbarOpen, setNavbarOpen] = useState(false);

//     const handleToggleMenu = () => {
//         setNavbarOpen(!navbarOpen);
//     };

//     return (
//         <nav className='navbar'>
//             <nav className="hamburger">
//             {/* <a href='/'><img src={Logo} alt="little lemon logo" className='nav-image'/></a> */}
//             {/* <div className={`navbar-links ${navbarOpen ? 'active' : ''}`}>
//                 <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="about">About</a></li>
//                     <li><a href="menu">Menu</a></li>
//                     <li><a href="reservations">Reservations</a></li>
//                     <li><a href="orderOnline">Order Online</a></li>
//                     <li><a href="login">Login</a></li>
//                 </ul>
//             </div> */}
//             <button className="hamburger-button" onClick={handleToggleMenu}>
//                 <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
//             </button>
//             </nav>
//             <Navigation device="desktop"/>
//             {navbarOpen ? <Navigation device = "mobile" /> : ""};
//         </nav>
        
        
//     );
// }

// export default Nav;


//  import React from 'react'
//  import { NavLink } from 'react-router-dom'
//  function Nav() {
//    return (
//     <nav>
//          <ul className="navbar-list">
//             <li><NavLink  to="/home">Home</NavLink></li>
//             <li><NavLink  to="/about">About</NavLink></li>
//             <li><a href={require("../assets/menu2.jpg")} target="_blank" rel="noreferrer" > Menu </a></li>
//             <li><NavLink  to="/reservations">Reservations</NavLink></li>
//             <li><NavLink  to="/orderOnline">Order Online</NavLink></li>
//             <li><NavLink  to="/login">Login</NavLink></li>
//         </ul>
//     </nav>
//    )
//  }
//  export default Nav;