import './App.css';
// import { Footer } from './Components/Footer';
// import { Header } from '../src/Components/Sections/HeadingPages/Header';
import Navigation from './Components/Navigation'

// import { Specials } from './Components/Sections/HeadingPages/Specials';
import { Routing } from './Routing';
// import { BookingForm } from './Components/Sections/ReservationPage/BookingForm';


function App() {
  return (
    <>
      <Navigation /> 
      {/* <Header /> */}
      <Routing />
      {/* <Specials /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
