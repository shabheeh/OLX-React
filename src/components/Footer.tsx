import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
      {/* Upper Footer Section */}
      <div className='w-full bg-gray-100 py-5'>
        <div className='max-w-6xl mx-auto px-4 grid grid-cols-5 gap-8'>
          {/* Popular Locations */}
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

          {/* Trending Locations */}
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

          {/* About Us */}
          <div className='space-y-3'>
            <span className='font-bold text-sm text-gray-700'>ABOUT US</span>
            <ul className='space-y-2'>
              <li className='text-gray-600 text-[12px] hover:text-gray-800 cursor-pointer'>Tech@OLX</li>
            </ul>
          </div>

          {/* OLX */}
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

          {/* Follow Us */}
          <div className='space-y-4'>
            <span className='font-bold text-sm text-gray-700'>FOLLOW US</span>
            <div className='flex space-x-4'>
              <div className='w-6 h-6'>
              <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M697.376 565.332L719.489 410.898H581.163V310.679C581.163 268.429 600.485 227.246 662.442 227.246H725.334V95.7681C725.334 95.7681 668.257 85.3333 613.689 85.3333C499.764 85.3333 425.303 159.295 425.303 293.194V410.898H298.667V565.332H425.303V938.667H581.163V565.332H697.376V565.332Z"></path></svg>
              </div>
              <div className='w-6 h-6'>
              <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM619.721 291.247c70.784 0 128.384 57.643 128.384 128.469v0 184.619c0 70.784-57.6 128.427-128.384 128.427v0h-215.424c-70.827 0-128.384-57.643-128.384-128.427v0-184.619c0-70.827 57.557-128.469 128.384-128.469v0zM619.721 335.791h-215.424c-46.293 0-83.883 37.632-83.883 83.925v0 184.619c0 46.293 37.589 83.925 83.883 83.925v0h215.424c46.251 0 83.883-37.632 83.883-83.925v0-184.619c0-46.293-37.632-83.925-83.883-83.925v0zM512.021 405.248c63.659 0 115.456 49.195 115.456 109.653 0 59.904-50.688 106.752-115.456 106.752-63.659 0-115.499-49.195-115.499-109.653 0-59.861 50.688-106.752 115.499-106.752zM512.021 444.885c-41.813 0-75.819 31.403-75.819 70.016 0 37.291 35.413 70.016 75.819 70.016s75.776-32.725 75.776-70.016c0-38.613-34.005-70.016-75.776-70.016zM630.857 358.852c23.296 0 43.008 19.712 43.008 43.008s-19.712 43.008-43.008 43.008c-23.296 0-43.008-19.712-43.008-43.008s19.712-43.008 43.008-43.008zM630.857 386.927c-8.661 0-15.019 6.272-15.019 14.933 0 8.704 6.357 14.976 15.019 14.976s14.976-6.272 14.976-14.976c0-8.661-6.315-14.933-14.976-14.933z"></path></svg>

              </div>
              <div className='w-6 h-6'>
              <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M927.74 266.064C908.72 274.497 888.977 281.151 868.718 285.968C891.041 264.755 907.825 238.222 917.294 208.607V208.607C919.997 200.152 910.814 192.841 903.179 197.368V197.368C874.995 214.085 844.637 226.626 812.945 234.647C811.106 235.112 809.209 235.348 807.306 235.348C801.533 235.348 795.921 233.205 791.506 229.315C757.788 199.597 714.421 183.23 669.396 183.23C649.914 183.23 630.243 186.267 610.929 192.257C551.089 210.817 504.917 260.178 490.43 321.079C484.996 343.922 483.524 366.785 486.054 389.034C486.344 391.59 485.135 393.375 484.39 394.212C483.082 395.679 481.226 396.52 479.3 396.52C479.085 396.52 478.864 396.509 478.645 396.489C347.656 384.319 229.536 321.212 146.043 218.796V218.796C141.786 213.572 133.621 214.212 130.228 220.033V220.033C113.877 248.084 105.237 280.166 105.237 312.812C105.237 362.843 125.338 409.992 160.252 444.364C145.57 440.883 131.359 435.4 118.158 428.068V428.068C111.772 424.52 103.914 429.08 103.824 436.385V436.385C102.91 510.71 146.425 576.845 211.613 606.625C210.3 606.656 208.987 606.671 207.672 606.671C197.339 606.671 186.877 605.673 176.579 603.705V603.705C169.387 602.332 163.345 609.154 165.578 616.127V616.127C186.737 682.185 243.614 730.876 311.677 741.932C255.189 779.852 189.406 799.854 120.94 799.854L99.5957 799.841C93.0193 799.841 87.4573 804.128 85.7814 810.498C84.1305 816.772 87.1713 823.39 92.7793 826.652C169.93 871.551 257.931 895.281 347.308 895.281C425.541 895.281 498.722 879.755 564.82 849.138C625.413 821.069 678.959 780.945 723.969 729.881C765.898 682.312 798.686 627.4 821.418 566.67C843.088 508.781 854.542 447.012 854.542 388.04V385.231C854.54 375.762 858.823 366.852 866.294 360.787C894.647 337.767 919.337 310.668 939.676 280.245V280.245C945.046 272.212 936.576 262.144 927.74 266.064V266.064Z"></path></svg>

              </div>
              <div className='w-6 h-6'>
              <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M512 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM382.605 321.86l311.125 190.123-311.125 190.165v-380.288z"></path></svg> 

              </div>
            </div>
            <div className='flex space-x-2'>
              <img src="https://statics.olx.in/external/base/img/playstore.png" alt="Play Store" className="h-6" />
              <img src="https://statics.olx.in/external/base/img/appstore.png" alt="App Store" className="h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer Section */}
      <div className='w-full bg-teal-950 text-white py-8'>
        <div className='max-w-6xl mx-auto px-4'>
          {/* Brand Logos */}
          <div className='flex justify-between items-center mb-6'>
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1" alt="Car Trade" className="h-24 pr-6 border-r-2" />
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="olx" className="h-14" />
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1" alt="carwale" className="h-16" />
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1" alt="bikewale" className="h-16" />
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1" alt="cartrade" className="h-16" />
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1" alt="mobility_outlook" className="h-16" />
          </div>
          
          {/* Copyright Section */}
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

 
              
