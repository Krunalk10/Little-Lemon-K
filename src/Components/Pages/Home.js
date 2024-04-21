import React from 'react'
import { Header } from '../Sections/HeadingPages/Header'
import {Specials} from '../Sections/HeadingPages/Specials';
import { Testimonial } from '../Sections/HeadingPages/ Testimonial';
import { About } from './About';
import { Footer } from '../Footer';



export const Home = () => {
  return (
    <div>
       <Header />
       <Specials />
       <Testimonial/>
       <About />
      
       <Footer />
    </div>
  );
}
