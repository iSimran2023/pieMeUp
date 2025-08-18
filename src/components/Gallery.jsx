import React from 'react';
import a from '../assets/Gallery/a.jpg';
import b from '../assets/Gallery/b.jpg';
import c from '../assets/Gallery/c.jpg';
import d from '../assets/Gallery/d.jpg';
import p from '../assets/Gallery/p.jpg';
import r from '../assets/Gallery/r.jpg';
import m from '../assets/Gallery/m.jpg';
import h from '../assets/Gallery/h.jpg';
import i from '../assets/Gallery/i.jpg';

const Gallery = () => {
  // Store all images in an array
  const images = [a, b, c, d, p, r, m, h, i];

  return (
    <section className="bg-white py-5 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-white bg-black px-6 py-4 inline-block outline outline-1 outline-black outline-offset-2 mb-14 tracking-wide">
        OUR GALLERY
      </h2>

      {/* Fixed 3-column Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden ">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery
