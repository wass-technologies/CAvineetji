import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Career from "./pages/Career/Career";
import Top from "../src/Top";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Faq from "./pages/Faq/Faq";
import Contact from "./pages/Contact/Contact";
import Blogpage from "./pages/Blog/Blogpage";
import Privicypolicy from "./pages/Policy/Privicypolicy";
import About from "./pages/About/About";
import BlogDetails from "./pages/Blog/Blogdetails";

const App = () => {
  return (
    <div>
      <Header />
      <Top />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/service/:_id" element={<ServiceDetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogpage />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/privicy-policy" element={<Privicypolicy />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
