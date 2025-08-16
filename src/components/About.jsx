import React from "react";
import About1 from "../assets/About1.png"; 
import About2 from "../assets/About2.png";
import About3 from "../assets/About3.png"; 

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Header */}
       <h2 className="text-4xl md:text-3xl font-bold text-white bg-black px-6 py-4 inline-block outline outline-1 outline-black outline-offset-2  mb-10 tracking-wide">
  ABOUT US
</h2>

        {/* Paragraph */}
        <p className="text-[#696767] text-lg md:text-xl max-w-6xl leading-relaxed mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          sollicitudin nisl. Ut eu libero neque. Integer vestibulum enim a nibh
          volutpat viverra non eget odio. Praesent id tortor in metus congue
          consectetur. Morbi consectetur ut libero non aliquam. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus.
        </p>

        {/* Pizza Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[About1, About2, About3].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Pizza ${index + 1}`}
              className="w-full h-[250px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
