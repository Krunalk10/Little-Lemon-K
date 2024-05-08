import './App.css';
import { Footer } from './Components/Footer';
import Navigation from './Components/Navigation'

import { Routing } from './Routing';


function App() {
  return (
    <>
      <Navigation /> 
      <Routing />
      <Footer />
    </>
  );
}

export default App;
