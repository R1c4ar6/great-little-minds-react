
import './styles/App.css';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <About />
      {<Programs />
      /*<Testimonials />
      <Gallery />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default App;