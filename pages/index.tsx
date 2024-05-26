import { Inter } from "next/font/google";
import TabsComponent from "../components/tabs";
import DetailComponent from "../components/detail";
import ListComponent from "../components/lists";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedTab , setSelectedTab] = useState('chats');
  return (
    <div className="h-screen w-full relative">
      {/* 1st Layer */}
      <div className="bg-[#00a884] h-[17.5%] w-full"></div>
      <div className="bg-slate-200 h-[82.5%] w-full"></div>
      {/* 2nd Layer */}
      {/* <div className="absolute top-[2.6%] right-[2.6%] md:right-[1.2%] bottom-[2.6%] left-[2.6%] md:left-[1.2%] z-20 bg-[#f0f2f5] grid grid-cols-12">
        <div className="col-span-4 grid grid-cols-12">
          <div className="col-span-2">
            <TabsComponent />
          </div>
          <div className="col-span-10 bg-white"></div>
        </div>
      </div> */}
      <div className="absolute top-[2.6%] right-[2.6%] md:right-[1.2%] bottom-[2.6%] left-[2.6%] md:left-[1.2%] z-20 bg-[#f0f2f5] flex">
        <div className="h-[100%] w-[34%] flex">
          <div className="h-[100%] w-[12%]">
            <TabsComponent selectedTab={(tab: string)=> {setSelectedTab(tab)} } />
          </div>
          <div className="h-[100%] w-[88%] bg-white"><ListComponent tab={selectedTab} /></div>
        </div>
        <div className="h-[100%] w-[66%]">
          <DetailComponent/>
        </div>
      </div>
    </div>

  );
}
