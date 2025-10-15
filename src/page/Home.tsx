"use client";
// Main Home page component
import { Button } from "@/base-components/button/Button";
import GradualBlur from "@/components/GradualBlur";
import { Navbar } from "@/components/navbar/Navbar";

import { PlanetEarth } from "@/components/planet-earth/PlanetEarth";
import { PolySphere } from "@/components/poly-sphere/PolySphere";
import SimpleSphere from "@/components/simple-sphere/SimpleSphere";
import ThreeTest from "@/components/three-test/ThreeTest";
import { useUIThemeStore } from "@/store/uiTheme.store";
import { useState } from "react";

export default function Home() {
  // Theme state from Zustand store
  const toggleTheme = useUIThemeStore((state) => state.toggleTheme);
  const isDarkMode = useUIThemeStore((state) => state.isDarkMode);

  // Local state to toggle iframe interaction
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div>
      <section
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        {/* Scrollable content container */}
        <div
          style={{ height: "100%", overflowY: "auto", paddingBottom: "6rem" }}
        >
          <Navbar />
          <main className="flex flex-col items-center justify-center min-h-screen p-4 transition-colors">
            <SimpleSphere />
            {/* === Section 1: Three.js Test Canvas === */}
            <ThreeTest />
            <div className="w-full h-px bg-gray-200 my-10"></div>
            {/* Divider for visual separation */}

            {/* === Section 2: Heading === */}
            <h1 className="text-4xl mb-6">NEXT.JS</h1>
            {/* Simple title for the page */}

            {/* === Section 3: Buttons === */}
            <div className="flex gap-4 items-center mb-6">
              <Button variant="primary" size="lg" onClick={() => {}}>
                Primary
              </Button>
              <Button variant="secondary" size="md" onClick={() => {}}>
                Secondary
              </Button>
              <Button variant="outline" size="sm" onClick={() => {}}>
                Outline
              </Button>
            </div>
            {/* Group of example buttons for interaction */}

            {/* Theme toggle button */}
            <Button variant="primary" size="md" onClick={toggleTheme}>
              Switch to {isDarkMode ? "Light" : "Dark"} Mode
            </Button>
            <div className="w-full h-px bg-gray-200 my-10"></div>
            {/* Divider */}

            {/* === Section 4: Interactive Spline iframe === */}
            <div
              onClick={() => setIsOn(!isOn)}
              className="cursor-pointer border relative"
            >
              <iframe
                src="https://my.spline.design/liquidglassswitch-sz5l7QkeGNjuYr5tjzvpdqcC-1Ci/"
                width="100%"
                height="100%"
              />
            </div>

            <div className="w-full h-px bg-gray-200 my-10"></div>
            <p>POLY SPHERE</p>
            <PolySphere />
            <div className="w-full h-px bg-gray-200 my-10"></div>
            <p>3D - Earth</p>
            <PlanetEarth />
          </main>
        </div>
        {/* === Bottom Gradual Blur === */}
        <GradualBlur
          target="parent"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
        {/* Fades out bottom of scroll container to create a smooth blur effect */}
      </section>
    </div>
  );
}
