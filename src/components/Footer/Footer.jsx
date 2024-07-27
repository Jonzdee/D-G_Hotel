import React from "react";
import ItemsContainer from "../Footer/Items.Container";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-black text-black mt-5">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-100   py-7">
        
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-blue-400">SUBSCRIBE</span>  TO OUR NEWSLETTER! <br />
        <span className="text-lg max-md:text-sm"> Never Miss Anything From D&G Hotel By Signing Up To Our Newsletter.</span>

        </h1>
        <div>
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            SUBMIT
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;