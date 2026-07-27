import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Resources from "./pages/Resources";

function App() {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* About Page */}
      <Route path="/about" element={<About />} />

      {/* Services Page */}
      <Route path="/services" element={<Services />} />

      {/* Other Pages */}
      <Route
        path="/industries"
        element={<h1>Industries Coming Soon</h1>}
      />

      <Route
        path="/resources"
        element={<Resources />}
      />

      <Route
        path="/contact"
        element={<h1>Contact Coming Soon</h1>}
      />

    </Routes>
  );
}

export default App;