import React from "react";

import img2 from "../../images/room-2.jpeg";
import img3 from "../../images/room-3.jpeg";
import img4 from "../../images/room-4.jpeg";
import img5 from "../../images/room-5.jpeg";
import img6 from "../../images/room-6.jpeg";
import DishesCard from "../restaurant/layout/DishesCard";

const Dishes = () => {
  return (
    <>
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center my-5">
        <DishesCard img={img2} title="Tasty Dish" price="$10.99" />
        <DishesCard img={img2} title="Tasty Dish" price="$12.99" />
        <DishesCard img={img3} title="Tasty Dish" price="$10.99" />
        <DishesCard img={img4} title="Tasty Dish" price="$11.99" />
        <DishesCard img={img5} title="Tasty Dish" price="$10.99" />
        <DishesCard img={img6} title="Tasty Dish" price="$12.99" />
        <DishesCard img={img6} title="Tasty Dish" price="$12.99" />
        <DishesCard img={img6} title="Tasty Dish" price="$12.99" />
        <DishesCard img={img6} title="Tasty Dish" price="$12.99" />
      </div>
    </div>
    </>
  );
};

export default Dishes;
