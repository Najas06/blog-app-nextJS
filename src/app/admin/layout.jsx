import { assets } from "@/assets/assets";
import SideBar from "@/components/AdminComponents/SideBar";
import Image from "next/image";
import { Toaster } from "sonner";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium ">Admin Panel</h3>
            <Image src={assets.profile_icon} alt="profile" width={40} />
          </div>
          {children}
          <Toaster richColors position="top-center"/>
        </div>
      </div>
    </>
  );
}
