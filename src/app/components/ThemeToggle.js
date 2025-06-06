"use client";

import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon, Leaf, Palette } from "lucide-react";

export default function ThemeToggle() {
  const { isDarkMode, isCalmingMode, toggleDarkMode, toggleCalmingMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 calming:bg-sage-100/90 hover:bg-white dark:hover:bg-gray-700 calming:hover:bg-sage-200 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 calming:focus:ring-calm-500"
        aria-label="Theme options"
      >
        <Palette className="h-5 w-5 text-gray-700 dark:text-gray-300 calming:text-sage-700" />
      </button>

      {/* Theme Options Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 calming:bg-sage-50 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 calming:border-sage-200 z-20">
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 calming:text-sage-900 mb-3">
                Theme Options
              </h3>

              {/* Calming Mode Toggle */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Leaf className="h-4 w-4 text-calm-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 calming:text-sage-700">
                    Calming Mode
                  </span>
                </div>
                <button
                  onClick={toggleCalmingMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-calm-500 focus:ring-offset-2 ${
                    isCalmingMode ? "bg-calm-600" : "bg-gray-200 dark:bg-gray-600"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isCalmingMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Dark Mode Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {isDarkMode ? (
                    <Moon className="h-4 w-4 text-blue-600 calming:text-calm-600" />
                  ) : (
                    <Sun className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="text-sm text-gray-700 dark:text-gray-300 calming:text-sage-700">
                    Dark Mode
                  </span>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 calming:focus:ring-calm-500 focus:ring-offset-2 ${
                    isDarkMode ? "bg-blue-600 calming:bg-calm-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isDarkMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Theme Preview */}
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 calming:border-sage-200">
                <p className="text-xs text-gray-500 dark:text-gray-400 calming:text-sage-600 mb-2">
                  Current theme:
                </p>
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500 calming:bg-calm-500"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600 calming:bg-sage-300"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-100 dark:bg-gray-800 calming:bg-sage-100"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
