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
    <>
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center my-5">
        <DishesCard img={img1} title=" Appetizer" price="5000-7000" />
        <DishesCard img={img2} title="Appetizer" price="5000-7000" />
        <DishesCard img={img3} title="Breakfast" price="5000-7000" />
        <DishesCard img={img4} title="Grills" price="5000-7000" />
        <DishesCard img={img5} title="Main-Course" price="5000-7000" />
        <DishesCard img={img6} title="Nigeria-Protein" price="5000-7000" />
        <DishesCard img={img7} title="Pasta" price="5000-7000" />
        <DishesCard img={img8} title="Pasta" price="5000-7000" />
        
      </div>
    </div>
    </>
  );
};

export default Dishes;
