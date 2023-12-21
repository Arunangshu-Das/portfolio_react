import React from 'react'
import "./App.css"
import About from './components/container/About/About'
import Contact from './components/container/Contact/Contact'
import Footer from './components/container/Footer/Footer'
import Home from './components/container/Home/Home'
import Portfolio from './components/container/Portfolio/Portfolio'
import Skills from './components/container/Skills/Skills'
import Navbar from './components/Navbar/Navbar'
import Particle from './components/Particle';

const App = () => {
  const handleRightClick = (event) => {
    event.preventDefault(); // Prevent the default right-click behavior
  };
  return (
    <div onContextMenu={handleRightClick}>
      <Particle />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
