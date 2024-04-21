import React from 'react';
import AboutImage1 from '../../assets/food/foodk14.jpg';
import AboutImage2 from '../../assets/food/Tofu-Lettuce-Wraps-14.jpg';

// export const About = () => {
//   return (
//     <div className='about' style={{height:"28rem"}}>
//       <h1 style={{marginTop:"30px"}}>Little Lemon</h1>
//       <h2>Chicago</h2>

//       <div className='text-image'>
//       <p className="about-text">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
//                 Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
//                 and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
//                 continue to oversee the Little Lemon restaurant, nearly thirty years later.
//       </p>

//       <section className='about-image'>
//           <img src={AboutImage1} alt="Little lemon dish 1" className='about-img1'/>
//           <img src={AboutImage2} alt="Little lemon dish 1" className='about-img2'/>
//       </section>
//       </div>
      
//     </div>
//   )
// }


export const About = () => {
  return (
      <div className="about">
          <section className="about-text-image">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
              Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
              and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
              continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
          </section>

          <section className="double-image">
              <img className="about-1" src={AboutImage1} alt="Little Lemon restaurant cuisine 1"/>
              <img className="about-2" src={AboutImage2} alt="Little Lemon restaurant cuisine 2"/>
          </section>
  </div>
  );
}