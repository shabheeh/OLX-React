import React from "react";
interface CategoryModalProps {
  onClose: () => void;
  onCategorySelect: (category: string) => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({ onClose, onCategorySelect }) => {
    const categories: string[] = [
        'Cars',
        'Properties',
        'Mobile Phones',
        'Jobs',
        'Bikes',
        'Furniture',
        'Fashion',
    ];
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
          {/* Modal Header */}
          <div className="border-b border-gray-200 p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Choose Category</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
  
          {/* Modal Content */}
          <div className="p-4 overflow-y-auto max-h-[calc(80vh-120px)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onCategorySelect(category);
                    onClose();
                  }}
                  className="flex flex-col items-start p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-medium text-gray-800">{ category }</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
  
          {/* Modal Footer */}
          <div className="border-t border-gray-200 p-4">
            <button
              onClick={onClose}
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };