import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import TopNavbar from "./TopNavBar";
import ProgressBar from "../ui/ui25/progressbar.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef();

  const navLinks = ["Home", "About", "Tours", "Contact"];

  // ✅ Detect outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
      <>
        <TopNavbar />

        <nav className="bg-white shadow-md sticky top-0 left-0 right-0 z-50">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-3xl font-bold text-orange-500">
              Travel<span className="text-gray-800">Tour</span>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-8 tracking-widest font-semibold">
              {navLinks.map((link) => {
                const path = link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`;
                const isActive = location.pathname === path;

                return (
                    <li key={link}>
                      <Link
                          to={path}
                          className={`transition ${
                              isActive ? "text-black font-bold" : "text-gray-500 hover:text-black"
                          }`}
                      >
                        {link}
                      </Link>
                    </li>
                );
              })}
            </ul>

            {/* Hamburger Button (Mobile) */}
            <div className="md:hidden">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 text-xl"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Sidebar */}
          <div
              ref={sidebarRef}
              className={`fixed top-0 right-0 w-2/4 h-full bg-white shadow-lg transform transition-transform duration-300 ${
                  isOpen ? "translate-x-0" : "translate-x-full"
              } md:hidden z-50`}
          >
            <div className="flex justify-between items-center pt-8 px-4">
              <h1 className="font-bold text-2xl">Menu</h1>
              <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 text-xl"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {navLinks.map((link) => {
                const path = link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`;
                const isActive = location.pathname === path;

                return (
                    <Link
                        key={link}
                        to={path}
                        onClick={() => setIsOpen(false)}
                        className={`block text-lg font-medium ${
                            isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                        }`}
                    >
                      {link}
                    </Link>
                );
              })}
            </div>
          </div>

          <ProgressBar />
        </nav>
      </>
  );
}

export default Navbar;
