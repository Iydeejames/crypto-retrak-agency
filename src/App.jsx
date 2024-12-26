import './App.css';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/molecule/Footer';
import Navbar from './components/molecule/Navbar';
 
import Contact from './pages/Contact';
import LandingPage from './pages/Landingpage';
import Blog from './pages/Blog';
import Case from './pages/Case';

// Landbot Widget Component
import { useEffect } from 'react';

const LandbotWidget = () => {
  useEffect(() => {
    const initLandbot = () => {
      if (!window.myLandbot) {
        const script = document.createElement('script');
        script.type = "module";
        script.async = true;

        script.addEventListener('load', () => {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2731401-HKO7OE81MLN8FD61/index.json', // Update with your Landbot config URL
          });
        });

        script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';

        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
      }
    };

    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 p-4 z-50">
      {/* Landbot will load and initialize automatically */}
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <LandbotWidget /> {/* Include the Landbot widget here */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/Blog" element={<Layout><Blog /></Layout>} />
        <Route path="/Case" element={<Layout><Case /></Layout>} />
        <Route path="/Contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;