import React from "react";
import Layout from "./Layout";

const Homepage = () => {
  return (
    <Layout>
      <div className="Homepage relative">
        <div className="flex flex-col text-center md:text-left justify-center h-screen items-center">
          <div className="text-white font-lato max-w-[300px] md:max-w-[450px]">
            <h1 className="uppercase font-extrabold text-5xl md:text-6xl">
              Our priority is your health!
            </h1>
            <p className="py-6 text-black md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              pharetra, iaculis etiam eu nunc, est.
            </p>
            <button className="bg-purple shadow-md py-2 lg:text-lg font-semibold w-[150px] mr-2 rounded-full hover:shadow-xl active:scale-90 transition duration-150">
              Join Now!
            </button>
          </div>
        </div>
        <img
          className="hidden md:block w-[500px] absolute bottom-0 right-0"
          src="/images/woman.svg"
          alt=""
        />
        <img
          className="w-[300px] md:hidden absolute bottom-0 right-0 bg-contain"
          src="/images/mobile-img.svg"
          alt=""
        />
      </div>
    </Layout>
  );
};

export default Homepage;
