import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss'; // Ensure this path is correct

const images = [
  { original: 'https://lh3.googleusercontent.com/pw/AP1GczOx8MM2rNJspVxaUXze0iFM5mo0T9YVia5Z8jlL5lebaUkcgUfH0H0qb85bR1r_wvlklqfS-OO9AJF5D6J-jTI-c1mHDCq--yI5iaLHh9rEWctSMS-vcHxIBFlgOUQlZ79e8E4PcZMa6Vl5oYUaI9c-qQ=w1391-h928-s-no-gm?authuser=0', thumbnail: 'room-image1-thumb.jpg' },
  { original: 'https://lh3.googleusercontent.com/pw/AP1GczOx8MM2rNJspVxaUXze0iFM5mo0T9YVia5Z8jlL5lebaUkcgUfH0H0qb85bR1r_wvlklqfS-OO9AJF5D6J-jTI-c1mHDCq--yI5iaLHh9rEWctSMS-vcHxIBFlgOUQlZ79e8E4PcZMa6Vl5oYUaI9c-qQ=w1391-h928-s-no-gm?authuser=0', thumbnail: 'room-image1-thumb.jpg' },
  { original: 'https://lh3.googleusercontent.com/pw/AP1GczOx8MM2rNJspVxaUXze0iFM5mo0T9YVia5Z8jlL5lebaUkcgUfH0H0qb85bR1r_wvlklqfS-OO9AJF5D6J-jTI-c1mHDCq--yI5iaLHh9rEWctSMS-vcHxIBFlgOUQlZ79e8E4PcZMa6Vl5oYUaI9c-qQ=w1391-h928-s-no-gm?authuser=0', thumbnail: 'room-image1-thumb.jpg' },
// Add more images as needed
];

const CustomImageGallery = () => {
  const handleBookNowClick = () => {
    // Handle the booking action here
    
    // You can implement navigation to a booking page or open a booking modal
  };

  return (
    <div className="relative bg-gray-100 shadow-lg rounded-lg overflow-hidden">
      <ImageGallery
        items={images}
        showThumbnails={true}
        showFullscreenButton={true}
        showPlayButton={false}
        useBrowserFullscreen={false}
        showBullets={true}
        showNav={true}
        additionalClass="gallery"
      />
      <div className="absolute top-4 right-4 bg-white bg-opacity-80 p-4 rounded-md shadow-lg">
        <span className="text-2xl text-gray-700 font-semibold">Price: N25,000/night</span>
        
      </div>
    </div>
  );
};

export default CustomImageGallery;

