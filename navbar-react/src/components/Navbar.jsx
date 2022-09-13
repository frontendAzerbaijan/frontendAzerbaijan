import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallery";
import Home from "../Pages/Home";
import "../Styles/main.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <>
      <header>
        <Link style={{color: '#fff' , textDecoration: 'none' , fontSize: '30px'}} to={'/'}>Logo</Link>
        <nav ref={navRef}>
          <Link onClick={showNavbar} to="/">Home</Link>
          <Link onClick={showNavbar} to="/about">About Us</Link>
          <Link onClick={showNavbar} to="/gallery">Galery</Link>
          <Link onClick={showNavbar} to="/contact">Contact Us</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <FaBars className="nav-btn" onClick={showNavbar} />
      </header>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<About />} path={"/about"} />
        <Route element={<Gallery />} path={"/gallery"} />
        <Route element={<Contact />} path={"/contact"} />
      </Routes>
    </>
  );
};

export default Navbar;
