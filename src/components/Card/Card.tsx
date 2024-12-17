import React, { useState, useEffect, useContext } from 'react';
import heart_icon from '../../assets/heart_icon.png';
import { db } from '../../firebase';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface Ad {
  id: string;
  price: number;
  title: string;
  description: string;
  location: string;
  postedAt: string;
  imageUrl?: string;
}

const Card = () => {
  const [ads, setAds] = useState<Ad[]>([]);

  const auth = useAuth()
  const navigate = useNavigate()

  const handleSellClick = () => {
    if(auth?.user) {
      navigate('/sell')
    }else {
      toast.error('Login to start Selling')
    }
  }

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ads"));
        const adsData: Ad[] = querySnapshot.docs.map((doc: DocumentData) => ({
          ...doc.data(),
          id: doc.id,
        })) as Ad[];
        setAds(adsData);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, []);


  return (
    <div className="grid grid-cols-4 max-w-[1200px] my-8 gap-2 mx-auto">
  {ads.map((ad:Ad, index) => (
    <React.Fragment key={ad.id}>
      {index === 5 && (
          <div onClick={ handleSellClick} className="w-72 bg-blue-500 mx-auto flex cursor-pointer flex-col justify-between border-2 rounded-md overflow-hidden" > 
            <div className="relative flex flex-col items-center p-4">
              <h6 className="text-white text-lg font-bold">Want to see your stuff here?</h6>
              <p className="text-white text-sm text-center mt-2">
                Make some extra cash by selling things in your community. Go on, it's quick and easy.
              </p>
            </div>
            <div className="p-4 flex justify-center">
              <button className=" text-white w-full border-2 border-white text-sm px-4 py-2 rounded-sm  font-semibold hover:border-3">
                Start Selling
              </button>
            </div>
          </div>
      )}

      <div className="w-72 mx-auto border-2 rounded-md overflow-hidden">
        <div className="relative flex justify-center">
          <img
            src={ad.imageUrl || "https://via.placeholder.com/300x200"}
            alt={ad.title}
            className="h-48 p-2"
          />
          <button className="absolute top-2 m-1 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
            <img className="w-5" src={heart_icon} alt="Favorite" />
          </button>
        </div>
        <div className="p-2">
          <p className="text-xl font-bold text-gray-800">₹ {ad.price}</p>
          <p className="text-gray-600">{ad.title}</p>
          <p className="text-gray-600 text-sm">{ad.description}</p>

          <div className="flex justify-between items-center align-bottom text-sm text-gray-500 mt-1">
            <span>{ad.location}</span>
            <span>{ad.postedAt}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  ))}
</div>



  );
};

export default Card;
