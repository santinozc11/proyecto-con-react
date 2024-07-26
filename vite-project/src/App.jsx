import React, { Suspense, lazy } from 'react';
import './App.css';

// Importación dinámica
const About = lazy(() => import('./Components/About/About'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const Header = lazy(() => import('./Components/Header/Header'));
const Hero = lazy(() => import('./Components/Hero/Hero'));
const Projects = lazy(() => import('./Components/Projects/Projects'));
const Services = lazy(() => import('./Components/Services/Services'));
const SkillyExp = lazy(() => import('./Components/SkillyExp/SkillyExp'));
const Testimonial = lazy(() => import('./Components/Testimonial/Testimonial'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Hero/>
      <About/>
      <Services/>
      <SkillyExp/>
      <Projects/>
      <Testimonial/>
      <Footer/>
    </Suspense>
  );
}

export default App;
