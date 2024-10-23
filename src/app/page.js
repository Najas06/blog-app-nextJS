'use client'
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto">
      <Header/>
      <BlogList/>
      <Footer/>
    </main>
  );
}
