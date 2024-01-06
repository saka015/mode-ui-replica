import React from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="my-6 ">
      <div className="sm:flex sm:justify-around">
        <div className="px-4 ">
          <h1 className="font-bold">Company</h1>
          <ul className="my-3 text-gray-600 font-semibold gap-y-3">
            <li className="my-2">About Us</li>
            <li className="my-2">Pricing</li>
            <li className="my-2">Contact Us</li>
            <li className="my-2">Features</li>
          </ul>
        </div>
        <div className="px-4">
          <h1 className="font-bold">Product</h1>
          <ul className="my-3 text-gray-600 font-semibold gap-y-3">
            <li className="my-2">Figma design system</li>
            <li className="my-2">Pricing</li>
            <li className="my-2">los kit Us</li>
            <li className="my-2">Andriod Kit</li>
          </ul>
        </div>
        <div className="px-4">
          <h1 className="font-bold">Resources</h1>
          <ul className="my-3 text-gray-600 font-semibold gap-y-3">
            <li className="my-2">About Us</li>
            <li className="my-2">Pricing</li>
            <li className="my-2">Contact Us</li>
            <li className="my-2">Features</li>
          </ul>
        </div>
        <div className="px-4">
          <h1 className="font-bold">Legal</h1>
          <ul className="my-3 text-gray-600 font-semibold gap-y-3">
            <li className="my-2">About Us</li>
            <li className="my-2">Pricing</li>
            <li className="my-2">Contact Us</li>
            <li className="my-2">Features</li>
          </ul>
        </div>
        <div className="px-4">
          <h1 className="font-bold">Suport</h1>
          <ul className="my-3 text-gray-600 font-semibold gap-y-3">
            <li className="my-2">About Us</li>
            <li className="my-2">Pricing</li>
            <li className="my-2">Contact Us</li>
            <li className="my-2">Features</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-x-2 px-4 mt-16 text-gray-600 sm:justify-center">
        <FaGithub />
        <FaLinkedin />
        <FaDiscord />
      </div>
      <h3 className="px-4 mt-4 text-gray-600 w-[240px] text-sm sm:text-center sm:w-full">
        &copy;2023{" "}
        <a
          target="_saka"
          href="https://kamal-nayan-dev-portfolio.vercel.app/"
          className="text-violet-500 font-bold"
        >
          saka_codes
        </a>{" "}
        All Rights Reserved
      </h3>
    </footer>
  );
};

export default Footer;
