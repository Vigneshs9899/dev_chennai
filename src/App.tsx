import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
// import Pricing from './pages/Pricing';
import AboutSection from './pages/AboutSection';
import Contact from './pages/Contact';
import CursorGlow from './components/CursorGlow';

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
       <CursorGlow />
      <main>
        <Home />
        <AboutSection />
        <Services />
        {/* <Portfolio /> */}
        {/* <Pricing /> */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
