import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Schedule from './pages/Schedule';
import About from './pages/About';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Search from './pages/Search';

import MobileNav from './components/MobileNav';

function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="flex flex-col min-h-screen bg-paper pb-[68px] md:pb-0">
        <Navbar />
        <MobileNav />
        <main className="flex-grow">
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/events"     element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/schedule"   element={<Schedule />} />
            <Route path="/about"      element={<About />} />
            <Route path="/gallery"    element={<Gallery />} />
            <Route path="/faq"        element={<FAQ />} />
            <Route path="/contact"    element={<Contact />} />
            <Route path="/search"     element={<Search />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
