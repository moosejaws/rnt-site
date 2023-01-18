import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Navbar from './components/Navbar.js'
import Home from "./components/Home"
import About from './components/About'
import Services from './components/Services'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'





function App() {
  return (
    <div className="App">


      <Navbar />

          <Home />
          <About />
          <Services />
          <Banner />
          <Contact />
          <Footer />

          
          <Routes>
          </Routes>



    </div>
  );
}

export default App;
