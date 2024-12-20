import './App.css';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Footer from './components/molecule/Footer';
import Navbar from './components/molecule/Navbar';
 
import Contact from './pages/Contact';
import LandingPage from './pages/Landingpage';
import Blog from './pages/Blog';
import Case from './pages/Case';


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
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
        <Route path="/Case" element={<Layout><Case/></Layout>} />
        <Route path="/Contact" element={<Layout><Contact/></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
