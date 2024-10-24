"use client";
import { assets, blog_data } from "@/assets/assets";
import Footer from "@/components/Footer";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  console.log(data);
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"} >
            <Image
              src={assets.logo}
              alt="logo"
              width={180}
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="arrow" />
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data?.title}
          </h1>
          <Image
            src={data?.author_img}
            width={60}
            headers={60}
            alt="author"
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-2 pb-2 text-lg max-w-[740px] mx-auto">
            {data?.author}
          </p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data?.image}
          width={1280}
          height={720}
          alt="image"
          className="border-4 border-white"
        />
        <h1 className="my-8 text-2xl font-semibold">Introduction:</h1>
        <p>{data?.description}</p>

        <h3 className="my-5 text-[18px]     font-semibold">Lorem </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
          repellat quae aspernatur omnis aperiam natus unde numquam amet
          cupiditate repellendus, pariatur voluptas velit dolore in temporibus
          perferendis atque est nesciunt!
        </p>

        <h3 className="my-5 text-[18px]     font-semibold">Lorem </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
          repellat quae aspernatur omnis aperiam natus unde numquam amet
          cupiditate repellendus, pariatur voluptas velit dolore in temporibus
          perferendis atque est nesciunt!
        </p>

        <h3 className="my-5 text-[18px]     font-semibold">Lorem </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
          repellat quae aspernatur omnis aperiam natus unde numquam amet
          cupiditate repellendus, pariatur voluptas velit dolore in temporibus
          perferendis atque est nesciunt!
        </p>
        <h3 className="my-5 text-[18px]     font-semibold">Conclusion </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
          repellat quae aspernatur omnis aperiam natus unde numquam amet
          cupiditate repellendus, pariatur voluptas velit dolore in temporibus
          perferendis atque est nesciunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Atque natus obcaecati officiis suscipit, voluptates
          maxime ratione magnam quae beatae earum eaque similique aliquid
          temporibus, vitae ab officia tenetur itaque ipsa?
        </p>

        <div className="my-24">
          <p className="font-semibold my-4 text-black">
            share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} alt="facebook" width={50} />
            <Image src={assets.twitter_icon} alt="facebook" width={50} />
            <Image src={assets.googleplus_icon} alt="facebook" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
