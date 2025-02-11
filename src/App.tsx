import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Menu from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProgramDetails from './components/ProgramDetails';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Programs />
            <Testimonials />
            <Gallery />
            <Contact />
          </>
        } />

        {/* Program details page */}
        <Route path="/programs/:id" element={<ProgramDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;