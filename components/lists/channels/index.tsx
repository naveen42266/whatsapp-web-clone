import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { channelNames, channels } from "../../../json";
import { WhatsappContext } from "../../../useContext";
interface ChannelsProps {
    tab: string;
    handleChannelsList: (value: string) => void;
    handleChannel: (channel: any) => void;
}

const Channels: React.FC<ChannelsProps> = ({ tab, handleChannelsList, handleChannel }) => {
    const groups = Math.ceil(channelNames.length / 3);
    const { whatsapp, setWhatsapp } = useContext<any>(WhatsappContext)

    return (
        <div>
            <div className="flex justify-between py-3 px-6">
                <div className="text-[22px] font-bold capitalize">{tab}</div>
                <div className="text-3xl font-light cursor-pointer">+</div>
            </div>
            <div className="text-center text-[19px] text-[#111b21] mt-4">Stay updated on your favourite topics</div>
            <div className="text-center text-[17px] text-[#667781] py-2">Find channels to follow below</div>
            {/* <div className="grid grid-cols-11 gap-2 m-4">
                {Array.from({ length: groups }).map((_, groupIndex) => (
                    <React.Fragment key={groupIndex}>
                        <div className="col-span-1"></div>
                        {channelNames.slice(groupIndex * 3, groupIndex * 3 + 3).map((each, index) => (
                            <div key={index} className="col-span-3 flex flex-col justify-center items-center border border-[#e9edef] rounded-lg p-4 cursor-pointer">
                                <div className="relative">
                                    <Avatar alt={each} src={'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg'} sx={{ width: 70, height: 70 }} />
                                    <div className="absolute bottom-0 right-0 p-0.5 bg-white rounded-full">
                                        <svg height="18" width="18" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18"><title>psa-verified</title><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg>
                                    </div>
                                </div>
                                <div className="text-[13px] text-[#111b21] capitalize mt-4">{each}</div>
                                <div className="text-sm text-[#667781] pt-2">Follow</div>
                            </div>
                        ))}
                        <div className="col-span-1"></div>
                    </React.Fragment>
                ))}
            </div> */}
            {channels?.slice(0, 5)?.map((each, index) => {
                return (
                    <div key={index} className={`flex items-center cursor-pointer pl-4 ${whatsapp?.tabSection?.user == each.name ? 'bg-[#f0f2f5]' : 'bg-white hover:bg-[#f5f6f6]'} `} onMouseEnter={() => { }} onMouseLeave={() => { }} onClick={() => { handleChannel(each) }}>
                        <div className="">
                            <Avatar src={each?.profile} alt="Naveen" sx={{ width: 50, height: 50 }} />
                        </div>
                        <div className="flex justify-between items-center pl-2 pr-4 w-full border-b border-[#e9edef]">
                            <div className="flex flex-col justify-between">
                                <div className="flex">
                                    <div className="text-[#111b21] text-[17px]">{each?.name}</div>
                                    <svg className="mt-1 mx-1" height="18" width="18" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18"><title>psa-verified</title><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg>
                                </div>
                                <div className="text-[#667781] text-xs">{each?.followers} followers</div>
                            </div>
                            <div className="flex flex-col justify-center items-center my-5 border border-slate-200 hover:shadow-md rounded-full">
                                <span className="bg-white text-[#008069] px-4 py-1 rounded-full cursor-pointer">Follow</span>
                            </div>
                        </div>
                        <div className="col-span-2"></div>
                        <div className="col-span-10 pt-4 border-b border-[#e9edef]"></div>
                    </div>
                )
            })}
            <div className="flex flex-col justify-center items-center my-6" onClick={() => { handleChannelsList('Find channels') }}>
                <span className="text-white bg-[#008069] px-4 py-2 rounded-full cursor-pointer">Discover more</span>
            </div>
        </div>
    )
}

export default Channels;