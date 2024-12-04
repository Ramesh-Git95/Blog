import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* IMAGE */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image path="postlist.jpg" className="rounded-2xl object-cover" w="735" />
      </div>
      {/* DETAILS */}
      <div className="flex flex-col gap-4 xl:2/3">
        <Link to="/test" className="text-3xl text-white font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          necessitatibus in facilis quidem ducimus provident.
        </Link>
        <div className="flex items-center gap-2 text-white text-sm">
          <span>Written by</span>
          <Link className="text-blue-400">Ramesh Kumar</Link>
          <span>on</span>
          <Link className="text-blue-400">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt odio est corrupti quas nesciunt laudantium at
      </p>
      <Link to="/test" className="underline text-gray-400">Read More</Link>
      </div>
      
    </div>
  );
};

export default PostListItem;
