// Login.tsx
import React, { useContext } from "react";
import mobile_icon from "../../assets/mobile.png";
import google_logo from "../../assets/google_logo.png";
import close from "../../assets/close.svg";
import { AuthContext } from '../../Context/AuthContext'

const Login = ({ setIsOpenLogin }) => {
  const authContext = useContext(AuthContext);

  const { googleSignIn } = authContext;

  return (
    <div className="fixed inset-0 bg-black/70 overflow-hidden flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-sm relative p-6">
        <button onClick={() => setIsOpenLogin(false)}  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <span className="text-xl">
            <img src={close} alt="Close" />
          </span>
        </button>

        <div className="flex justify-center mb-6">
          <span className="text-2xl text-white">
            <img
              src="https://statics.olx.in/external/base/img/loginEntryPointPost.png"
              className="w-24"
              alt="OLX logo"
            />
          </span>
        </div>
        <h2 className="text-md font-semibold text-center mb-11">
          Help us become one of the safest places to buy and sell
        </h2>

        <div className="space-y-4">
          <button className="w-full py-3 px-4 border-2 border-black rounded-[4px] flex items-center justify-start space-x-2">
            <span>
              <img src={mobile_icon} className="w-6" alt="mobile icon" />
            </span>
            <span className="text-sm font-bold">Continue with phone</span>
          </button>

          <button
            onClick={ () => googleSignIn(setIsOpenLogin) }
            className="w-full py-3 px-4 border-2 border-gray-300 rounded-[4px] flex items-center space-x-2 hover:bg-gray-50 transition-colors"
          >
            <img src={google_logo} className="w-6" alt="Google Logo" />
            <span className="text-sm font-medium pl-12">Continue with Google</span>
          </button>

          <div className="relative">
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-black font-semibold">OR</span>
            </div>
          </div>

          <button className="w-full underline text-center text-black font-medium">
            Login with Email
          </button>
        </div>

        {/* Footer Text */}
        <div className="mt-14 text-center text-[12px] text-gray-500">
          <p>All your personal details are safe with us.</p>
          <p className="mt-2">
            If you continue, you are accepting{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              OLX Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
