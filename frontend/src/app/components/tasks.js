"use client"

import React from "react";

// Frontend (Next.js)
// Responsive Webpage

import { useState, useEffect } from "react";

export default function Tasks() {
  const [shrinkWidth, setShrinkWidth] = useState("w-full");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) setShrinkWidth("w-1/2");
      else if (width <= 700) setShrinkWidth("w-3/4");
      else if (width <= 767) setShrinkWidth("w-4/5");
      else if (width <= 1600) setShrinkWidth("w-9/10");
      else setShrinkWidth("w-full");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${shrinkWidth}`}>
      <header className="fixed top-0 w-full bg-gray-800 text-white text-center p-4 z-50">
        Fixed Navbar
      </header>
      <main className="flex flex-grow mt-16">
        <aside className="w-48 bg-gray-200 p-4">Left Menu</aside>
        <section className="flex-grow p-4">Main Content Area</section>
        <aside className="w-48 bg-gray-200 p-4">Right Panel</aside>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        Footer
      </footer>
    </div>
  );
}
