import React from 'react';

const Login = () => {
  return (
    <div className="fixed inset-0 bg-black/70 overflow-hidden flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-md relative p-6">
        <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <span className="text-xl">×</span>
        </button>


        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-2xl text-white">👤</span>
            </div>
          </div>
        </div>
        <h2 className="text-md font-semibold text-center mb-8">
          Keep all your favourites in one place.
        </h2>

        <div className="space-y-4">

          <button className="w-full py-3 px-4 border-2 border-black rounded-[4px] flex items-center justify-start space-x-2 ">
          <span>
            <svg width="22" height="22" viewBox="0 0 1024 1024" data-aut-id="icon" className="_2oC8g" fill-rule="evenodd"><path className="rui-w4DG7 _3Z_D3" d="M743.68 85.333l66.987 67.84v701.227l-63.573 84.267h-471.253l-62.507-85.333v-700.373l67.627-67.627h462.72zM708.053 170.667h-391.893l-17.493 17.707v637.653l20.053 27.307h385.92l21.333-27.52v-637.653l-17.92-17.493zM512 682.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667z"></path></svg>
            </span>
            <span className="text-sm font-bold">Continue with phone</span>
          </button>

          {/* Google Login */}
          <button className="w-full py-3 px-4 border-2 border-gray-300 rounded-[4px] flex items-center space-x-2 hover:bg-gray-50 transition-colors">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24" className="flex items-start">
            <g>
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
            </g>
          </svg>

            <span className="text-sm font-medium pl-12">Continue with Google</span>
          </button>


          <div className="relative">
          
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-black font-bold">OR</span>
            </div>
          </div>

          <button className="w-full underline text-center text-black font-medium">
            Login with Email
          </button>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-center text-[12px] text-gray-500">
          <p>All your personal details are safe with us.</p>
          <p className="mt-2">
            If you continue, you are accepting{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              OLX Terms and Conditions
            </a>{' '}
            and{' '}
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