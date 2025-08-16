import React, { useState } from "react";
import heroPizza1 from "../assets/heroPizza1.jpg";
import heroPizza2 from "../assets/heroPizza2.jpg";
import heroPizza3 from "../assets/heroPizza3.jpg";

const heroImages = [
  {
    src: heroPizza1,
    heading: "PIE ME UP",
    subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: heroPizza2,
    heading: "PIE ME UP",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: heroPizza3,
    heading: "PIE ME UP",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

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

  const { src, heading, subtext } = heroImages[currentIndex];

  return (
    <section className="relative h-[89vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${src})` }}
      />

      {/* Animated Overlay */}
      <div
        className={`absolute top-0 left-[60px] h-full w-full md:w-[400px] bg-black bg-opacity-70 px-4 py-10 md:px-10 flex items-center justify-center text-center transition-all duration-700 ease-out ${
          animateOverlay ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Animated Text */}
        <div
          className={`max-w-xl text-white transition-all duration-700 ease-out ${
            animateText
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-3xl md:text-6xl font-bold mb-4">{heading}</h1>
          <p className="text-base md:text-xl mb-6">{subtext}</p>
          <button className="bg-[#FDB72C] text-white font-semibold py-3 px-6 inline-block outline outline-1 outline-[#FDB72C] outline-offset-2 shadow-lg transition duration-300">
            ORDER NOW
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === index ? "bg-white" : "bg-white bg-opacity-40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
