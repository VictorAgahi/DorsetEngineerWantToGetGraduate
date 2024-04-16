import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

import NavbarApp from "./pages/NavbarApp";
import FooterApp from "./pages/FooterApp";

import { Routes, Route } from "react-router-dom";
import Bruh from "./pages/Bruh.jsx";

function App() {
  return (
    <>
      <NavbarApp />
      <Routes>
        {/* Use Home component for the root path */}
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
          <Route path="bruh" element={<Bruh />} />
      </Routes>
      <FooterApp />
    </>
  );
}

export default App;
