import './App.css'
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import SkillyExp from './Components/SkillyExp/SkillyExp';
import Testimonial from './Components/Testimonial/Testimonial';


function App() {
  

  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Services/>
      <SkillyExp/>
      <Projects/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
