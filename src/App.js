
import './App.css';
import Navbar from './Comopnents/Navbar';
import Home from './Comopnents/Home';
import Dishes from './Comopnents/Dishes';
import About from './Comopnents/About';
import Pmenu from "./Comopnents/Pmenu"
import Reviews from './Comopnents/Reviews';
import Footer from './Comopnents/Footer';

function App() {
  return (
    <div className="App">
      
      <div>
        <Navbar/>
      </div>

      <div id='home'>
        <Home/>
      </div>

      <div id='dishes'>
        <Dishes/>
      </div>

      <div id='about'>
        <About/>
      </div>

      <div id='menu'>
        <Pmenu/>
      </div>

      <div id='reviews'>
        <Reviews/>
      </div>

      <div>
        <Footer/>
      </div>



  
    </div>
  );
}

export default App;
