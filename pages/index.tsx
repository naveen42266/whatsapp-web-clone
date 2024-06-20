import TabsComponent from "../components/tabs";
import DetailComponent from "../components/detail";
import ListComponent from "../components/lists";
import { useEffect, useMemo, useState } from "react";
import ChatDetails from "../components/detail/chat";
import Status from "@/components/status";

class DetailModel {
  key: string | null = null;
  value: string | null = null;
}
export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string>('chats');
  const [keyWord, setKeyWork] = useState<DetailModel>()
  function handleDetailScreen() {
    if (keyWord?.key == 'chat' && selectedTab == 'chats') {
      return <ChatDetails user={keyWord.value || ''} />
    }
    return <DetailComponent />
  }
  useEffect(() => {
    if (selectedTab != 'chats')
      setKeyWork({ key: '', value: '' })
  }, [selectedTab])

  return (
    <div className="h-screen w-full relative overflow-y-hidden">
      <div className="bg-[#00a884] h-[17.5%] w-full"></div>
      <div className="bg-slate-200 h-[82.5%] w-full"></div>
      <div className="absolute top-[2.6%] right-[2.6%] md:right-[1.2%] bottom-[2.6%] left-[2.6%] md:left-[1.2%] z-20 bg-[#f0f2f5] flex">
        <div className="h-[100%] w-[100%] sm:w-[40%] md:w-[34%] flex">
          <div className="h-[100%] w-[12%]">
            <TabsComponent selectedTab={(tab: string) => { setSelectedTab(tab) }} />
          </div>
          <div className="h-[100%] w-[88%] bg-white"><ListComponent tab={selectedTab} handleDetailContent={(value: string, key: string) => { setKeyWork({ key: key, value: value }) }} /></div>
        </div>
        <div className={`h-[100%] hidden sm:block w-0 sm:w-[60%] md:w-[66%] ${keyWord?.key == 'chat' ? 'bgImg' : ''}`}>
          {handleDetailScreen()}
        </div>
      </div>
    </div>
    // <Status />
  );
}
