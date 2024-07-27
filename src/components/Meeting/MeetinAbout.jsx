import React from "react";
import aboutMove from "./images/movve1.png";

const MeetinAbout = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
         
  <iframe 
  width="100%" 
  height="auto" 
  className="sm:w-[558px] sm:h-[526px] sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] my-5"
  src="https://drive.google.com/file/d/1cz6XuCNdShcKrJ-KftCgVWUvbIz_WnVi/preview" 
  title="D&amp;G Hotels" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
  referrerPolicy="strict-origin-when-cross-origin" 
  allowFullScreen>
</iframe>

          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                Discover the D&G Meetings Dream Machine
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide text-black">
              Spark your creativity and explore the future of meetings with Radisson Meetings
              Dream Machine. A digital AI playground where your imagination pushes the boundaries
              </p>
              <p data-aos="fade-up" className="text-black">
              Submit your Dream Machine AI event creation for a chance to
              </p>
              <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-yellow-900 hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetinAbout;
