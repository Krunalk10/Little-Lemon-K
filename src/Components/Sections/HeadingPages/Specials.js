// import React from 'react';
// import Menu from '../../../assets/menu2.jpg';
// import menuInfo from './menuInfo';
// export const Specials = () => {
    
//     const hadleMenuClick = () => {
//         window.open(Menu, '_blank');
//     }
//   return (
//     <section className='special-food-menu'>
//             <article>
//                     <h2>This week's special</h2>
//                     <button onClick={hadleMenuClick} className='online-menu-button'>Online Menu</button>
//             </article>
            
//             <section className='card'>
//                 {/* <img src={props.img} alt=''></img>
//                 <div className='food-name'></div>
//                 <div className='price'></div>
//                 <p className='food-description'>fdsafasdfdsf hjhjtyr  erw qsdfsda fret rghnyju jk u</p> */}
                
//                 menuInfo.map(menuInfo => <div key={menuInfo.id}>
//                     <h2>{menuInfo.title}</h2>
//                     </div>)
//             </section>
//     </section>
//   )
// }


import React from 'react';
import Menu from '../../../assets/menu2.jpg';
import menuInfo from './menuInfo';

export const Specials = () => {
  const handleMenuClick = () => {
    window.open(Menu, '_blank');
  };

  return (
    <section className='special-food-menu'>
      <article>
        <h2>This week's special</h2>
        <button onClick={handleMenuClick} className='online-menu-button'>Online Menu</button>
      </article>
      
      <section className='card'>
        {
          menuInfo.map((item) => (
            <div key={item.id} className='food-item'>
              <img src={item.image} alt="foodImage" className='foodImage' />
                 <div className='food-info'>
                        <div className='food-tittle'>
                            {/* <h3>{item.tittle}</h3> */}
                            {item.tittle}
                        </div>
                        <div className='food-price'>
                            {item.price}
                        </div>
                        <div className='food-description'>
                            {item.description}
                        </div>                 
                        <div className='order'>
                            <button className='order-button'>Order</button>
                        </div>         
                </div>  
                                
            </div>
          ))
        }
      </section>
    </section>
  );
};