import React from "react";

import img1 from "../../images/appetizer-1.jpg";
import img2 from "../../images/appetizer-1.jpg";
import img3 from "../../images/BREAKFAST.jpg";
import img4 from "../../images/grills.jpg";
import img5 from "../../images/main-course.jpg";
import img6 from "../../images/NIGERIA-PROTEIN.jpg";
import img7 from "../../images/pasta-1.jpg";
import img8 from "../../images/pasta.jpg";

import DishesCard from "../restaurant/layout/DishesCard";

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 ">
      <h1 className="text-5xl font-bold text-center pt-24 pb-10">
        Our Exquisite Culinary Creations
      </h1>
      <p className="text-center max-w-2xl mb-6 text-lg  text-black">
        Welcome to our culinary haven, where each dish is a symphony of flavors, crafted with passion and precision. Our chefs have meticulously curated a menu that takes you on a gastronomic journey, showcasing the best of local and international cuisines.
      </p>
      <p className="text-center max-w-2xl mb-6 text-lg text-black">
        From delightful appetizers that tease your palate to sumptuous main courses that leave you craving for more, our dishes are designed to provide an unforgettable dining experience. Dive into a world of culinary excellence and let your taste buds embark on an extraordinary adventure.
      </p>
      

      <div className="flex flex-wrap gap-8 justify-center my-5">
        <DishesCard img={img1} title="Gourmet Appetizer" price="₦5000 - ₦7000" />
        <DishesCard img={img2} title="Signature Appetizer" price="₦5000 - ₦7000" />
        <DishesCard img={img3} title="Hearty Breakfast" price="₦5000 - ₦7000" />
        <DishesCard img={img4} title="Grilled Delicacies" price="₦5000 - ₦7000" />
        <DishesCard img={img5} title="Main Course Extravaganza" price="₦5000 - ₦7000" />
        <DishesCard img={img6} title="Nigerian Protein Specials" price="₦5000 - ₦7000" />
        <DishesCard img={img7} title="Artisan Pasta" price="₦5000 - ₦7000" />
        <DishesCard img={img8} title="Pasta Perfection" price="₦5000 - ₦7000" />
      </div>
    </div>
  );
};

export default Dishes;
