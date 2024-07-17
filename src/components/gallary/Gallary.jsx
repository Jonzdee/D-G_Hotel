import React, { useState } from 'react';
import './gallery.css';

const images = [
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg', category: 'All categories' },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg', category: 'Shoes' },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg', category: 'Bags' },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg', category: 'Electronics' },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg', category: 'Gaming' },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg', category: 'Shoes' },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg', category: 'Bags' },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg', category: 'Electronics' },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg', category: 'Gaming' },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg', category: 'Shoes' },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg', category: 'Bags' },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg', category: 'Electronics' }
];

const categories = ['All categories', 'Shoes', 'Bags', 'Electronics', 'Gaming'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredImages = selectedCategory === 'All categories' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            type="button"
            className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${
              selectedCategory === category ? 'text-blue-700 border-blue-600 hover:bg-blue-700 dark:border-blue-500 dark:text-blue-500' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="masonry-grid">
        {filteredImages.map((image, index) => (
          <div key={index} className="masonry-item" onClick={() => handleImageClick(index)}>
            <img className="h-auto max-w-full rounded-lg cursor-pointer" src={image.src} alt="" />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <button className="absolute top-5 right-5 text-white" onClick={closeModal}>Close</button>
          <button className="absolute left-5 text-white" onClick={handlePrev}>Previous</button>
          <img className="max-w-full max-h-full rounded-lg" src={filteredImages[selectedImageIndex].src} alt="" />
          <button className="absolute right-5 text-white" onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
