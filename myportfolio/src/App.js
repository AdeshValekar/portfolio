import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './componet/Navbar';
import Hero from './componet/Hero';
import About from './componet/About';
import Projects from './componet/Projects';
import Skills from './componet/Skills';
import Contact from './componet/Contact';
import Footer from './componet/Footer';
import Resume from './componet/Resume';
import Education from './componet/Education';


function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
