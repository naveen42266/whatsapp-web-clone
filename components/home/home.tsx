import { useContext, useState } from "react";
import ChatDetails from "../detail/chat";
import DetailComponent from "../detail";
import TabsComponent from "../tabs";
import ListComponent from "../lists";
import { WhatsappContext } from "../../useContext";

export default function Home() {
    const [selectedTab, setSelectedTab] = useState<string>('chats');
    const { whatsapp, setWhatsapp } = useContext<any>(WhatsappContext)
    // const [keyWord, setKeyWork] = useState<DetailModel>()
    function handleDetailScreen() {
        if ((whatsapp?.tabSection?.title == 'chat' || whatsapp?.tab == 'chats') && whatsapp?.tabSection?.user !=='' ) {
            return <ChatDetails user={whatsapp?.tabSection?.user || ''} />
        }
        return <DetailComponent />
    }

    function handleSetTabDetails(title: string, user: string) {
        setWhatsapp((prevStatus: { tabSection: any; }) => ({
            ...prevStatus,
            tabSection: {
                ...prevStatus.tabSection,
                title: title,
                user: user
            }
        }));
    }
    // useEffect(() => {
    //     if (selectedTab != 'chats')
    //         setKeyWork({ key: '', value: '' })
    // }, [selectedTab])
    console.log(whatsapp)
    return (
        <div className="h-screen w-full relative overflow-y-hidden">
            <div className="bg-[#00a884] h-[17.5%] w-full"></div>
            <div className="bg-slate-200 h-[82.5%] w-full"></div>
            <div className="absolute top-[2.6%] right-[2.6%] md:right-[1.2%] bottom-[2.6%] left-[2.6%] md:left-[1.2%] z-20 bg-[#f0f2f5] flex">
                <div className="h-[100%] w-[100%] sm:w-[40%] md:w-[34%] flex">
                    <div className="h-[100%] w-[12%]">
                        <TabsComponent selectedTab={(tab: string) => { setSelectedTab(tab) }} />
                    </div>
                    <div className="h-[100%] w-[88%] bg-white"><ListComponent tab={selectedTab} handleDetailContent={(value: string, key: string) => { handleSetTabDetails(key, value) }} /></div>
                </div>
                <div className={`h-[100%] hidden sm:block w-0 sm:w-[60%] md:w-[66%] `}> {/*${whatsapp?.tabSection?.title == 'chat' ? 'bgImg' : ''}*/}
                    {handleDetailScreen()}
                </div>
            </div>
        </div>
    );
}
