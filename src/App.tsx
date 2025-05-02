import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import { useDarkMode } from './utils/hooks';

// Import AOS (Animate On Scroll) for animations
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className={`min-h-screen bg-white text-gray-900 ${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 dark:text-white">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;