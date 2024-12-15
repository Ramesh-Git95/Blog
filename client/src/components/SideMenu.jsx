import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium text-white">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium text-white">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer text-white">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none size-4 border-[1.5px] border-white cursor-pointer rounded-sm bg-tra checked:bg-white "
          />
          Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer text-white">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none size-4 border-[1.5px] border-white cursor-pointer rounded-sm checked:bg-white "
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer text-white">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none size-4 border-[1.5px] border-white cursor-pointer rounded-sm checked:bg-white "
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer text-white">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none size-4 border-[1.5px] border-white cursor-pointer rounded-sm checked:bg-white "
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium text-white">Category</h1>
      <div className="flex flex-col gap-2 text-sm text-white">
        <Link className="underline" to="posts">
          All
        </Link>
        <Link className="underline" to="posts?cat=web-desing">
          Web Design
        </Link>
        <Link className="underline" to="posts?cat-development">
          Development
        </Link>
        <Link className="underline" to="posts?cat-database">
          Database
        </Link>
        <Link className="underline" to="posts?cat-seo">
          Search Engines
        </Link>
        <Link className="underline" to="posts?cat-marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
