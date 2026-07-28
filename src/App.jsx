import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Academy from "./pages/Academy";
import UnfilteredBlueprint from "./pages/UnfilteredBlueprint";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

import Seo from "./components/Seo";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Seo />
      <ScrollToTop />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route
          path="/unfiltered-blueprint"
          element={<UnfilteredBlueprint />}
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Other Pages */}
        <Route path="/industries" element={<Industries />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
}

export default App;