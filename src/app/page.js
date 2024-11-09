'use client'
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto">
      <Header/>
      <BlogList/>
      <Footer/>
      <Toaster richColors position="top-center"/>
    </main>
  );
}
