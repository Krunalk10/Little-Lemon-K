import React from 'react';
import FooterLogo from '../assets/footerLogo.png';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer'>
       
      <div className='footer-menu'>
      <img src={FooterLogo} alt='footer-logo' className='footer-logo'/>
      <navigation className="footer-navigation">
            <h3>Navigation</h3>
           <ul>
                <li><NavLink  to="/home">Home</NavLink></li>
                <li><NavLink  to="/about">About</NavLink></li>
                <li><a href={require("../assets/menu2.jpg")} target="_blank" rel="noreferrer" > Menu </a></li>
                <li><NavLink  to="/reservation">Reservations</NavLink></li>
                <li><NavLink  to="/orderOnline">Order Online</NavLink></li>
                <li><NavLink  to="/login">Login</NavLink></li>              
            </ul>                    
        </navigation>
        <div className='footer-contact'>
            <h3>Contacts</h3>
                <ul>
                      <li className='li-tittle'>Email </li>
                      <li>info@littlelemon.com</li>
                      <li className='li-tittle'>Phone Number</li>
                      <li>+1(111)111-1111</li>
                      <li className='li-tittle'>Address</li>
                      <li>Little Lemon Street</li>
                </ul>
        </div>
        <div className='footer-social-handles'>
            <h3>Social Handles</h3>
                <ul>
                     <NavLink to={"https://www.instagram.com/"}><li>Instagram</li></NavLink> 
                     <NavLink to={"https://www.facebook.com/"}><li>Facebook</li></NavLink>
                     <NavLink to={"https://twitter.com/?lang=en"}><li>Twitter</li></NavLink>
                </ul>
        </div>
      </div>
        
    </div>
  )
}
