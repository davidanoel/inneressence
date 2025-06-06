"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Workshops", href: "#workshops" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 calming:bg-sage-50/95 backdrop-blur-sm shadow-sm dark:shadow-gray-800/20 calming:shadow-sage-200/50 fixed w-full z-50 transition-all duration-300">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400 calming:text-calm-700">
              Inner Essence Therapy
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 calming:text-sage-700 hover:text-blue-600 dark:hover:text-blue-400 calming:hover:text-calm-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 calming:text-sage-700 hover:text-blue-600 dark:hover:text-blue-400 calming:hover:text-calm-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 calming:bg-sage-50 border-t dark:border-gray-800 calming:border-sage-200">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 calming:text-sage-700 hover:text-blue-600 dark:hover:text-blue-400 calming:hover:text-calm-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 border-t dark:border-gray-800 calming:border-sage-200 mt-4 pt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 calming:text-sage-600 mb-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 calming:text-sage-600">
                  <Mail className="h-4 w-4" />
                  <span>info@inneressencetherapy.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
