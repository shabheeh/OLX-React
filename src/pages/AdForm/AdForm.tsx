import { useState, ChangeEvent, FormEvent } from 'react';
import { CategoryModal } from '../../components/CategoryModal/CategoryModal';
import { toast } from 'react-toastify';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

interface FormData {
  price: number | null;
  title: string;
  description: string;
  location: string;
  postedAt: string;
  imageUrl?: string;
}

interface UploadStatus {
  isLoading: boolean;
  error: string | null;
}

const AdForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Cars');
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    price: null,
    location: '',
    postedAt: '',
    imageUrl: '',
  });

  const navigate = useNavigate()

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>({
    isLoading: false,
    error: null,
  });

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof FormData) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePhotoAdd = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadStatus({ isLoading: true, error: null });

    try {
      const previewURL = URL.createObjectURL(file);
      setPreviewImage(previewURL);

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'dih8zu3u');
     
      const response = await fetch(`https://api.cloudinary.com/v1_1/dvhwjy5mn/image/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();

      setFormData((prev) => ({
        ...prev,
        imageUrl: data.secure_url,
        
      }));

      setUploadStatus({ isLoading: false, error: null });
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus({
        isLoading: false,
        error: 'Failed to upload image. Please try again.',
      });
      setPreviewImage(null);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    setFormData((prev) => ({
      ...prev,
      imageUrl: '',
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.title.trim()) {
      toast.error('Please enter a title');
      return false;
    }
    if (!formData.description.trim()) {
      toast.error('Please enter a description');
      return false;
    }
    if (!formData.price) {
      toast.error('Please enter a price');
      return false;
    }
    if (!formData.imageUrl) {
      toast.error('Please upload a photo');
      return false;
    }
    if (isNaN(Number(formData.price))) {
      toast.error('Price must be a valid number');
      return false;
    }
    if(!formData.location) {
      toast.error('Please enter a location');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const loadingToast = toast.loading('Submitting your ad...');

      const adData = {
        ...formData,
        postedAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      };

      await addDoc(collection(db, 'ads'), adData);

      toast.update(loadingToast, {
        render: 'Ad posted successfully!',
        type: 'success',
        isLoading: false,
        autoClose: 2000,
      });

      setFormData({
        title: '',
        description: '',
        price: null,
        location: '',
        postedAt: '',
        imageUrl: '',
      });
      setPreviewImage(null);
      navigate('/')

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to post ad. Please try again.');
    }
  };



  return (
    <div className="min-h-screen bg-white">
      <nav className="h-16 border-b bg-gray-50 border-gray-200 px-4 flex items-center">
        <button onClick={() => navigate('/')} className="text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">POST YOUR AD</h1>
          <div className="border border-gray-200 rounded-lg">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-800 mb-4">SELECTED CATEGORY</h2>
              <div className="flex items-center text-gray-600 text-sm">
                <span>Category</span>
                <span className="mx-2">/</span>
                <span>{selectedCategory}</span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="ml-4 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  Ad title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  value={formData.title}
                  onChange={(e) => handleInputChange(e, 'title')}
                />
                <p className="text-gray-500 text-sm mt-1">
                  Mention the key features of your item (e.g. brand, model, age, type)
                  <span className="float-right">0 / 70</span>
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32"
                  value={formData.description}
                  onChange={(e) => handleInputChange(e, 'description')}
                />
                <p className="text-gray-500 text-sm mt-1">
                  Include condition, features, and reason for selling
                  <span className="float-right">0 / 4096</span>
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  value={formData.location}
                  onChange={(e) => handleInputChange(e, 'location')}
                />
                <p className="text-gray-500 text-sm mt-1">
                  Mention the key features of your item (e.g. brand, model, age, type)
                  <span className="float-right">0 / 70</span>
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">SET A PRICE</h2>
                <label className="block text-gray-700 mb-2">
                  Price <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">₹</span>
                  <input
                    type="number"
                    className="w-full p-3 pl-8 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    value={formData.price || ''}
                    onChange={(e) => handleInputChange(e, 'price')}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4">UPLOAD PHOTO</h2>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg h-32 cursor-pointer hover:border-gray-400">
                    <input type="file" accept="image/*" onChange={handlePhotoAdd} className="hidden" />
                    <div className="text-gray-500 text-center">
                      
                      <p>Tap to upload a photo</p>
                    </div>
                  </label>

                  {previewImage && (
                    <div className="relative border rounded-lg overflow-hidden h-32">
                      <img src={previewImage} alt="Preview" className="object-cover w-full h-full" />
                      <button
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <button
                onClick={handleSubmit}
                disabled={uploadStatus.isLoading}
                className="w-full p-3 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                {uploadStatus.isLoading ? 'Uploading...' : 'Post Ad'}
              </button>
              {uploadStatus.error && (
                <p className="text-red-500 text-center mt-2">{uploadStatus.error}</p>
              )}
            </div>
          </div>
      </main>

      {isModalOpen && <CategoryModal onClose={() =>setIsModalOpen(false)} onCategorySelect={handleCategorySelect} />}
    </div>
  );
};

export default AdForm;
