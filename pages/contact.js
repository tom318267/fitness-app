import React from "react";
import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/solid";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="Contact h-full py-40 font-lato">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-white font-extrabold sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-4 mb-8 font-lato max-w-2xl text-lg md:text-xl text-black">
            Reach out to us. We’ll be glad to answer any of your questions!
          </p>
        </div>

        <div className="flex flex-col items-center sm:flex-row justify-evenly">
          <div className="flex flex-col w-full sm:w-1/2 px-6">
            <input
              className="border p-2 mb-4 rounded-md contact-input"
              type="text"
              placeholder="Name"
            />
            <input
              className="border p-2 mb-4 rounded-md contact-input"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="border p-2 rounded-md mb-4 contact-input"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="bg-purple text-white mb-10 font-semibold py-2 px-4 rounded-full hover:shadow-xl active:scale-90 transition duration-150">
              Submit
            </button>
          </div>

          <div>
            <div className="border-b-2 mb-4">
              <div className="flex items-center mb-6 gap-5">
                <LocationMarkerIcon className="h-10 text-green" />
                <h2>Levittown, PA</h2>
              </div>

              <div className="flex items-center mb-6 gap-5">
                <PhoneIcon className="h-10 text-green" />
                <h2>215-555-5555</h2>
              </div>

              <div className="flex items-center gap-5 mb-6">
                <MailIcon className="h-10 text-green" />
                <h2>joyeuxnutrition@gmail.com</h2>
              </div>
            </div>
            <div className="flex justify-evenly social-icons space-x-4">
              <FaFacebookSquare className="text-3xl cursor-pointer hover:text-purple" />
              <FaInstagram className="text-3xl cursor-pointer hover:text-purple" />
              <FaTwitter className="text-3xl cursor-pointer hover:text-purple" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
