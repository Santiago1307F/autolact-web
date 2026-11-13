import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Solution from './components/Solution';
import Process from './components/Process';
import Technology from './components/Technology';
import Performance from './components/Performance';
import Specs from './components/Specs';
import Applications from './components/Applications';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Challenge />
      <Solution />
      <Process />
      <Technology />
      <Performance />
      <Specs />
      <Applications />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
