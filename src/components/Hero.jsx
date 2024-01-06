import React from "react";
import Footer from './Footer.jsx'
import { CiCreditCard1, CiHeadphones } from "react-icons/ci";

import { FaStar } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { CiGlobe, CiLock } from "react-icons/ci";
import { GiUnlocking } from "react-icons/gi";

import nuxt from "../assests/nuxt.png";
import miro from "../assests/miro.png";
import behance from "../assests/behance.png";
import lotti from "../assests/lottie.png";
import wise from "../assests/wise.png";
import kinsta from "../assests/kinsta.png";
import dribble from "../assests/dribble.png";
import angelist from "../assests/angelist.png";
import mobile from "../assests/mobile.png";
import spending from "../assests/spending.png";

const Hero = () => {
  return (
    <div className="mt-10 grid items-center px-4">
      <h3 className="text-violet-900 text-center text-lg sm:text-xl">
        Seamless experience
      </h3>
      <h1 className="text-center text-5xl font-semibold  sm:px-96 sm:mt-2">
        Unleashing the Next Generation of Card Solutions
      </h1>
      <p className="text-center mt-2 text-violet-900 font-light text-sm lowercase sm:px-96">
        consectetur adipisicing elit. Temporibus vitae dolores nam, ab atque
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
        deserunt odio obcaecati dignissimos excepturi soluta molestiae.
      </p>
      <button className="mt-4 text-center bg-violet-900 rounded-md align-center text-sm text-white py-2 sm:mx-[550px]">
        Unlock you Card →
      </button>
      <p className="text-center text-[11px] mt-2  ">*No credit card required</p>

      <div className="grid grid-cols-4 sm:grid-cols-8 my-2 p-2">
        <img className="scale-50" src={nuxt} alt="" />
        <img className="scale-50 -mt-3" src={miro} alt="" />
        <img className="scale-75 -mt-3" src={lotti} alt="" />
        <img className="scale-50 sm:mt-3" src={wise} alt="" />
        <img className="scale-50 sm:-mt-8" src={dribble} alt="" />
        <img className="scale-50 mt-2 sm:-mt-4" src={kinsta} alt="" />
        <img className="scale-50 mt-4 sm:-mt-[1px]" src={angelist} alt="" />
        <img className="scale-50 mt-3 sm:-mt-2" src={behance} alt="" />
      </div>
      <div className="grid place-items-center sm:px-96">
        <h1 className="text-4xl font-medium text-center">
          Elevating Card Programs with Cutting-Edge Technology
        </h1>
        <p className="text-center mt-2 text-xl p-2 text-gray-700">
          {" "}
          sit amet consectetur adipisicing elit. Dolore illum exercitationem non
          nam dignissimos nisi?consectetur{" "}
        </p>
        <h2 className="text-center text-xl font-semibold text-violet-900 flex">
          Compare all Pro features{" "}
          <GoArrowRight className="mt-[4px] text-2xl ml-1 font-bold" />{" "}
        </h2>
      </div>

      <div className="my-8 sm:flex sm:justify-around">
        <div className="grid place-items-center  my-12">
          <CiGlobe className="text-4xl font-black text-violet-900" />
          <h2 className="text-xl font-semibold mt-2">Globally Accepted</h2>
          <p className="p-2 px-4 text-center text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          </p>
        </div>
        <div className="grid place-items-center my-12">
          <GiUnlocking className="text-4xl font-black text-violet-900" />
          <h2 className="text-xl font-semibold mt-2">Biometric Intergrated</h2>
          <p className="p-2 px-4 text-center text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          </p>
        </div>
        <div className="grid place-items-center my-12">
          <CiLock className="text-4xl font-black text-violet-900" />
          <h2 className="text-xl font-semibold mt-2">Fully Secured</h2>
          <p className="p-2 px-4 text-center text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          </p>
        </div>
      </div>
      <div className="grid place-items-center">
        <h1 className="text-4xl font-medium text-center">
          Elevating Card Programs with Cutting-Edge Technology
        </h1>
        <p className="text-center mt-2 text-xl p-2 text-gray-700">
          {" "}
          sit amet consectetur adipisicing elit. Dolore illum exercitationem non
          nam dignissimos nisi?consectetur{" "}
        </p>
        <h2 className="text-center text-xl font-semibold text-violet-900 flex">
          Compare all Pro features{" "}
          <GoArrowRight className="mt-[4px] text-2xl ml-1 font-bold" />{" "}
        </h2>

        <div className="images my-4 sm:my-12 p-3 sm:flex bg-violet-100 rounded-2xl">
          <img className="rounded-md" src={mobile} alt="" />
          <img className="rounded-md" src={spending} alt="" />
        </div>
      </div>
      <div className="details sm:flex sm:justify-around">
        <div className="grid place-items-center mt-10">
          <h1 className="text-4xl font-bold text-violet-900">2 Million</h1>
          <h5 className="mt-2 font-semibold">Customer</h5>
          <p className="px-20 text-center text-gray-700 mt-2 ">
            consectetur adipisicing elit. Temporibus vitae dolores nam, ab atque
          </p>
        </div>

        <div className="grid place-items-center mt-10">
          <h1 className="text-4xl font-bold text-violet-900">1K</h1>
          <h5 className="mt-2 font-semibold">Downloads</h5>
          <p className="px-20 text-center text-gray-700 mt-2">
            consectetur adipisicing elit. Temporibus vitae dolores nam, ab atque
          </p>
        </div>

        <div className="grid place-items-center mt-10">
          <h1 className="text-4xl font-bold text-violet-900">$73 Million</h1>
          <h5 className="mt-2 font-semibold">Transaction</h5>
          <p className="px-20 text-center text-gray-700 mt-2">
            consectetur adipisicing elit. Temporibus vitae dolores nam, ab atque
          </p>
        </div>

        <div className="grid place-items-center mt-10">
          <h1 className="text-4xl font-bold text-violet-900">2.0</h1>
          <h5 className="mt-2 font-semibold">Latest Version</h5>
          <p className="px-20 text-center text-gray-700 mt-2">
            consectetur adipisicing elit. Temporibus vitae dolores nam, ab atque
          </p>
        </div>
      </div>
      <div className="review grid place-items-center px-4 my-6">
        <img className="scale-[0.2]" src={wise} alt="" />
        <p className="text-center sm:px-96 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          officiis incidunt voluptatem hic cum, nemo obcaecati dicta non officia
          minus
        </p>
        <FaRegUserCircle className="mt-12 scale-[2.2]" />
        <h2 className="mt-2 font-semibold">John Doe</h2>
        <h5 className="text-gray-700">Lead Designer</h5>
        <div className="flex mt-2">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>
      </div>
      <div className="grid place-items-center p-3 sm:px-96">
        <h1 className="px-2 my-4 text-center text-3xl font-semibold  ">
          Unlock Limitless Possibilities with Our New Card Solutions
        </h1>
        <div className="sm:flex gap-x-2">
            <button className="w-fulll mt-4  bg-violet-900 rounded-md items-center text-sm text-white py-3  tracking-wider flex text-center justify-center  px-2">
          Unlock you Card
          <CiCreditCard1 className="text-xl font-bold ml-1" />
        </button>
        <button className="mt-4 text-center w-fulll bg-violet-100 rounded-md align-center text-sm text-gray-800 py-3 tracking-wider flex justify-center px-2">
          Customer Support
          <CiHeadphones className="text-xl font-bold ml-1" />
        </button>
        </div>
      
      </div>
      <div className="about mt-8 px-4 py-2 sm:text-center ">
        <h1 className="text-xl font-bold">Mode UI</h1>
        <p className="my-4  font-medium text-gray-600 sm:px-96 sm:mb-16 ">
          {" "}
          Mode UI is ipsum dolor sit amet.rem ipsum dolor sit, amet consectetur
          adipisicing elit. Sint fuga exercitationem dicta! Voluptatem, quia
          cupiditate porro laudantium exercitationem distinctio doloremque.
        </p>
        <hr></hr>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
