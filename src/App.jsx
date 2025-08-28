import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Order from "./pages/Order"; // Make sure this path is correct

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
                <About />
                <Menu />
                <Gallery />
                <Contact />
                <Footer />
              </div>
            }
          />

          {/* Order Page Route */}
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;