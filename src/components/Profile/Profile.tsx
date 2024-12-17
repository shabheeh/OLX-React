
import { useAuth } from "../../Context/AuthContext";

const Profile = () => {

  const auth = useAuth()

  const menuItems: string[] = [
    'My ADS',
    'Buy Business Packages',
    'Bought Packages & Billing',
    'Help',
    'Settings',
    'Install OLX Lite app', 
  ];


  return (
    <div className="relative pt-14">
        <div className="absolute right-4 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {/* Profile Section */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src={ auth?.user?.photoURL || "https://via.placeholder.com/50"}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-medium">{ auth?.user?.displayName }</span>
            </div>

            {/* View Profile Button */}
            <button className="w-full py-1 px-4 border-4 font-bold border-teal-950 bg-teal-950 text-white rounded-[4px] hover:bg-white hover:text-black  transition-colors">
              View and edit profile
            </button>

            {/* Steps Info */}
            <div className="mt-4">
              <div className="text-sm font-medium mb-2">6 steps left</div>
              <div className="flex space-x-1 mb-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex-1 h-2 bg-gray-200 rounded"></div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                We are built on trust. Help one another to get to know each other better.
              </p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">{item}</span>
              </button>
            ))}
            <button onClick={() => auth?.logOut()}
                className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">Logout</span>
              </button>
          </div>
        </div>
    </div>
  );
};

export default Profile;