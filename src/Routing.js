import {Routes, Route} from 'react-router-dom';
import { Home } from './Components/Pages/Home';
import {Login} from './Components/Pages/Login';
import { OrderOnline } from './Components/Pages/OrderOnline';
// import  Reservation  from './Components/Pages/Reservation';

import React from 'react'
import { BookingForm } from './Components/Sections/ReservationPage/BookingForm';
import { Confirmation } from './Components/Pages/Confirmation';
// import { Order } from './Components/Sections/OrderPage/Order';
import {About} from './Components/Pages/About';

export const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/login' element={<Login />} />
    <Route path='/orderOnline' element={<OrderOnline />} />
    <Route path='/confirmation' element={<Confirmation />} />
    <Route path='/reservation' element={<BookingForm />} />
 </Routes>
  )
}

