'use client';
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'; // icons for mobile menu

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // adjust for navbar height
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
        { id: "about", label: "About" },
    { id: "contact", label: "Contacts" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full  bg-[#FAF7F3] p-4 z-50">
      <div className="flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-xl sm:text-2xl font-medium text-gray-800">
          JO MANALASTAS
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-end space-x-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${
                  activeSection === link.id
                    ? "text-gray-900 font-bold"
                    : "text-gray-700"
                } hover:text-gray-900`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 bg-gray-200 p-4 rounded-lg shadow-md">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)} // close menu on click
                className={`block ${
                  activeSection === link.id
                    ? "text-gray-900 font-bold"
                    : "text-gray-700"
                } hover:text-gray-900`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
