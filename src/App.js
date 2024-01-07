import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutPage from "./pages/About";
import GlassesPage from "./pages/Glasses";
import ShopPage from "./pages/Shop";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <div className="main-layout position_head">
      {/* <div className="loader_bg">
        <div className="loader">
          <img src="images/loading.gif" alt="#" />
        </div>
      </div> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/glasses" element={<GlassesPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

    </div>
  );
}

export default App;
