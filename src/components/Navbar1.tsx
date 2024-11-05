import React from "react";

const Navbar1 = () => {
  return (
    <div className="bg-white border-b shadow-sm py-1 ">
      <div className="container py-1 mx-auto border-t flex items-center justify-center space-x-6 text-sm font-semibold text-gray-800">
        <div className="">
          <button className="flex items-center space-x-2 text-black">
            <span className="font-bold">ALL CATEGORIES</span>
            <svg
          width="24px"
          height="24px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          className=""
          fillRule="evenodd"
        >
          <path
            className="rui-w4DG7"
            d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
          ></path>
        </svg>
          </button>
        </div>

        <div className="space-x-6">
          <a href="#" className="text-gray-800 hover:text-cyan-500">
            Cars
          </a>
          <a href="#" className="text-gray-800 hover:text-cyan-500">
            Motorcycles
          </a>
          <a href="#" className="text-gray-800 hover:text-cyan-500">
            Mobile Phones
          </a>
          <a href="#" className="text-gray-800 hover:text-cyan-500">
            For Sale: Houses & Apartments
          </a>
          <a href="#" className="text-gray-800 hover:text-cyan-500">
            Scooters
          </a>
          <a href="#" className="text-gray-800 hover:text-cyan-500">
            Commercial & Other Vehicles
          </a>
          <a href="#" className="text-gray-800 hover:text-cyan-500">
            For Rent: Houses & Apartments
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
