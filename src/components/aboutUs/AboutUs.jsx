import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fadeIn">About Our Hotel</h2>
          <p className="text-lg mb-8 animate-fadeIn delay-200 text-black">
            Welcome to our hotel, where luxury meets comfort. Our hotel is located in the heart of the city,
            providing easy access to top attractions and landmarks. We offer top-notch amenities and services
            to ensure your stay is unforgettable.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <div
            className={`w-full md:w-1/2 lg:w-1/3 px-4 mb-8 transition-transform duration-500 ${imageInView ? 'transform-none opacity-100' : 'transform translate-y-10 opacity-0'
              }`}
            ref={imageRef}
          >
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczNuLjKL1CVzJe2tRTMpdPPNM_WUIYpuEHTosmcp8OaIjMC_sFFCq3qeh7ch-8lGCQKz2moczixMSp76g_4zWG3yOynTUywJJg024JTiQXf1NeEROuhRskB2BymvR8J341g_WNdu90vv4PjAQ0gQ-WysQw=w1394-h928-s-no-gm?authuser=0"
              alt="Hotel"
              className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div
            className={`w-full md:w-1/2 lg:w-2/3 px-4 transition-transform duration-500 ${textInView ? 'transform-none opacity-100' : 'transform translate-y-10 opacity-0'
              }`}
            ref={textRef}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="mb-4 text-black">
              Our hotel was established in 1990 with the aim of providing exceptional hospitality and comfort
              to our guests. Over the years, we have evolved and expanded, but our commitment to quality and
              service remains unchanged. We take pride in offering a unique and personalized experience to each
              of our guests.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="list-disc pl-5">
              <li className="mb-2">Prime location in the city center</li>
              <li className="mb-2">Luxurious and comfortable rooms</li>
              <li className="mb-2">Excellent customer service</li>
              <li className="mb-2">Modern amenities and facilities</li>
              <li className="mb-2">Affordable rates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
