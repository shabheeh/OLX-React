import React from 'react'
import facebook from '../../assets/facebook.png'
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"
import play from "../../assets/play.png"



const Footer = () => {
  return (
    <div className='w-full'>
      <div className='w-full bg-gray-100 py-5'>
        <div className='max-w-6xl mx-auto px-4 grid grid-cols-5 gap-8'>
          <div className='space-y-3'>
            <span className='font-bold text-sm text-gray-700'>
              POPULAR LOCATIONS
            </span>
            <ul className='space-y-2'>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Kolkata</li>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Mumbai</li>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Chennai</li>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Pune</li>
            </ul>
          </div>

          <div className='space-y-3'>
            <span className='font-bold text-sm text-gray-700'>
              TRENDING LOCATIONS
            </span>
            <ul className='space-y-2'>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Bhubaneshwar</li>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Hyderabad</li>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Chandigarh</li>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Nashik</li>
            </ul>
          </div>

          <div className='space-y-3'>
            <span className='font-bold text-sm text-gray-700'>ABOUT US</span>
            <ul className='space-y-2'>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Tech@OLX</li>
            </ul>
          </div>

          <div className='space-y-3'>
            <span className='font-bold text-sm text-gray-700'>
              OLX
            </span>
            <ul className='space-y-2'>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Blog</li>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Help</li>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Sitemap</li>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Legal & Privacy Information</li>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Vulnerability Disclosure Program</li>
            </ul>
          </div>

          <div className='space-y-4'>
            <span className='font-bold text-sm text-gray-700'>FOLLOW US</span>
            <div className='flex space-x-4'>
              <div className='w-6 h-6'>
                <img src={facebook} alt="" />
              </div>
              <div className='w-6 h-6'>
                <img src={instagram} alt="" />
              </div>
              <div className='w-6 h-6'>
                <img src={twitter} alt="" />
              </div>
              <div className='w-6 h-6'>
                <img src={play} alt="" />
              </div>
            </div>
            <div className='flex space-x-2'>
              <img src="https://statics.olx.in/external/base/img/playstore.png" alt="Play Store" className="h-6" />
              <img src="https://statics.olx.in/external/base/img/appstore.png" alt="App Store" className="h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-teal-950 text-white py-8'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex justify-between items-center mb-6'>
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1" alt="Car Trade" className="h-24 pr-6 border-r-2" />
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="olx" className="h-14" />
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1" alt="carwale" className="h-16" />
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1" alt="bikewale" className="h-16" />
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1" alt="cartrade" className="h-16" />
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1" alt="mobility_outlook" className="h-16" />
          </div>

          <div className='flex justify-between items-center text-sm'>
            <span className='text-gray-300 hover:text-white cursor-pointer'>Help - Sitemap</span>
            <span className='text-gray-300'>All rights reserved © 2006-2024 OLX</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

 
              
