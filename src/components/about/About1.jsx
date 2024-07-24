import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faLightbulb, faMedal } from '@fortawesome/free-solid-svg-icons';

const About1 = () => {
  return (
    <div className="bg-gray-50 py-16 relative">
      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{
        //    backgroundImage: ' linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://dandghotels.com/wp-content/uploads/2023/05/gallery-1-605x465.jpg")',
        //    backgroundSize: 'cover',
        //    backgroundPosition: 'center',
        //    filter: 'blur(1px)', /* Adjust blur radius as needed */
        //    zIndex: -1 /* Ensure the image stays behind the content */  
        }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5 }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczNuLjKL1CVzJe2tRTMpdPPNM_WUIYpuEHTosmcp8OaIjMC_sFFCq3qeh7ch-8lGCQKz2moczixMSp76g_4zWG3yOynTUywJJg024JTiQXf1NeEROuhRskB2BymvR8J341g_WNdu90vv4PjAQ0gQ-WysQw=w1394-h928-s-no-gm?authuser=0"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-black mb-4">
            About Us
          </h2>
          <p className="text-lg leading-6 text-black mb-4">
            We are dedicated to providing the best service in the industry.
            Our mission is to deliver innovative and practical solutions that
            meet our clients' needs. Integrity, innovation, and excellence are
            at the heart of everything we do.
          </p>
          <p className="text-lg leading-6 text-black mb-4">
            Our team consists of experienced and dedicated professionals who
            are passionate about their work. We believe in teamwork and
            collaboration to achieve our goals and exceed customer
            expectations.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
      <div className="relative max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon icon={faHandHoldingHeart} className="text-4xl text-blue-500 mr-4" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h4>
              <p className="text-gray-600">
                We uphold the highest standards of integrity in all of our actions.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon icon={faLightbulb} className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h4>
              <p className="text-gray-600">
                We foster a culture of creativity and continuous improvement.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon icon={faMedal} className="text-4xl text-green-500 mr-4" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in everything we do.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About1;
