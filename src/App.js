import './App.css';
import Header from './Header';
// import Nav from './Components/Nav';
import Main from './Main';
// import { Form } from 'react-router-dom';
import Navigation from './Components/Navigation'
import {Routes, Route} from 'react-router-dom';
import { Home } from './Components/Pages/Home';
import { About } from './Components/Pages/About';
import {Login} from './Components/Pages/Login';
import { OrderOnline } from './Components/Pages/OrderOnline';
import { Reservation } from './Components/Pages/Reservation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/login' element={<Login />} />
         <Route path='/oderOnline' element={<OrderOnline />} />
         <Route path='/reservation' element={<Reservation />} />
      </Routes>
      <Header />
     
      <Main />
      {/* <BookingPage /> Remove this line if you don't want to render BookingPage here */}
    </>
  );
}

export default App;
