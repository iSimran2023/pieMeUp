import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroPizza1 from "../assets/heroPizza1.jpg";
import heroPizza2 from "../assets/heroPizza2.jpg";
import heroPizza3 from "../assets/heroPizza3.jpg";

// Hero image data
const heroImages = [
  {
    src: heroPizza1,
    heading: "PIE ME UP",
    subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: heroPizza2,
    heading: "PIE ME UP",
    subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: heroPizza3,
    heading: "PIE ME UP",
    subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

// Navigation Dots Component
const NavigationDots = ({ currentIndex, onClick }) => (
  <div className="flex justify-center space-x-2">
    {heroImages.map((_, index) => (
      <button
        key={index}
        onClick={() => onClick(index)}
        className={`w-3 h-3 rounded-full transition transform hover:scale-125 hover:shadow-md ${
          currentIndex === index ? "bg-white" : "bg-white bg-opacity-40"
        }`}
      />
    ))}
  </div>
);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateOverlay, setAnimateOverlay] = useState(true);
  const [animateText, setAnimateText] = useState(true);

  const handleSlide = (index) => {
    setAnimateOverlay(false);
    setAnimateText(false);

    setTimeout(() => {
      setCurrentIndex(index);
      setAnimateOverlay(true);
      setTimeout(() => setAnimateText(true), 500);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % heroImages.length;
      handleSlide(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  if (heroImages.length === 0) {
    return (
      <section className="h-[89vh] flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600">No hero images available. Check back soon!</p>
      </section>
    );
  }

  const { src, heading, subtext } = heroImages[currentIndex];

  return (
    <section className="relative h-[89vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${src})` }}
      />

      {/* Mobile Overlay */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-70 px-4 py-6 text-center transition-all duration-700 ease-out md:hidden ${
          animateOverlay ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h1 className="text-xl font-bold text-white mb-4">{heading}</h1>
        <NavigationDots currentIndex={currentIndex} onClick={handleSlide} />
      </div>

      {/* Desktop Overlay */}
      <div
        className={`hidden md:flex absolute top-0 left-[60px] h-full w-[400px] bg-black bg-opacity-70 px-10 py-10 items-center justify-center text-center transition-all duration-700 ease-out ${
          animateOverlay ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`text-white transition-all duration-700 ease-out ${
            animateText ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-6xl font-bold mb-7">{heading}</h1>
          <p className="text-xl mb-7">{subtext}</p>
          <Link to="/order">
            <button
              className="bg-[#FDB72C] text-white font-semibold py-3 px-6 mb-8 outline outline-1 outline-[#FDB72C] outline-offset-2 shadow-lg transition duration-300 hover:text-black"
            >
              ORDER NOW
            </button>
          </Link>
        </div>

        {/* Dots at Bottom of Overlay */}
        <div className="absolute bottom-6 left-0 w-full">
          <NavigationDots currentIndex={currentIndex} onClick={handleSlide} />
        </div>
      </div>
    </section>
  );
};

export default Hero;