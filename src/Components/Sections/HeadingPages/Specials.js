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


// import { MdOutlineShoppingBasket } from "react-icons/md";
// import swal from 'sweetalert';
// import React from 'react';
// import Menu from '../../../assets/menu2.jpg';
// import menuInfo from './menuInfo';
// import { NavLink } from "react-router-dom";

// export const Specials = () => {
//   const handleMenuClick = () => {
//     window.open(Menu, '_blank');
//   };

//   const handleOrder = () => {
//     swal({
//       title: "Are you sure?",
//       text: "You will not be able to recover this imaginary file!",
//       type: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#DD6B55",
//       confirmButtonText: "Yes, delete it!",
//       closeOnConfirm: false
//     },
//     function(){
//       swal("Deleted!", "Your imaginary file has been deleted.", "success");
//     });
//   }

//   return (
//     <section className='special-food-menu'>
//       <article>
//         <h2>This week's special</h2>
//         <button onClick={handleMenuClick} className='online-menu-button'>Online Menu</button>
//       </article>
      
//       <section className='card'>
//         {
//           menuInfo.map((item) => (
//             <div key={item.id} className='food-item'>
//               <img src={item.image} alt="foodImage" className='foodImage' />
//                  <div className='food-info'>
//                         <div className='food-tittle'>
//                             {/* <h3>{item.tittle}</h3> */}
//                             {item.tittle}
//                         </div>
//                         <div className='food-price'>
//                             {item.price}
//                         </div>
//                         <div className='food-description'>
//                             {item.description}
//                         </div>                 
//                         <div className='order'>
//                             {/* <button className='order-button'>Order for dilevery <svg width="20" height="20" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.7273 28.5378V35.095H46V39.4665H39.7273V46.0238H35.5455V39.4665H29.2727V35.095H35.5455V28.5378H39.7273ZM23 24.1663C20.7 24.1663 18.8182 26.1335 18.8182 28.5378C18.8182 30.9421 20.7 32.9093 23 32.9093C25.3 32.9093 27.1818 30.9421 27.1818 28.5378C27.1818 26.1335 25.3 24.1663 23 24.1663ZM25.8227 41.6523H9.40909C7.48545 41.6523 5.87545 40.2971 5.39455 38.4611L0.0836363 18.1992C-7.45058e-08 18.0025 0 17.8058 0 17.6091C0 16.4069 0.940909 15.4233 2.09091 15.4233H12.1064L21.2645 1.10669C21.6618 0.472827 22.3309 0.123108 23 0.123108C23.6691 0.123108 24.3382 0.472827 24.7355 1.08484L33.8936 15.4233H43.9091C45.0591 15.4233 46 16.4069 46 17.6091L45.9373 18.1992L43.9091 25.9368C42.7173 25.2592 41.3791 24.6909 39.9782 24.4067L41.1909 19.7948H4.83L9.40909 37.2808H25.0909C25.0909 38.8108 25.3627 40.2752 25.8227 41.6523ZM17.1455 15.4233H28.8545L23 6.2432L17.1455 15.4233Z" fill="#495E57"></path></svg></button> */}
//                             {/* <NavLink  className="order-button" > */}
//                                   <button className='order-button' onClick= {handleOrder}>
//                                     Order for dilevery
//                                       <MdOutlineShoppingBasket className="icon-shopping-basket" />
//                                   </button>
//                             {/* </NavLink>         */}
//                         </div>         
//                 </div>  
                                
//             </div>
//           ))
//         }
//       </section>
//     </section>
//   );
// };


import React from 'react';
import swal from 'sweetalert';
import { MdOutlineShoppingBasket } from "react-icons/md";
import Menu from '../../../assets/menu2.jpg';
import menuInfo from './menuInfo';
// import { NavLink } from "react-router-dom";

export const Specials = () => {
  const handleMenuClick = () => {
    window.open(Menu, '_blank');
  };

  const handleOrder = () => {
    swal({
      title: "Are you sure?",
      text: "You want to place order for this item!!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your order has been processing...", {
          icon: "success",
        });
      } else {
        swal("Please select your order...");
      }
    });
  }

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
                  {item.tittle}
                </div>
                <div className='food-price'>
                  {item.price}
                </div>
                <div className='food-description'>
                  {item.description}
                </div>                 
                <div className='order'>
                  <button className='order-button' onClick={handleOrder}>
                    Order for delivery <MdOutlineShoppingBasket className="icon-shopping-basket" />
                  </button>
                </div>         
              </div>  
            </div>
          ))
        }
      </section>
    </section>
  );
};
