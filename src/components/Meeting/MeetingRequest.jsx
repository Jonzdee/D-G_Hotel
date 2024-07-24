import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from 'react-router-dom'; 

const MeetingHero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="dark:bg-black dark:text-white duration-300 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-10">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2 flex justify-center"
          >
            <div className="relative bg-current max-h-[800px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] p-10 bg-white rounded-lg flex flex-col items-center gap-4">
              <button
                className="rounded-md bg-yellow-900 hover:bg-yellow-950 transition duration-500 py-2 px-6 text-white"
                onClick={() => { /* Your contact us logic here */ }}
              >
                Contact Us
              </button>
              <button
                className="rounded-md bg-yellow-900 hover:bg-yellow-950 transition duration-500 py-2 px-6 text-white"
                onClick={() => { /* request an event proposal logic here */ }}
              >
                Request an Event Proposal
              </button>
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
            <p data-aos="fade-up"
              data-aos-delay="1000"
              className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veritatis explicabo quibusdam quae reprehenderit ab{" "}
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
  );
};

export default MeetingHero;
