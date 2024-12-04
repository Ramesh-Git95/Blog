import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detals */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-white text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written By</span>
            <Link className="text-blue-400">Ramesh kumar</Link>
            <span>on</span>
            <Link className="text-blue-400">Web Design</Link>
            <span>2 days ago.</span>
          </div>
          <p className="text-white font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            sapiente eligendi dicta sunt aspernatur sequi itaque placeat at
            dolor explicabo dolores recusandae iusto velit quo repudiandae,
            pariatur laborum culpa laboriosam!
          </p>
        </div>

        <div className="hidden lg:block w-2/5">
          <Image path="postlist.jpg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="text-white flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
            qui quas dolorem repellat ea repellendus ipsa unde possimus a.
            Recusandae beatae alias odio vero. Cum asperiores fugiat perferendis
            enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            labore laudantium quod et fugiat molestias omnis dignissimos quas
            harum id? Fugit esse consequuntur reiciendis laudantium. Fugiat nam
            quaerat cum quam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
            qui quas dolorem repellat ea repellendus ipsa unde possimus a.
            Recusandae beatae alias odio vero. Cum asperiores fugiat perferendis
            enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            libero vero dignissimos enim earum. Ipsum numquam veritatis odio
            nostrum cupiditate, unde beatae vero esse quo dolore natus
            exercitationem rerum quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
            qui quas dolorem repellat ea repellendus ipsa unde possimus a.
            Recusandae beatae alias odio vero. Cum asperiores fugiat perferendis
            enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            libero vero dignissimos enim earum. Ipsum numquam veritatis odio
            nostrum cupiditate, unde beatae vero esse quo dolore natus
            exercitationem rerum quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
            qui quas dolorem repellat ea repellendus ipsa unde possimus a.
            Recusandae beatae alias odio vero. Cum asperiores fugiat perferendis
            enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            libero vero dignissimos enim earum. Ipsum numquam veritatis odio
            nostrum cupiditate, unde beatae vero esse quo dolore natus
            exercitationem rerum quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
            qui quas dolorem repellat ea repellendus ipsa unde possimus a.
            Recusandae beatae alias odio vero. Cum asperiores fugiat perferendis
            enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            libero vero dignissimos enim earum. Ipsum numquam veritatis odio
            nostrum cupiditate, unde beatae vero esse quo dolore natus
            exercitationem rerum quisquam?
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
            qui quas dolorem repellat ea repellendus ipsa unde possimus a.
            Recusandae beatae alias odio vero. Cum asperiores fugiat perferendis
            enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            libero vero dignissimos enim earum. Ipsum numquam veritatis odio
            nostrum cupiditate, unde beatae vero esse quo dolore natus
            exercitationem rerum quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
            qui quas dolorem repellat ea repellendus ipsa unde possimus a.
            Recusandae beatae alias odio vero. Cum asperiores fugiat perferendis
            enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            libero vero dignissimos enim earum. Ipsum numquam veritatis odio
            nostrum cupiditate, unde beatae vero esse quo dolore natus
            exercitationem rerum quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
            qui quas dolorem repellat ea repellendus ipsa unde possimus a.
            Recusandae beatae alias odio vero. Cum asperiores fugiat perferendis
            enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            libero vero dignissimos enim earum. Ipsum numquam veritatis odio
            nostrum cupiditate, unde beatae vero esse quo dolore natus
            exercitationem rerum quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
            qui quas dolorem repellat ea repellendus ipsa unde possimus a.
            Recusandae beatae alias odio vero. Cum asperiores fugiat perferendis
            enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            libero vero dignissimos enim earum. Ipsum numquam veritatis odio
            nostrum cupiditate, unde beatae vero esse quo dolore natus
            exercitationem rerum quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
            qui quas dolorem repellat ea repellendus ipsa unde possimus a.
            Recusandae beatae alias odio vero. Cum asperiores fugiat perferendis
            enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            libero vero dignissimos enim earum. Ipsum numquam veritatis odio
            nostrum cupiditate, unde beatae vero esse quo dolore natus
            exercitationem rerum quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
            qui quas dolorem repellat ea repellendus ipsa unde possimus a.
            Recusandae beatae alias odio vero. Cum asperiores fugiat perferendis
            enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            libero vero dignissimos enim earum. Ipsum numquam veritatis odio
            nostrum cupiditate, unde beatae vero esse quo dolore natus
            exercitationem rerum quisquam?
          </p>
        </div>
        {/* MENU */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Aurthor</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                path="profile.png"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link>Ramesh Kumar</Link>
            </div>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellat,
            </p>
            <div className="flex gap-2">
              <Link>
                <Image path="facebook.svg" className="w-7 h-7" />
              </Link>
              <Link>
                <Image path="instagram.svg" className="w-7 h-7" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/">
              All
            </Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              DataBase
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
