import React from 'react';
import { NavLink } from 'react-router-dom';

export const Confirmation = () => {
  return (
    <div className='confirmation'>
     <section className="confirmation-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>You will get a reminder and a confirmation text on your provided phone number and email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>
      <NavLink to='/home'>
            <button type="submit" className='home-button'>Home</button>
      </NavLink> 
    </div>
  )
}
