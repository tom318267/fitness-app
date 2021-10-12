import React, { useEffect } from "react";
import Layout from "../components/Layout";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Kelly Price",
      img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.",
    },
    {
      id: 2,
      name: "Sally Thompson",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.",
    },
    {
      id: 3,
      name: "Joseph Rodriguez",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 4.5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.",
    },
    {
      id: 4,
      name: "Judith Black",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 3.5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.",
    },
  ];

  return (
    <Layout>
      <div className="Testimonials grid grid-rows-1 px-20 pt-40 h-full">
        <h1 className="text-3xl text-white font-extrabold sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Testimonials
        </h1>
        <p className="mt-6 font-lato max-w-2xl text-xl text-black">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        {data.map((customer) => (
          <TestimonialCard key={customer.id} customer={customer} />
        ))}
      </div>
    </Layout>
  );
};

export default Testimonials;
