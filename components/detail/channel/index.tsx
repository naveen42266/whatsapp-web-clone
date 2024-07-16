import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from "@mui/material/Avatar";
import CloseIcon from '@mui/icons-material/Close';
import { WhatsappContext } from "../../../useContext";

interface ChannelProps {
    user: string;
}
const messages = [
    { sender: 'other', text: "Just finished lunch 🍝", time: '12:30 PM', edited: false },
    { sender: 'other', text: 'Pasta and salad 🥗', time: '12:40 PM', edited: true },
    { sender: 'other', text: 'Had a sandwich 🥪', time: '12:55 PM' },
    { sender: 'other', text: 'Nice! Working on the project now?', time: '1:00 PM' },
    { sender: 'other', text: 'Yeah, fixing some bugs 🐛', time: '1:05 PM' },
    { sender: 'other', text: 'I will be here till 3 PM 🕒', time: '1:25 PM' },
    { sender: 'other', text: 'Got it! Working on the new feature now 🔧The real-time chat integration', time: '1:30 PM' },
    { sender: 'other', text: 'Exciting! Can’t wait to see it in action 👀', time: '1:45 PM' },
    { sender: 'other', text: 'Teamwork makes the dream work 💪', time: '2:00 PM' },
    { sender: 'other', text: 'Looking great! 🥳', time: '2:15 PM' },
];
const Channel: React.FC<ChannelProps> = ({ user }) => {
    const { whatsapp, setWhatsapp } = React.useContext<any>(WhatsappContext)

    const isFirstMessageOfSender = (messages: { sender: any; }[], index: number) => {
        if (index === 0) return true;
        return messages[index].sender !== messages[index - 1].sender;
    };
    function handleUserDetails() {
        setWhatsapp({ ...whatsapp, channelProfile: true, userProfile: true, isSearch: false, });
    }

    return (
        <div className={`h-screen w-full`} > {/*style={{ backgroundImage: 'url(https://static.whatsapp.net/rsrc.php/v3/yl/r/gi_DckOUM5a.png)' }}*/}
            <div className=" h-[7.5%] bg-[#f0f2f5] p-2 flex justify-between cursor-pointer" onClick={() => { handleUserDetails() }}>
                <div className="flex items-center gap-3">
                    <Avatar alt="Naveen" src={whatsapp?.tabSection?.profile || ''} sx={{ width: "42px", height: "42px" }} />
                    <div>
                        <div>{user}</div>
                        <div className="text-sm text-[#667781]">{whatsapp?.tabSection?.followers} followers</div>
                    </div>
                </div>
                <div className="relative flex items-center gap-6 mr-1 text-[#54656f]">
                    <div className="flex flex-col justify-center items-center my-5 border border-slate-200 hover:shadow-md rounded-full">
                        <span className="text-white bg-[#008069] px-4 py-1 rounded-full cursor-pointer">Follow</span>
                    </div>
                    <div className="cursor-pointer"><MoreVertIcon /></div>
                </div>
            </div>
            <div className="p-4 h-[80%] w-full overflow-y-scroll custom-scroll relative">
                <div className="flex justify-center top-0 left-0 bottom-0 right-0 sticky">
                    <span className="text-[#54656f] text-sm px-2 py-1 rounded-md shadow-md" style={{ backgroundColor: "rgba(255, 255, 255)" }}>TUESDAY</span>
                </div>
                <div className="flex">
                    <div className={`${whatsapp?.channelProfile ? 'w-[5%]' : 'w-[25%]'}`}></div>
                    <div className={`p-6 ${whatsapp?.channelProfile ? 'w-[95%]' : 'w-[50%]'}  flex flex-col justify-center`}>
                        {messages.map((message, index) => (
                            <div key={index} className={`flex cursor-pointer  ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-6`}>
                                {/* {message.sender !== 'user' && isFirstMessageOfSender(messages, index) ? (<div className={`w-0 h-0 rotate-180 border-t-[15px] border-t-transparent border-l-[15px] border-l-white`}></div>) : <div className="p-2"></div>} */}
                                <div className={`rounded-lg px-3 py-1 shadow-md w-full ${message.sender === 'user' ? 'bg-[#d9fdd3] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                                    <p className="text-sm pr-16">{message.text}</p>
                                    <p className="text-xs text-gray-500 mt-1 text-right">{message.time} {message.edited ? '(Edited)' : ''}</p>
                                </div>
                                {/* {message.sender === 'user' && isFirstMessageOfSender(messages, index) ? (<div className={`w-0 h-0 rotate-90 border-t-[15px] border-t-transparent border-l-[15px] border-l-[#d9fdd3]`}></div>) : <div className="p-2"></div>} */}
                            </div>
                        ))}
                    </div>
                    <div className={`${whatsapp?.channelProfile ? 'w-[5%]' : 'w-[25%]'}`}></div>
                </div>
            </div>
            <div className=" h-[7.5%] w-full bg-[#f0f2f5]  flex flex-col justify-center text-[#667781]">
                <div className="text-center text-xs">This channel has added privacy for your profile and phone number. <a role="button" className="text-[#027eb5] text-sm" rel="noreferrer noopener" target="_blank">Learn more</a><CloseIcon className="h-4 w-4 ml-2 p-1 bg-slate-600 text-white rounded-full" /></div>
            </div>
        </div>
    )
}

export default Channel;