import React from "react";
import event1 from "./images/eventFeatures1.jpg";
import event2 from "./images/eventFeatures2.jpg";
import event3 from "./images/eventFeatures3.jpg";

const carList = [
  {
    name: "PERSONAL",
    price: 100,
    image: event1,
    aosDelay: "0",
  },
  {
    name: "PROFESIONAL",
    price: 140,
    image: event2,
    aosDelay: "500",
  },
  {
    name: "MEMORABLE",
    price: 100,
    image: event3,
    aosDelay: "1000",
  },
];

const MeetingList = () => {
  return (
    <div className="pb-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-center"
        >
          Our Featured Meeting Destinations
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" className="text-sm pb-10 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>
        {/* Meetings listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-[120px] object-cover rounded-md group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#" className="text-primary hover:underline">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of meetings listing */}
        <div className="grid place-items-center mt-8">
          <button
              data-aos="fade-up"
              data-aos-delay="1500"
              className="rounded-md bg-yellow-900 hover:opacity-80 transition duration-500 py-2 px-6 text-black"
            >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingList;
