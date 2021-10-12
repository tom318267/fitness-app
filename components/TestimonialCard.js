import React, { useEffect } from "react";
import AOS from "aos";
import StarRatings from "react-star-ratings";

const TestimonialCard = ({ customer: { name, img, rating, review } }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="py-16 lg:py-24">
      <div
        data-aos="flip-up"
        className="relative testimonial card max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative py-24 px-8 bg-indigo-700 rounded-xl shadow-2xl overflow-hidden">
          <div className="relative z-30">
            <StarRatings
              rating={rating}
              starRatedColor="yellow"
              starDimension="30px"
            />
          </div>
          <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative lg:col-span-1">
            <blockquote className="mt-6 text-white">
              <p className="text-xl font-medium sm:text-2xl">{review}</p>
              <footer className="mt-6">
                <p className="flex flex-col font-medium">
                  <span className="text-xl">- {name}</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
