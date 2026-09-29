import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Rules from './pages/Rules';
import About from './pages/About';
import Register from './pages/Register';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="flex flex-col min-h-dvh" style={{ background: '#09090B' }}>
      <TopNav />
      <ScrollToTop />

      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/"                    element={<Home />} />
          <Route path="/events"              element={<Events />} />
          <Route path="/events/:id"          element={<EventDetail />} />
          <Route path="/rules"               element={<Rules />} />
          <Route path="/about"               element={<About />} />
          <Route path="/register"            element={<Register />} />
          {/* Catch-all → home */}
          <Route path="*"                    element={<Home />} />
        </Routes>
      </main>

      {/* Footer — hidden on mobile (bottom nav replaces it for nav) */}
      <Footer />

      {/* Mobile bottom navigation — always on top */}
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
