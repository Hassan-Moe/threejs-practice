/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { LiquidGlass } from "@liquidglass/react";
import { Sun, Moon, X } from "lucide-react";
import { useUIThemeStore } from "@/store";

const NAV_ITEMS = ["Home", "Swords", "About", "Contact"];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDarkMode = useUIThemeStore((state) => state.isDarkMode);
  const toggleTheme = useUIThemeStore((state) => state.toggleTheme);

  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [lensStyle, setLensStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const current = linkRefs.current[activeIndex];
    if (current) {
      const { offsetLeft, offsetWidth } = current;
      setLensStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeIndex]);

  return (
    <div className="fixed top-4 left-1/2 z-[9999] -translate-x-1/2 w-fit">
      <LiquidGlass
        borderRadius={200}
        blur={1}
        contrast={1}
        brightness={1.45}
        shadowIntensity={0}
        className={`border ${
          isDarkMode ? "border-white/10" : "border-white/20"
        } `}
      >
        <div className="relative flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            3D
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-2 relative mx-10">
            {/* Lens wrapper */}
            <div
              className="absolute top-0 bottom-0 transition-all duration-300 ease-in-out pointer-events-none"
              style={{ left: lensStyle.left, width: lensStyle.width }}
            >
              <LiquidGlass
                borderRadius={999}
                blur={0}
                shadowIntensity={0}
                brightness={2}
                displacementScale={0}
                className="border"
              >
                <div className="h-full w-full" />
              </LiquidGlass>
            </div>

            {NAV_ITEMS.map((item, index) => (
              <a
                key={item}
                ref={(el) => (linkRefs.current[index] = el) as any}
                href={`${item.toLowerCase()}`}
                className="relative z-10 px-4 py-2 rounded-full text-sm text-accent-foreground font-medium transition-colors duration-300"
                onClick={() => {
                  // e.preventDefault();
                  setActiveIndex(index);
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Theme & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/20 transition"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-yellow-300" />
              ) : (
                <Moon className="w-4 h-4 text-blue-400" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/20 transition"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <X className="w-4 h-4 rotate-45" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 rounded-full hover:bg-white/20 transition"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(index);
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </LiquidGlass>
    </div>
  );
};
