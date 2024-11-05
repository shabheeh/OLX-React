import React from "react";
import sell_button from "../assets/sell_btn.png";
const Navbar = () => {
  return (
    <div className="flex px-3 pt-2 bg-gray-100 w-screen items-center space-x-4">
      {/* Olx icon */}
      <div>
        <a href="">
          <svg
            width="48px"
            height="48px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
            className=""
            fillRule="evenodd"
          >
            <path
              className="rui-w4DG7"
              d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
            ></path>
          </svg>
        </a>
      </div>
      {/* Olx icon / */}

      {/* Location search */}
      <div className="relative ">
  <div className="flex h-[48px] bg-white items-center border-2 border-black rounded-[4px] px-2 w-full space-x-2">
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 1024 1024"
      data-aut-id="icon"
      className=""
      fillRule="evenodd"
    >
      <path
        className="rui-w4DG7"
        d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"
      ></path>
    </svg>

    <input
      type="text"
      id="search-navbar"
      className="block w-full p-2 text-sm outline-none text-black"
      placeholder="Search..."
    />

    <span>
      <button className="align-middle">
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
    </span>
  </div>

  {/* Location dropdown */}
  <div className="absolute w-full mt-2 bg-white hidden rounded-lg shadow-md z-50">
    <ul className="max-h-[350px] overflow-y-auto">
      {/* Current Location Section */}
      <li className="p-4 border-b">
        <div className="flex items-center space-x-3 text-blue-600">
          <div>
            <span>
              <svg
                width="28"
                height="28"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="text-blue-600"
              >
                <path d="M640 512c0 70.692-57.308 128-128 128s-128-57.308-128-128c0-70.692 57.308-128 128-128s128 57.308 128 128zM942.933 469.333h-89.6c-17.602-157.359-141.307-281.064-297.136-298.527l-1.531-0.139v-89.6h-85.333v89.6c-157.359 17.602-281.064 141.307-298.527 297.136l-0.139 1.531h-89.6v85.333h89.6c17.602 157.359 141.307 281.064 297.136 298.527l1.531 0.139v89.6h85.333v-89.6c157.359-17.602 281.064-141.307 298.527-297.136l0.139-1.531h89.6zM512 772.267c-143.741 0-260.267-116.525-260.267-260.267s116.525-260.267 260.267-260.267c143.741 0 260.267 116.525 260.267 260.267v0c0 143.741-116.525 260.267-260.267 260.267v0z"></path>
              </svg>
            </span>
          </div>
          <div>
            <span className="font-bold">Use current location</span>
            <p className="text-sm">Location blocked. Check browser/phone settings.</p>
          </div>
        </div>
      </li>

      {/* Recent Location Section */}
      <li className="p-4 border-b">
        <div className="mb-2">
          <span className="text-xs font-semibold text-gray-500">RECENT LOCATION</span>
        </div>
        <ul className="space-y-2">
          <li className="hover:bg-gray-50 p-2 rounded cursor-pointer flex">
            <span className="mr-3">
              <svg
                width="26"
                height="26"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="text-gray-500"
              >
                <path
                  className="rui-w4DG7"
                  d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                ></path>
              </svg>
            </span>
            India
          </li>
        </ul>
      </li>

      {/* Popular Locations Section */}
      <li className="p-4">
        <div className="mb-2">
          <span className="text-xs font-semibold text-gray-500">POPULAR LOCATIONS</span>
        </div>
        <ul className="space-y-2">
          {['Kamorta', 'Bakultala', 'Car Nicobar', 'Diglipur'].map((location) => (
            <li
              key={location}
              className="hover:bg-gray-50 p-2 rounded flex cursor-pointer"
            >
              <span className="mr-3">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="text-gray-500"
                >
                  <path className="rui-w4DG7" d="..." />
                </svg>
              </span>
              {location}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  </div>
</div>

      {/* Location search / */}

      {/* items search */}
      <div className=" flex">
        <div className="flex bg-white h-[48px] items-center w-[100vh] border-2 border-black rounded-l-[4px] px-2 py-1 space-x-2">
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
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
            fill="white"
            fillRule="evenodd"
          >
            <path
              className="rui-o3KKi"
              d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"
            ></path>
          </svg>
        </div>
      </div>
      {/* items search / */}

      {/* language */}

      <div className="">
        <div className="flex items-center py-1 space-x-2">
          <span className="font-bold text-sm">ENGLISH</span>
          <button className="align-middle">
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
      </div>
      {/* language / */}

      {/* user Info and sell */}
      <div>
      <div className="flex items-center space-x-5">
        <div>
          <button
            type="button"
            className="rui-3a8k1 rui-ByR9G"
            role="button"
            tabIndex="0"
            data-aut-id=""
            title="chat"
          >
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
                d="M469.333 171.119c-164.693 0-298.667 134.684-298.667 300.25v359.529l108.907-54.753 19.093-4.525h256c164.693 0 298.667-134.684 298.667-300.25s-133.973-300.25-298.667-300.25h-85.333zM147.093 938.667l-61.76-38.368v-428.929c0-212.856 172.267-386.036 384-386.036h85.333c211.733 0 384 173.18 384 386.036s-172.267 386.036-384 386.036h-245.931l-161.643 81.261z"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="rui-3a8k1 rui-ByR9G"
            role="button"
            tabIndex="0"
            data-aut-id="badge"
            title="notifications"
          >
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
                d="M730.855 763.955h-435.559c-0.833-87.945-2.676-279.627-2.676-289.496 0-119.351 98.911-216.463 220.498-216.463s220.455 97.112 220.455 216.463c0 10-1.843 201.594-2.72 289.496v0zM819.282 748.603c0.92-93.341 2.062-266.38 2.062-274.144 0-141.589-98.692-260.545-231.64-294.319 2.192-7.237 3.684-14.782 3.684-22.765 0-44.345-35.969-80.27-80.27-80.27-44.345 0-80.27 35.923-80.27 80.27 0 7.983 1.491 15.483 3.684 22.765-132.948 33.731-231.64 152.687-231.64 294.319 0 7.721 1.14 182.339 2.019 276.030l-90.27 36.581 0.92 64.609h316.032c3.729 40.881 37.679 73.031 79.523 73.031s75.794-32.151 79.523-73.031h312.962l1.754-64.523-88.078-38.556z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex space-x-2 items-center">
          <figure
            className="w-[35px] h-[35px] bg-cover bg-center rounded-3xl"
            style={{
              backgroundImage:
                "url('https://apollo.olx.in:443/v1/files/mp7zo2j884ks-IN/image;s=120x120')",
            }}
          ></figure>
          <svg
            width="20px"
            height="20px"
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
        </div>
        {/* <div>
            <a className="font-semibold underline" href="">
                Login
            </a>
        </div> */}
      </div>
      </div>
        <div>
        <img className="w-[130px]" src={sell_button} alt="" />
        </div>

    </div>
  );
};

export default Navbar;
