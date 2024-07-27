import React from "react";
import pic1 from "./images/eventShow1.jpg";
import pic2 from "./images/eventShow2.jpg"; // Ensure this is the correct image path
import pic3 from "./images/eventShow3.jpg"; // Ensure this is the correct image path

const skillsData = [
  {
    name: "Profesional",
    icon: pic1,
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Personal",
    icon: pic2,
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Memorable",
    icon: pic3,
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];

const MeetingServices = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why choose D & G Meetings?
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">
                  <img src={skill.icon} alt={skill.name} className="text-5xl text-primary group-hover:text-black duration-300" />
                </div>
                <h1 className="text-2xl font-bold text-black">{skill.name}</h1>
                <p className="text-black">{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingServices;
