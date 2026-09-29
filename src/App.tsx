import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Rules from './components/Rules';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      {/* Sticky navigation */}
      <Navbar />

      {/* Main content — single page, scroll-based */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Events (Categories + All 12 + Summary Table) */}
        <Events />

        {/* 4. Rules & Regulations */}
        <Rules />

        {/* 5. Registration CTA */}
        <Register />

        {/* 6. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
