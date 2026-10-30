import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Academy from "./pages/Academy";
import FounderCommunity from "./pages/FounderCommunity";
import Opportunities from "./pages/Opportunities";
import Partnerships from "./pages/Partnerships";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import WhyYourBusinessFeelsChaotic from "./pages/WhyYourBusinessFeelsChaotic";
import SmartFounderDelegationPlaybook from "./pages/SmartFounderDelegationPlaybook";
import Blog from "./pages/Blog";
import SOPStarterKit from "./pages/SOPStarterKit";
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

        {/* Other Pages */}
        <Route path="/academy" element={<Academy />} />
        <Route path="/podcast" element={<Navigate to="/blog" replace />} />
        <Route path="/community" element={<FounderCommunity />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/why-your-business-feels-chaotic" element={<WhyYourBusinessFeelsChaotic />} />
        <Route path="/blog/smart-founder-delegation-playbook" element={<SmartFounderDelegationPlaybook />} />
        <Route path="/blog/sop-starter-kit" element={<SOPStarterKit />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />

        
      </Routes>
    </>
  );
}

export default App;