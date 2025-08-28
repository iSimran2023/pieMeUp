import React, { useRef, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import recommendedImage from "../assets/Menu/recommendedImage.jpg";
import SuperDadCombo from "../assets/Menu/SuperDadCombo.jpg";
import DadsFavouriteCombo from "../assets/Menu/DadsFavoriteCombo.jpg";

const sections = {
  Recommended: [
    {
      title: "Super Dad Combo",
      description:
        "BBQ chicken pizza, Mozzarella cheese bread, BBQ chicken wings, coke 500 ml",
      price: "Rs1399.00",
      image: recommendedImage,
    },
  ],
  Combo: [
    {
      title: "Super Dad Combo",
      description:
        "BBQ chicken pizza, Mozzarella cheese bread, BBQ chicken wings, coke 500 ml",
      price: "Rs1399.00",
      image: SuperDadCombo,
    },
    {
      title: "Dad's Favourite Combo",
      description:
        "Butter paneer pizza, Corn Nachos with salsa, Peri peri fries, coke 500 ml",
      price: "Rs1299.00",
      image: DadsFavouriteCombo,
    },
  ],
   "Half & Half Pizza": [
    {
      title: "Half & Half Pizza Non Veg",
      description: "Mix of two non-veg pizzas in one",
      price: "Starts From Rs950.00",
      image: "/images/half-nonveg.png",
    },
    {
      title: "Half & Half Pizza Veg",
      description: "Mix of two veg pizzas in one",
      price: "Starts From Rs900.00",
      image: "/images/half-veg.png",
    },
  ],
  "Non Veg Pizza": [
    {
      title: "Pineapple Express Pizza",
      description: "Mozzarella, Chicken Salami, Jalapeño, Pineapple",
      price: "Starts From Rs80.00",
      image: "/images/pineapple-express.png",
    },
    {
      title: "Smoked Bacon & Mushroom Pizza",
      description: "Mozzarella, Smoked Bacon, Mushroom",
      price: "Starts From Rs90.00",
      image: "/images/bacon-mushroom.png",
    },
    {
      title: "Pepperoni & Mushroom Pizza",
      description: "Mozzarella, Pepperoni, Mushroom",
      price: "Starts From Rs60.00",
      image: "/images/pepperoni-mushroom.png",
    },
    {
      title: "Butter Chicken Pizza",
      description: "Butter chicken gravy, Tandoori Chicken, Capsicum, Onion",
      price: "Starts From Rs60.00",
      image: "/images/butter-chicken.png",
    },
    {
      title: "Carnivore",
      description: "Ham, Smoked Chicken, Bacon, Sausage & Mozzarella",
      price: "Starts From Rs60.00",
      image: "/images/carnivore.png",
    },
    {
      title: "Peri Peri Chicken Pizza",
      description: "Peri peri Chicken, Garlic, Black Pepper, Onion, Mozzarella",
      price: "Starts From Rs60.00",
      image: "/images/peri-peri-chicken.png",
    },
    {
      title: "Smoked Bacon & Spinach",
      description: "Thick Cut Smoked Pork Bacon, Spinach & Mozzarella",
      price: "Starts From Rs90.00",
      image: "/images/bacon-spinach.png",
    },
    {
      title: "Fume Polo",
      description: "Smoked Paprika Chicken & Mozzarella",
      price: "Starts From Rs70.00",
      image: "/images/fume-polo.png",
    },
    {
      title: "Hawaiian",
      description: "Grilled Pineapple, Ham & Mozzarella",
      price: "Starts From Rs70.00",
      image: "/images/hawaiian.png",
    },
  ],
  "Veg Pizza": [
    {
      title: "Butter Paneer Pizza",
      description: "Butter paneer gravy, Tandoori Paneer, Capsicum, Onion",
      price: "Starts From Rs370.00",
      image: "/images/butter-paneer.png",
    },
    {
      title: "Veg Mexicana Pizza",
      description: "Olives, Sweet Corn, Onion, Capsicum, Jalapeno & Mozzarella",
      price: "Starts From Rs900.00",
      image: "/images/veg-mexicana.png",
    },
    {
      title: "Paneer Tikka (Mcp)",
      description: "Spiced Paneer, Tandoor-cooked, Mozzarella Cheese",
      price: "Starts From Rs370.00",
      image: "/images/paneer-tikka.png",
    },
    {
      title: "Mushroom & Spinach",
      description: "Sauteed Mushroom, Baby Spinach, Mozzarella Cheese",
      price: "Starts From Rs850.00",
      image: "/images/mushroom-spinach.png",
    },
    {
      title: "Oven Roasted Veggies",
      description: "Seasonal Veggies, Garlic, Mozzarella",
      price: "Starts From Rs850.00",
      image: "/images/roasted-veggies.png",
    },
    {
      title: "Popeye",
      description: "Spinach, Himalayan Cheese, Mozzarella",
      price: "Starts From Rs850.00",
      image: "/images/popeye.png",
    },
    {
      title: "Fungi",
      description: "Confit Mushrooms, Garlic & Herbs",
      price: "Starts From Rs850.00",
      image: "/images/fungi.png",
    },
    {
      title: "Margherita",
      description: "San Marzano Tomato, Mozzarella Cheese",
      price: "Starts From Rs700.00",
      image: "/images/margherita.png",
    },
  ],
  "Calzone": [
    {
      title: "Cheesy Paradise",
      description: "Mozzarella, Himalayan Cheese, Parmesan",
      price: "Rs900.00",
      image: "/images/cheesy-paradise.png",
    },
    {
      title: "Meatilicious",
      description: "Smoked Chicken, Ham, Bacon, Mozzarella",
      price: "Rs900.00",
      image: "/images/meatilicious.png",
    },
  ],
  "Signature Pizza": [
    {
      title: "Pulled Chicken",
      description: "Arugula, Garlic, Rosemary, Parmesan, Mozzarella, Black Olives, Pulled Chicken",
      price: "Starts From Rs1050.00",
      image: "/images/pulled-chicken.png",
    },
    {
      title: "Four Season Pizza",
      description: "Bacon, BBQ Chicken, Mushroom, Black Olive",
      price: "Starts From Rs1050.00",
      image: "/images/four-season.png",
    },
  ],
  "Munchies": [
    {
      title: "BBQ Chicken Wings (M)",
      description: "Medium portion of smoky BBQ chicken wings",
      price: "Rs475.00",
      image: "/images/bbq-wings.png",
    },
    {
      title: "Corn Nachos",
      description: "Crispy nachos with salsa dip",
      price: "Rs350.00",
      image: "/images/nachos.png",
    },
    {
      title: "Mozzarella Cheese Bread",
      description: "Cheesy garlic bread with mozzarella",
      price: "Rs350.00",
      image: "/images/cheese-bread.png",
    },
    {
      title: "Peri Peri Potato Wedges",
      description: "Spicy potato wedges with peri peri seasoning",
      price: "Rs300.00",
      image: "/images/peri-wedges.png",
    },
  ],
  "Dips": [
    {
      title: "Hot Garlic Aioli",
      description: "Spicy garlic dip",
      price: "Rs145.00",
      image: "/images/garlic-aioli.png",
    },
    {
      title: "Ranch Dip",
      description: "Creamy ranch dressing",
      price: "Rs145.00",
      image: "/images/ranch.png",
    },
    {
      title: "Garlic Mayo",
      description: "Smooth garlic-flavored mayonnaise",
      price: "Rs125.00",
      image: "/images/garlic-mayo.png",
    },
    {
      title: "Tomato",
      description: "Classic tomato dip",
      price: "Rs120.00",
      image: "/images/tomato-dip.png",
    },
  ],
  "Soft Drinks": [
    {
      title: "Coke - 500ml",
      description: "Chilled Coca-Cola bottle",
      price: "Rs150.00",
      image: "/images/coke.png",
    },
  ],
};

const Order = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});
  const containerRef = useRef(null); // ref for scrollable container

  // Attach refs for each section
  useEffect(() => {
    Object.keys(sections).forEach((section) => {
      sectionRefs.current[section] = React.createRef();
    });
  }, []);

  // IntersectionObserver for scroll tracking
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: containerRef.current,          // scrollable container
        rootMargin: "-50% 0px -50% 0px",    // middle of container triggers highlight
        threshold: 0.1,
      }
    );

    Object.keys(sectionRefs.current).forEach((key) => {
      if (sectionRefs.current[key]?.current) {
        observer.observe(sectionRefs.current[key].current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll on sidebar click
  const handleScrollTo = (section) => {
    setActiveSection(section); // highlight instantly
    const element = sectionRefs.current[section]?.current;
    if (element && containerRef.current) {
      containerRef.current.scrollTo({
        top: element.offsetTop - 10, // adjust offset if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex bg-white text-gray-800 h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 p-4 space-y-4 sticky top-0 h-screen overflow-y-auto">
        <h1 className="text-xl font-bold">Pie Me Up</h1>
        <nav className="space-y-2">
          {Object.keys(sections).map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item)}
              className={`w-full text-left px-3 py-2 rounded font-medium transition
                ${
                  activeSection === item
                    ? "bg-yellow-300 text-black"
                    : "hover:bg-yellow-100"
                }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        ref={containerRef} // attach scroll container ref
        className="flex-1 overflow-y-auto h-screen p-6 space-y-12"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="text-sm font-semibold">
            Minimum Order: <span className="text-red-500">Rs 500.00</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full px-4 py-2 pl-10 focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <button className="px-4 py-2 border rounded hover:bg-green-100">
              Veg
            </button>
            <button className="px-4 py-2 border rounded hover:bg-red-100">
              Non Veg
            </button>
          </div>
        </div>

        {/* Dynamic Sections */}
        {Object.entries(sections).map(([sectionName, items]) => (
          <section
            key={sectionName}
            id={sectionName}
            ref={sectionRefs.current[sectionName]}
          >
            <h2 className="text-xl font-bold mb-4">{sectionName}</h2>
            {items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item) => (
                  <div
                    key={item.title}
                    className="border rounded-lg p-4 shadow-md hover:shadow-lg transition bg-yellow-50"
                  >
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full md:w-40 h-40 object-cover rounded"
                      />
                      <div className="flex-1 space-y-2">
                        <h3 className="text-lg font-bold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-700">{item.description}</p>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-lg font-bold text-red-600">
                            {item.price}
                          </span>
                          <button className="px-4 py-2 bg-yellow-400 text-sm font-semibold rounded hover:bg-yellow-500">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-500 italic">Items coming soon...</div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
};

export default Order;