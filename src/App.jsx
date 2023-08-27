import React from "react";
import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import SinglePortfolio from "./pages/SinglePortfolio";
import Contact from "./pages/Contact";
import BlogTwo from "./pages/BlogTwo";
import Details from "./pages/Details";
import BlogOne from "./pages/BlogOne";
import SinglePostwithSidebar from "./pages/SinglePostwithSidebar";
import SinglePostNoSidebar from "./pages/SinglePostNoSidebar";
import Navigation from "./components/Navigation";
import Starters from "./pages/Starters";
import Mains from "./pages/Mains";
import Drinks from "./pages/Drinks";

function App() {
  const { pathname } = useLocation();
  const route = pathname.split("/")[1];
  const routes = [
    "",
    "menu",
    "next",
    "previous",
    "details",
    "about",
    "portfolio",
    "singleportfolio",
    "contact",
    "blogtwo",
    "blogone",
    "singlepostwithsidebar",
    "singlepostnosidebar",
    "starters",
    "mains",
    "drinks",
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  return (
    <>
      {routes.includes(route) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/blogone" element={<BlogOne />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/singleportfolio" element={<SinglePortfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogtwo" element={<BlogTwo />} />
        <Route path="/blogone" element={<BlogOne />} />
        <Route path="/starters" element={<Starters />} />
        <Route path="/mains" element={<Mains />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route
          path="/singlepostwithsidebar"
          element={<SinglePostwithSidebar />}
        />
        <Route path="/singlepostnosidebar" element={<SinglePostNoSidebar />} />
      </Routes>

      {routes.includes(route) && <Footer />}
    </>
  );
}

export default App;
