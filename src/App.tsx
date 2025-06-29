import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeProvider from './context/ThemeContext';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;