import React from 'react'
import testimonialsInfo from './TestimonialInfo'

export const  Testimonial = () => {
  return (
    <div className='testimonials'> 
       <h1>Testimonials</h1>
       <h2>What our customers say about us</h2>
            <section className='testimonials-cards'>
                {
                testimonialsInfo.map((item) => (
                    <div key={item.id} className='user'>
                    <img src={item.image} alt="userImage" className='userImage' />

                                <div className='user-name'>
                                    {/* <h3>{item.tittle}</h3> */}
                                    {item.name}
                                </div>
                                <div className='user-comments'>
                                    {item.comments}
                                </div>
                                        
                    </div>
                ))
                }
            </section>
    </div>
  )
}
