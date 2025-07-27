import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/schedule", label: "Schedule" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-primary">
          RadioLive
        </Link>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-medium hover:text-primary transition-colors ${
                  isActive ? "text-primary" : "text-gray-700 dark:text-gray-200"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode((d) => !d)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-700" />
            )}
          </button>
          <button
            className="md:hidden p-2"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="fixed inset-0 bg-black/50 z-40 flex flex-col">
            <div className="bg-white dark:bg-gray-900 p-4 flex flex-col gap-4">
              <button
                className="self-end"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <XIcon className="w-6 h-6" />
              </button>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block py-2 text-lg font-medium ${
                      isActive ? "text-primary" : "text-gray-700 dark:text-gray-200"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
