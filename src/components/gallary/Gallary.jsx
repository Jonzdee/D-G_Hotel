import React, { useState } from 'react';
import './gallery.css';


const images = [
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczOx8MM2rNJspVxaUXze0iFM5mo0T9YVia5Z8jlL5lebaUkcgUfH0H0qb85bR1r_wvlklqfS-OO9AJF5D6J-jTI-c1mHDCq--yI5iaLHh9rEWctSMS-vcHxIBFlgOUQlZ79e8E4PcZMa6Vl5oYUaI9c-qQ=w1391-h928-s-no-gm?authuser=0', category: 'All categories' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczO0RXHlD1DKcAi_I2AEfTYva7ZdCnEtqAmmYutPt8rjsHMdJR6LXl7BxnVTgZ5Ys623gpWA5iXcNvw1U3R6_y5nSPQmPFeilyFjE2fmCxCpfAdu59Azkun5Q0jR07kTqnMvhFKjHarcufN8t20WPfDrlQ=w1391-h928-s-no-gm?authuser=0', category: 'Event Hall' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczN9gxsBmpTaDcl6kJ3htmwplEw7InY3-BWX2BlAUupxwt9jKM7VhbE9jM-e3JN2rZ8h76JeBCFM4QvXuv3T9bN35ZTWzX1jXDpPnAX-ksenNKjAKyNjxbE7O7QZMlNdQT4x0DSwFYYBJG5OiGMjaNLLiQ=w1394-h928-s-no-gm?authuser=0', category: 'Event Hall' },
  { src: 'https://i.ibb.co/Mf6TDLy/gym6.jpg', category: 'Gym' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczP-9jCrZ_vKugA0KwPWEwu5k2JNldIwmqeT5Xh-WaOKd7tBRK3sHP8Ak1mu7OV3NvnoHhpycfU5Kyk84y4OOwsBtM9WRDVchSFTgjbA41gKdKbfa1G7RSdsOHOgCOk3UbowKvk_s-JHnNsAAsZYYomPWQ=w1391-h928-s-no-gm?authuser=0', category: 'Pool' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczN-E6v2fuOAARtJAI9x5tqME9DO_t1nHqN2BFi_g_QY9-CXWx6b8yOnPogMdgT6HK3-oj7OP8vHKjK77KhAzMGBbLbrEzFhct6bpMzbsQsX8NJzlW8LnNig46GkZggxxdNwMMtI03tkueF8g-qf3ysQrg=w1391-h928-s-no-gm?authuser=0', category: 'Cool Bar' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczNIgppsG46jwAaqusKC9DK7HaqkPAnXJdRclg_-vEFZ6jyyUw_6SurBkkzvqHHZw9G4qs1vJ6RkC6t-MImJ0lHpZ583Q0OBarGkCDgCJQWCnMi83hB-lX_gmaSz6uH2mH0LxSik3VhnlQDDyI5CkV5Jgg=w1391-h928-s-no-gm?authuser=0', category: 'Event Hall' },
  { src: 'https://i.ibb.co/mDGN4Hx/gym1.jpg', category: 'Gym' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczNLzzZngN33pXiQaS_dmqknA3o1lLrhRG-JvMSK1jgq1lpZy9XjOG3fUfKpLpWkD2UOcnHIAQ_YS2wRug1ZILkX5xdg2EwwyK0tZfjqRoFumfRVHMbTsgS-J6scL4LCsnzuGoiFHRNhDNBCYDw1mfj1yA=w1391-h928-s-no-gm?authuser=0', category: 'Pool' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczOTkOb-YB1AE5t9Z_hfz9lb9oLSuW28FGLStzEJWAXmgOnV9Wfa367W2OXMlOU-kjLt-aUwkPLcbYLHa1Cd7X8TOaIRNn96-JwM2AR_VM58oVGo4zbOY7rcdx9N40LaXgBIF9z6vRX1Y4GK4ednh2L6fQ=w1395-h928-s-no-gm?authuser=0', category: 'Cool Bar' },
  { src: 'https://lh3.googleusercontent.com/pw/AP1GczPfW_Lf_U607h3ZvI6updqwNtJ6cILdYiKFSOOFdTjdrhuXJ2ccuGQobaLxCajQ934rY4iWCNDdypMAR5Yff9XryoVx8l1stWkPUffX-zma3Bnr22uNOLeqNcE7iZypDIOSsc4N7-bMnMJcZPcdiB4YCQ=w1391-h928-s-no-gm?authuser=0', category: 'Event Hall' },
  { src: 'https://i.ibb.co/SVnbCk7/gym3.jpg', category: 'gym' }
];

const categories = ['All categories', 'Event Hall', 'Gym', 'Pool', 'Cool Bar'];	

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
    <div >
      <h1 className='text-4xl font-medium text-center'>Our Gallery</h1>
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
      <div className="masonry-grid grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
