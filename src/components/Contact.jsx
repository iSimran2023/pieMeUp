import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#FDB72C] text-black py-16 px-10 md:px-20 relative font-sans">
      {/* Social Icons */}
      <div className="absolute top-6 right-6 flex space-x-4">
        <a
          href="#"
          className="bg-black text-white rounded-full p-2"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="#"
          className="bg-black text-white rounded-full p-2"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="#"
          className="bg-black text-white rounded-full p-2"
        >
          <FaWhatsapp size={18} />
        </a>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Opening Hours */}
        <div>
          <h3 className="text-3xl font-semibold tracking-wide mb-3 text-center">
            OPENING HOURS:
          </h3>
          <div className="space-y-4 text-sm">
            <div className="w-full h-px bg-black mb-6" />

            <div className="text-lg font-semibold flex justify-between">
              <span>MONDAY TO FRIDAY</span>
              <span>11:00 PM TO 09:00 PM</span>
            </div>
            <div className="w-full h-px bg-black mb-6" />

            <div className="text-lg font-semibold flex justify-between">
              <span>WEEKENDS</span>
              <span>11:00 PM TO 09:00 PM</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-sm divide-y divide-black">
          <h3 className="text-3xl font-semibold tracking-wide mb-3 text-center">
            CONTACT US:
          </h3>
          <div className="text-lg font-semibold flex justify-between items-center pt-4">
            <span className="flex items-center space-x-3">
              <FaEnvelope size={16} />
            </span>
            <span>info@piemeup.com.np</span>
          </div>

          <div className="text-lg font-semibold flex justify-between items-center pt-4">
            <span className="flex items-center space-x-3">
              <FaPhoneAlt size={16} />
            </span>
            <span>+977 88488848, +977 1234567</span>
          </div>

          <div className="text-lg font-semibold flex justify-between items-center pt-4">
            <span className="flex items-center space-x-3">
              <FaMapMarkerAlt size={16} />
            </span>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact
