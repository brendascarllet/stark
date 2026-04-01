
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import './App.css';

import Index from './pages/Index';
import Services from './pages/Services';
import RoofReplacement from './pages/RoofReplacement';
import RoofRepair from './pages/RoofRepair';
import About from './pages/About';
import Contact from './pages/Contact';
import Finance from './pages/Finance';
import RoofEstimator from './pages/RoofEstimator';
import GutterReplacement from './pages/GutterReplacement';
import GutterRepair from './pages/GutterRepair';
import GutterEstimator from './pages/GutterEstimator';
import Skylights from './pages/Skylights';
import SkylightEstimator from './pages/SkylightEstimator';
import SidingInstallation from './pages/SidingInstallation';
import CommercialRoofing from './pages/CommercialRoofing';
import RoofCleaning from './pages/RoofCleaning';
import StormDamage from './pages/StormDamage';
import Warranty from './pages/Warranty';
import WindowReplacement from './pages/WindowReplacement';
import NotFound from './pages/NotFound';
import PageTransition from './components/PageTransition';
import { useEntranceAnimations } from './hooks/useEntranceAnimations';

// New roof type pages
import TPORoofing from './pages/TPORoofing';
import MetalRoofing from './pages/MetalRoofing';
import AsphaltShingles from './pages/AsphaltShingles';

// Location/Service Area pages
import Seattle from './pages/Seattle';
import Lynnwood from './pages/Lynnwood';
import Bothell from './pages/Bothell';
import Redmond from './pages/Redmond';
import Kirkland from './pages/Kirkland';
import Everett from './pages/Everett';
import Tacoma from './pages/Tacoma';
import Sammamish from './pages/Sammamish';

function App() {
  // Initialize global entrance animations
  useEntranceAnimations();
  
  return (
    <Router>
      <PageTransition>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/roof-replacement" element={<RoofReplacement />} />
          <Route path="/roof-repair" element={<RoofRepair />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/roof-estimator" element={<RoofEstimator />} />
          <Route path="/gutter-replacement" element={<GutterReplacement />} />
          <Route path="/gutter-repair" element={<GutterRepair />} />
          <Route path="/gutter-estimator" element={<GutterEstimator />} />
          <Route path="/skylights" element={<Skylights />} />
          <Route path="/skylight-estimator" element={<SkylightEstimator />} />
          <Route path="/siding-installation" element={<SidingInstallation />} />
          <Route path="/commercial-roofing" element={<CommercialRoofing />} />

          {/* Location/Service Area routes */}
          <Route path="/service-area/sammamish" element={<Sammamish />} />
          <Route path="/service-area/seattle" element={<Seattle />} />
          <Route path="/service-area/lynnwood" element={<Lynnwood />} />
          <Route path="/service-area/bothell" element={<Bothell />} />
          <Route path="/service-area/redmond" element={<Redmond />} />
          <Route path="/service-area/kirkland" element={<Kirkland />} />
          <Route path="/service-area/everett" element={<Everett />} />
          <Route path="/service-area/tacoma" element={<Tacoma />} />
          <Route path="/roof-cleaning" element={<RoofCleaning />} />
          <Route path="/storm-damage" element={<StormDamage />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/window-replacement" element={<WindowReplacement />} />
          
          {/* New roof type routes */}
          <Route path="/tpo-roofing" element={<TPORoofing />} />
          <Route path="/metal-roofing" element={<MetalRoofing />} />
          <Route path="/asphalt-shingles" element={<AsphaltShingles />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
      <Toaster position="top-right" richColors />
    </Router>
  );
}

export default App;
