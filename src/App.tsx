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
import ScrollToTop from './components/ScrollToTop';
import Calendar from './components/Calendar';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Menu />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Programs />
            <Testimonials />
            <Calendar />
            <Gallery />
            <Contact />
          </>
        } />

        {/* Program details page */}
        <Route path="/programs/:id" element={<ProgramDetails />} />
        {/* <Route path="/calendar" element={<Calendar />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;