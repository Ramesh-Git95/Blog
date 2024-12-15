import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
const FeaturedPost = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* FIRST */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* IMGAGE */}
        <Image path="featured1.jpg" className="rounded-3xl" w="895"/>

        {/* DETAILS */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-gray-400 lg:text-lg">01.</h1>
          <Link className="text-gray-400 lg:text-lg">Web Design</Link>
          <span className="text-gray-400">2 days ago</span>
        </div>
        {/* TITLE */}
        <Link
          to="/test"
          className="text-xl text-white lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          minus earum ducimus
        </Link>
        {/* OTHERS */}
      </div>
      {/* OTHERS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* SECOND */}
      <div className="lg:h-1/3 flex justify-between gap-4">
      
      <Image path="featured2.jpg" className="rounded-3xl object-cover w-1/3 aspect-video"/>
        {/* DETAILS AND TITLE */}
        <div className="w-2/3">
            {/* DETAILS */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold text-gray-400">02.</h1>
                <Link className="text-gray-300">Web Design</Link>
                <span className="text-gray-400 text-sm">2 days ago</span>
            </div>
            {/* TITLE */}
            <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quide</Link>
        </div>
      </div>
      {/* THIRD */}
      <div className="lg:h-1/3 flex justify-between gap-4">
      
      <Image path="featured2.jpg" className="rounded-3xl object-cover w-1/3 aspect-video"/>
        {/* DETAILS AND TITLE */}
        <div className="w-2/3">
            {/* DETAILS */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold text-gray-400">02.</h1>
                <Link className="text-gray-300">Web Design</Link>
                <span className="text-gray-400 text-sm">2 days ago</span>
            </div>
            {/* TITLE */}
            <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quide</Link>
        </div>
      </div>
      {/* FOURTH */}
      <div className="lg:h-1/3 flex justify-between gap-4">
      
      <Image path="featured2.jpg" className="rounded-3xl object-cover w-1/3 aspect-video"/>
        {/* DETAILS AND TITLE */}
        <div className="w-2/3">
            {/* DETAILS */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold text-gray-400">02.</h1>
                <Link className="text-gray-300">Web Design</Link>
                <span className="text-gray-400 text-sm">2 days ago</span>
            </div>
            {/* TITLE */}
            <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quide</Link>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default FeaturedPost;
