import React, { useEffect } from "react";
import AOS from "aos";

const MeetingHero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-black dark:text-white duration-300 flex items-center justify-center min-h-screen">
      <div className="container mx-auto flex items-center justify-center px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-10">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
            className="order-1 sm:order-2 flex justify-center"
          >
              <div data-aos="slide-left" data-aos-duration="1500">
         
         <iframe 
         width="100%" 
         height="auto" 
         className="sm:w-[558px] sm:h-[526px] sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] my-5"
         src="https://drive.google.com/file/d/1R3NQztnfIZqAOm9El8rY34L5qJk27gMZ/preview" 
         title="D&amp;G Hotels" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
         referrerPolicy="strict-origin-when-cross-origin" 
         allowFullScreen>
       </iframe>
       
                 </div>
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 text-center sm:text-left">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Meetings & Events
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="text-black dark:text-white"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veritatis explicabo quibusdam quae reprehenderit ab
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              className="rounded-md bg-yellow-900 hover:bg-primary/80 transition duration-500 py-2 px-6 text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingHero;
