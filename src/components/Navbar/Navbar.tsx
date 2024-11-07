import React, { useState } from "react";
import sell_button from "../../assets/sell_btn.png";
import olx_icon from "../../assets/olx.png"
import arrow from "../../assets/arrow.png"
import location_icon from "../../assets/location.png"
import lens from "../../assets/lens.png"
import gps from "../../assets/gps.png"
import lens_white from "../../assets/lens_white.png"
import messenger from "../../assets/messenger.png"
import bell from "../../assets/bell.png"
import Profile from "../Profile/Profile";

import Navbar1 from "./Navbar1";
import Login from "../Login/Login";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

  const auth = useAuth()
  const navigate = useNavigate()

  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false)

  const [locationState, setLocationState] = useState(false);

  const [location, setLocation] = useState('Search city, area or locality')


  const handleSell = () => {
   if(auth?.user) {
    navigate('/sell')
   }else {
    setIsOpenLogin(true)
   }
  };


  return (
    <>
    <div className="flex px-3 pt-2 bg-gray-100 w-screen items-center space-x-4">

      <div>
        <a href="">
          <img src={olx_icon} className="w-12 h-12" alt="" />
        </a>
      </div>
   
      <div className="relative ">
        <div className="flex h-[48px] bg-white items-center border-2 border-black rounded-[4px] px-2 w-full space-x-2">
          <img src={lens} className="w-5" alt="" />

          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 text-md outline-none text-black"
            value={location}
          />

          <span>
            <button onClick={() => setLocationState((prevState) => !prevState) } className="align-middle">
              <img 
              className="w-8 h-6"
              src={arrow} 
              style={{
                  transform: locationState ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.4s ease",
                }} 
                alt="" />
            </button>
          </span>
        </div>

                {/* location */}
        <div
          className={`absolute w-full mt-2 bg-white ${
            locationState ? "" : "hidden"
          } rounded-sm shadow-lg z-50`}
        >
          <ul className="max-h-[350px] overflow-y-auto">
            <li className="p-4 border-b">
              <div className="flex items-center space-x-3 text-blue-600">
                <div>
                  <span>
                    <img className="w-10" src={location_icon} alt="" />
                  </span>
                </div>
                <div>
                  <span className="font-bold">Use current location</span>
                  <p className="text-sm">
                    Location blocked. Check browser/phone settings.
                  </p>
                </div>
              </div>
            </li>

            <li className="p-4 border-b">
              <div className="mb-2">
                <span className="text-xs font-semibold text-gray-500">
                  RECENT LOCATION
                </span>
              </div>
              <ul className="space-y-2">
                <li className="hover:bg-gray-50 p-2 rounded cursor-pointer flex">
                  <span className="mr-3">
                    <img src={gps} className="w-6 text-gray-400" alt="" />
                  </span>
                  India
                </li>
              </ul>
            </li>
            <li className="p-4">
              <div className="mb-2">
                <span className="text-xs font-semibold text-gray-500">
                  POPULAR LOCATIONS
                </span>
              </div>
              <ul className="space-y-2">
                {["Kerala", "Banglore", "Chenni", "Pune", "Mumbai"].map(
                  (location) => (
                    <li
                      key={location}
                      className="hover:bg-gray-50 p-2 rounded flex cursor-pointer"
                      onClick={() => (setLocation(location), setLocationState((prevState) => !prevState))}

                    >
                      <span className="mr-3">
                      <img src={gps} className="w-6 text-gray-400" alt="" />
                      </span>
                      {location}
                    </li>
                  )
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* items search */}
      <div className=" flex">
        <div className="flex bg-white h-[48px] items-center w-[90vh] border-2 border-black rounded-l-[4px] px-2 py-1 space-x-2">
          <div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 text-sm outline-none text-black"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="bg-black h-[48px] px-3 py-2 flex items-center rounded-r-[4px]">
          <img src={lens_white} className="w-6" alt="" />
        </div>
      </div>

      {/* language */}

      <div className="">
        <div className="flex items-center py-1 space-x-2">
          <span className="font-bold text-sm">ENGLISH</span>
          <button className="align-middle">
          <img 
              className="w-6 h-6"
              src={arrow} 
              
                alt="" />
          </button>
        </div>
      </div>

      <div>
        { auth?.user ? <div className="flex items-center space-x-5">
          <div>
            <button>
              <img src={messenger} className="w-6" alt="" />
            </button>
          </div>
          <div>
            <button>
              <img src={bell} className="w-6" alt="" />
            </button>
          </div>
          <div onClick={() => {setIsOpenProfile((prevState) => !prevState)}} className="flex space-x-2 items-center cursor-pointer">
          <figure
            className="w-[35px] h-[35px] bg-cover bg-center rounded-3xl"
            style={{
            backgroundImage: `url(${auth?.user?.photoURL || 'https://via.placeholder.com/35'})`,
            }}
          ></figure>


            <img 
              className="w-6 h-6"
              src={arrow} 
              
                alt="dp" />
          </div>
          { auth.user && isOpenProfile && <Profile />}
          
        </div> : <div  onClick={() => setIsOpenLogin(true)} className="mx-5">
            <p  className="font-semibold underline cursor-pointer" >
                Login
            </p>
        </div>}
        { !auth?.user && isOpenLogin && <Login setIsOpenLogin={ setIsOpenLogin } />} 
      </div>
      <div onClick={ handleSell }>
        <img className="w-[130px]" src={sell_button} alt="" />
      </div>
      
    </div>
    <Navbar1 />
    </>
  );
};

export default Navbar;
