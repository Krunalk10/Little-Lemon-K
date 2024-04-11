import React from 'react';
import { NavLink } from 'react-router-dom';
// import HeroImage from '../../assets/food/foodk13.avif';
import HeroImg from '../../../assets/food/foodk13.avif'

export const Header = () => {

  return (
    <header>
        <article className='call-to-action'>
            <section className='hero-text'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.
                </p>
                <NavLink to="/reservation" className="action-button">Reserve a table</NavLink>                   
            </section>

           
       
        <section className='hero-image'>
                <img src={HeroImg} alt='Little Lemon best dish' />
            </section>
            </article>
    </header>
  )
}

