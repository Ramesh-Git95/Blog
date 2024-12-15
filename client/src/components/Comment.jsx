import React from "react";
import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          path="comment.png"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">Ramesh Kumar</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut,
          expedita quod impedit recusandae ipsa amet iusto labore. Aut maiores
          laudantium dicta officiis consequatur quia sequi a neque, cupiditate
          perspiciatis.
        </p>
      </div>
    </div>
  );
};

export default Comment;
