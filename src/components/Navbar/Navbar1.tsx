
import arrow from "../../assets/arrow.png"


const Navbar1 = () => {
  return (
    <div className="bg-white border-b shadow-sm pb-1 pt-[75px] ">
      <div className=" py-1 pl-32 border-t flex items-center space-x-6 text-sm font-semibold text-gray-800">
        <div className="">
          <button className="flex items-center space-x-2 text-black">
            <span className="font-bold">ALL CATEGORIES</span>
            <img 
              className="w-6 h-6"
              src={arrow} 
              
                alt="" />
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
