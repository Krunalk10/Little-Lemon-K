import {Routes, Route} from 'react-router-dom';
import { Home } from './Components/Pages/Home';
import { About } from './Components/Pages/About';
import {Login} from './Components/Pages/Login';
import { OrderOnline } from './Components/Pages/OrderOnline';
// import  Reservation  from './Components/Pages/Reservation';

import React from 'react'
import { BookingForm } from './Components/Sections/ReservationPage/BookingForm';

export const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/login' element={<Login />} />
    <Route path='/orderOnline' element={<OrderOnline />} />
    
    {/* <Route path='/reservation' element={<BookingForm />} /> */}

 </Routes>
  )
}

