"use client";

import { assets } from "@/assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/author_img.png",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    // console.log(data);
    // vector delay
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);
    console.log(formData);

    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bentley",
        authorImg: "/author_img.png",
      });
      setImage(false);
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16 ">
        <p className="text-xl font-medium">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="upload area"
            width={140}
            height={70}
            className="mt-4"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4 ">Blog Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black"
          name="title"
          onChange={onChangeHandler}
          value={data.title}
        />
        <p className="text-xl mt-4 ">Blog Description</p>
        <textarea
          type="text"
          placeholder="Write Content here"
          required
          rows={6}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black"
          name="description"
          onChange={onChangeHandler}
          value={data.description}
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          className="w-40 mt-4 px-4 py-3 border border-gray-500"
          onChange={onChangeHandler}
          value={data.category}
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          ADD
        </button>
      </form>
    </>
  );
};

export default page;
