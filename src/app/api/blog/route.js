import { connectDB } from "@/lib/confiq/db";
import BlogModel from "@/lib/models/BlogModel";

require("dotenv").config();

const { NextResponse } = require("next/server");
const fs = require('fs')
import { writeFile } from "fs/promises";

const loadDB = async () => {
  await connectDB();
};

loadDB();

// API to get blogs
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

// API to create blog
export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");

  const imageByteData = await image.arrayBuffer();

  const buffer = Buffer.from(imageByteData);

  const path = `./public/${timestamp}_${image.name}`;

  await writeFile(path, buffer);

  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };

  try {
    await BlogModel.create(blogData);
    console.log("Blog created successfully");
    return NextResponse.json({
      success: true,
      message: "Blog created successfully",
    });
  } catch (error) {
    console.log(`Database error: ${error.message}`);
    return NextResponse.json({ success: false, message: "Database error" });
  }
  // return NextResponse.json({ imgUrl });
}

// API to delete blog
export async function DELETE(request){
  const id = await request.nextUrl.searchParams.get('id')
  try {
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public/${blog.image}`,()=>{})
    await BlogModel.findByIdAndDelete(id)
    return NextResponse.json({message:'Blog deleted successfully'})
  } catch (error) {
    return NextResponse.json({message:'Database error'})
  }
}
