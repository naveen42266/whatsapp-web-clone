import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from "@mui/material/Avatar";
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import TextField from "@mui/material/TextField";

interface ChatDetailsProps {
    user: string;
}
const messages = [
    { sender: 'user', text: "I'm in green botz now", time: '9:56 AM', edited: true },
    { sender: 'other', text: 'Nice', time: '10:03 AM' },
    { sender: 'other', text: 'Ena pandra', time: '10:03 AM' },
    { sender: 'user', text: 'Waiting 😁', time: '10:13 AM' },
    { sender: 'other', text: 'Okay 👍🏼', time: '10:13 AM' },
    { sender: 'user', text: '1st round completed fa', time: '10:55 AM' },
    { sender: 'user', text: 'Next round ku waiting', time: '10:55 AM' },
    { sender: 'other', text: 'Oh', time: '11:20 AM' },
    { sender: 'other', text: 'Ena round', time: '11:20 AM' },
    { sender: 'user', text: 'Technical round', time: '11:21 AM' },
    { sender: 'user', text: 'Next design round da', time: '11:22 AM' },
];
const ChatDetails: React.FC<ChatDetailsProps> = ({ user }) => {
    const isFirstMessageOfSender = (messages: { sender: any; }[], index: number) => {
        if (index === 0) return true;
        return messages[index].sender !== messages[index - 1].sender;
    };
    return (
        <div className="h-screen w-full">
            <div className=" h-[7.5%] bg-[#f0f2f5] p-2 flex justify-between">
                <div className="flex items-center gap-3">
                    <Avatar alt="Naveen" src={''} sx={{ width: "42px", height: "42px" }} />
                    <div>
                        <div>{user}</div>
                        <div className="text-sm text-[#667781]">Last seen</div>
                    </div>
                </div>
                <div className="relative flex items-center gap-6 mr-1 text-[#54656f]">
                    <div className="cursor-pointer"><VideocamIcon /></div>
                    <div className="cursor-pointer"><SearchIcon /></div>
                    <div className="cursor-pointer"><MoreVertIcon /></div>
                </div>
            </div>
            <div className="p-4 h-[80%] w-full overflow-y-scroll custom-scroll">
                <div className="p-6">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex cursor-pointer  ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-[3px]`}>
                            {message.sender !== 'user' && isFirstMessageOfSender(messages, index) ? (<div className={`w-0 h-0 rotate-180 border-t-[15px] border-t-transparent border-l-[15px] border-l-white`}></div>) : <div className="p-2"></div>}
                            <div className={`rounded-lg px-3 py-1 shadow-md ${message.sender === 'user' ? 'bg-[#d9fdd3] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                                <p className="text-sm pr-16">{message.text}</p>
                                <p className="text-xs text-gray-500 mt-1 text-right">{message.time} {message.edited ? '(Edited)' : ''}</p>
                            </div>
                            {message.sender === 'user' && isFirstMessageOfSender(messages, index) ? (<div className={`w-0 h-0 rotate-90 border-t-[15px] border-t-transparent border-l-[15px] border-l-[#d9fdd3]`}></div>) : <div className="p-2"></div>}
                        </div>
                    ))}
                </div>
            </div>
            <div className=" h-[7.5%] w-full bg-[#f0f2f5] p-2 flex items-center">
                <div className="w-[5%] flex justify-center"> <svg color="#54656f" viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>smiley</title><path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path> </svg></div>
                <div className="w-[5%] flex justify-center"><AddIcon className="text-[#54656f]" /></div>
                <div className="bg-white w-[85%] rounded-lg flex items-center"> <TextField id="standard-basic" className="searchField ml-2 py-1" placeholder={'Type a message'} variant="standard" fullWidth InputProps={{ disableUnderline: true, }} /> </div>
                <div className="w-[5%] flex justify-center pl-2"> <MicIcon className="text-[#54656f]" /> </div>
            </div>
        </div>
    )
}

export default ChatDetails;