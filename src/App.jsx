import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/landingPage/LandingPage';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ContactUs from './components/pages/contactUsPage/ContactUs';
import HeroGallery from './components/pages/galleryPage/HeroGallery';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/contact" element={<ContactUs/>} />
           <Route path="/gallery" element={<HeroGallery/>} />
      </Routes>
     
<SpeedInsights/>

   </>
  );
}

export default App;
