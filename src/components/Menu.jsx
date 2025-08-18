import React, { useState } from "react";

const menuData = {
  Veg: [
    {
      name: "Margherita",
      desc: "Form grown tomatoes, basil, and homemade cheese",
    },
    {
      name: "Pesto",
      desc: "Italian basil, walnuts, olive oil, salt, and pepper",
    },
    { name: "Fungi", desc: "Confit local mushrooms on garlic and herbs" },
    {
      name: "Mushroom & Spinach",
      desc: "Sauteed mushroom, baby spinach, and mozzarella cheese",
    },
    {
      name: "Oven Roasted Veggies",
      desc: "Zucchini, eggplant, bell peppers, and seasonal veggies with garlic",
    },
    {
      name: "Popeye",
      desc: "Spinach, Himalayan cheese, and mozzarella cheese",
    },
    {
      name: "Paneer Tikka",
      desc: "Spiced paneer cooked in tandoor and mozzarella cheese",
    },
    { name: "Artichoke Hearts", desc: "Artichoke hearts, mozzarella cheese" },
  ],
  "Non-Veg": [
    {
      name: "Fume Polo",
      desc: "Home smoked cooked paprika rubbed chicken & mozzarella",
    },
    {
      name: "BBQ Chicken",
      desc: "American style bbq chicken with caramelized onion",
    },
    {
      name: "Chicken Tikka Masala",
      desc: "Tandoori chicken tikka, onion & hint of cilantro chutney",
    },
    { name: "Hawaiian", desc: "Grilled pineapple, ham & mozzarella" },
    { name: "Pepperoni", desc: "Pepperoni cheese & mozzarella" },
    {
      name: "Carnivore",
      desc: "Ham, smoked chicken, bacon, sausage & mozzarella",
    },
  ],
  "Signature Pizza": [
    { name: "BLBB", desc: "Blue cheese, leek, baby corn, and bacon" },
    {
      name: "Flat White Shitake",
      desc: "Shitake, celery hearts, mozzarella, grana",
    },
    {
      name: "Pudding Pizza",
      desc: "Fresh berries, mozzarella cheese with the dusting of icing sugar",
    },
  ],
  Calzone: [
    {
      name: "Cheesy Paradise",
      desc: "Mix of homemade mozzarella, himal cheese & grana",
    },
    {
      name: "Meatilicious",
      desc: "Home smoked chicken, ham, homemade bacon and mozzarella cheese",
    },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Veg");

  return (
    <section className="bg-white py-160 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-white bg-black px-6 py-4 inline-block outline outline-1 outline-black outline-offset-2 mb-10 tracking-wide">
        OUR MENU
      </h2>
      <div className="flex justify-center space-x-4 mt-3 mb-1">
        {Object.keys(menuData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-2xl font-semibold border ${
              activeTab === tab ? "bg-black text-white" : "bg-white text-black"
            } transition duration-300`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-black text-white max-w-4xl mx-auto p-8 mb-10 outline outline-1 outline-black outline-offset-2">
        <h3 className="text-xl font-bold mb-6">
          • {activeTab.toUpperCase()} •
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {menuData[activeTab].map((item, index) => (
            <div key={index}>
              <h4 className="font-bold text-[#FDB72C] mb-1">{item.name}</h4>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        {/* ORDER NOW Button */}
        <div className="mt-10 text-center">
          <button className="bg-[#FDB72C] text-black font-semibold py-3 px-6 outline outline-1 outline-[#FDB72C] outline-offset-2 shadow-lg transition duration-300 hover:text-white">
            ORDER NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
