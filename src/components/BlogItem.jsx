import { assets, blog_data } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({title,description,image,category,id}) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] border bg-white border-black hover:shadow-[-7px_7px_0px_#000000] transition-all">
      <Link href={`/blogs/${id}`}>
      <Image
        src={image}
        alt=" "
        width={400}
        height={400}
        className="border-b border-black"
      />
      </Link>
      <p className="ml-5 mt-5 px-2 py-0.5 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{title}</h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">{description}</p>
        <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center">Read more <Image src={assets.arrow} alt='arrow' width={12} className="ml-2 mt-1"/></Link>
      </div>

    </div>
  );
};

export default BlogItem;
