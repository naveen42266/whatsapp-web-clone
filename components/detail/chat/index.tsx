import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from "@mui/material/Avatar";
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import TextField from "@mui/material/TextField";
import { WhatsappContext } from "../../../useContext";

interface ChatDetailsProps {
    user: string;
}
const messages = [
    { sender: 'user', text: "Just finished lunch 🍝", time: '12:30 PM', edited: false },
    { sender: 'other', text: 'What did you have? 🤔', time: '12:35 PM' },
    { sender: 'user', text: 'Pasta and salad 🥗', time: '12:40 PM', edited: true },
    { sender: 'other', text: 'Sounds delicious! 😋', time: '12:45 PM' },
    { sender: 'user', text: 'It was! How about you?', time: '12:50 PM' },
    { sender: 'other', text: 'Had a sandwich 🥪', time: '12:55 PM' },
    { sender: 'user', text: 'Nice! Working on the project now?', time: '1:00 PM' },
    { sender: 'other', text: 'Yeah, fixing some bugs 🐛', time: '1:05 PM' },
    { sender: 'user', text: 'Cool, need any help? 🤓', time: '1:10 PM', edited: true },
    { sender: 'other', text: 'Maybe later, thanks! 🙏', time: '1:15 PM' },
    { sender: 'user', text: 'Okay, let me know! 😊', time: '1:20 PM' },
    { sender: 'user', text: 'I will be here till 3 PM 🕒', time: '1:25 PM' },
    { sender: 'other', text: 'Got it! Working on the new feature now 🔧', time: '1:30 PM' },
    { sender: 'user', text: 'Which feature? 🚀', time: '1:35 PM' },
    { sender: 'other', text: 'The real-time chat integration', time: '1:40 PM' },
    { sender: 'user', text: 'Exciting! Can’t wait to see it in action 👀', time: '1:45 PM' },
    { sender: 'other', text: 'Almost done, just a few more tweaks 🔄', time: '1:50 PM' },
    { sender: 'user', text: 'You’re the best! 🙌', time: '1:55 PM' },
    { sender: 'other', text: 'Teamwork makes the dream work 💪', time: '2:00 PM' },
    { sender: 'user', text: 'Absolutely! 💯', time: '2:05 PM' },
    { sender: 'other', text: 'Just pushed the changes, check it out! 🚢', time: '2:10 PM' },
    { sender: 'user', text: 'Looking great! 🥳', time: '2:15 PM' },
    { sender: 'other', text: 'Thanks! Any feedback? 📝', time: '2:20 PM' },
    { sender: 'user', text: 'Just a minor suggestion, will message you separately', time: '2:25 PM' },
    { sender: 'other', text: 'Sure thing! 👍', time: '2:30 PM' },
];
const metaAi = [
    { sender: 'user', text: "1. What is the difference between null and undefined in JavaScript?", time: '12:30 PM', edited: false },
    { sender: 'other', text: ``, time: '12:35 PM' },
    { sender: 'user', text: 'Pasta and salad 🥗', time: '12:40 PM', edited: true },
    { sender: 'other', text: 'Sounds delicious! 😋', time: '12:45 PM' },
    { sender: 'user', text: 'It was! How about you?', time: '12:50 PM' },
    { sender: 'other', text: 'Had a sandwich 🥪', time: '12:55 PM' },
    { sender: 'user', text: 'Nice! Working on the project now?', time: '1:00 PM' },
    { sender: 'other', text: 'Yeah, fixing some bugs 🐛', time: '1:05 PM' },
    { sender: 'user', text: 'Cool, need any help? 🤓', time: '1:10 PM', edited: true },
    { sender: 'other', text: 'Maybe later, thanks! 🙏', time: '1:15 PM' },
    { sender: 'user', text: 'Okay, let me know! 😊', time: '1:20 PM' },
    { sender: 'user', text: 'I will be here till 3 PM 🕒', time: '1:25 PM' },
    { sender: 'other', text: 'Got it! Working on the new feature now 🔧', time: '1:30 PM' },
    { sender: 'user', text: 'Which feature? 🚀', time: '1:35 PM' },
    { sender: 'other', text: 'The real-time chat integration', time: '1:40 PM' },
    { sender: 'user', text: 'Exciting! Can’t wait to see it in action 👀', time: '1:45 PM' },
    { sender: 'other', text: 'Almost done, just a few more tweaks 🔄', time: '1:50 PM' },
    { sender: 'user', text: 'You’re the best! 🙌', time: '1:55 PM' },
    { sender: 'other', text: 'Teamwork makes the dream work 💪', time: '2:00 PM' },
    { sender: 'user', text: 'Absolutely! 💯', time: '2:05 PM' },
    { sender: 'other', text: 'Just pushed the changes, check it out! 🚢', time: '2:10 PM' },
    { sender: 'user', text: 'Looking great! 🥳', time: '2:15 PM' },
    { sender: 'other', text: 'Thanks! Any feedback? 📝', time: '2:20 PM' },
    { sender: 'user', text: 'Just a minor suggestion, will message you separately', time: '2:25 PM' },
    { sender: 'other', text: 'Sure thing! 👍', time: '2:30 PM' },
];
const ChatDetails: React.FC<ChatDetailsProps> = ({ user }) => {
    const { whatsapp, setWhatsapp } = React.useContext<any>(WhatsappContext)

    const isFirstMessageOfSender = (messages: { sender: any; }[], index: number) => {
        if (index === 0) return true;
        return messages[index].sender !== messages[index - 1].sender;
    };
    function handleUserDetails() {
        setWhatsapp({ ...whatsapp, userProfile: true });
    }

    return (
        <div className={`h-screen w-full`} > {/*style={{ backgroundImage: 'url(https://static.whatsapp.net/rsrc.php/v3/yl/r/gi_DckOUM5a.png)' }}*/}
            <div className=" h-[7.5%] bg-[#f0f2f5] p-2 flex justify-between cursor-pointer" onClick={() => { handleUserDetails() }}>
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
            <div className="p-4 h-[80%] w-full overflow-y-scroll custom-scroll relative">
                <div className="flex justify-center top-0 left-0 bottom-0 right-0 sticky">
                    <span className="text-[#54656f] text-sm px-2 py-1 rounded-md shadow-md" style={{ backgroundColor: "rgba(255, 255, 255)" }}>TUESDAY</span>
                </div>
                <div className="p-6">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex cursor-pointer  ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-[3px]`}>
                            {message.sender !== 'user' && isFirstMessageOfSender(messages, index) ? (<div className={`w-0 h-0 rotate-180 border-t-[15px] border-t-transparent border-l-[15px] border-l-white`}></div>) : <div className="p-2"></div>}
                            <div className={`rounded-lg px-3 py-1 shadow-md max-w-[65%] ${message.sender === 'user' ? 'bg-[#d9fdd3] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                                <p className="text-sm pr-16">{message.text}</p>
                                <p className="text-xs text-gray-500 mt-1 text-right">{message.time} {message.edited ? '(Edited)' : ''}</p>
                            </div>
                            {message.sender === 'user' && isFirstMessageOfSender(messages, index) ? (<div className={`w-0 h-0 rotate-90 border-t-[15px] border-t-transparent border-l-[15px] border-l-[#d9fdd3]`}></div>) : <div className="p-2"></div>}
                        </div>
                    ))}
                </div>
            </div>
            <div className=" h-[7.5%] w-full bg-[#f0f2f5] p-2 flex items-center">
                <div className="w-[5%] flex justify-center"> <svg color="#54656f" height="24" width="24" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>smiley</title><path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path> </svg></div>
                <div className="w-[5%] flex justify-center"><AddIcon className="text-[#54656f]" /></div>
                <div className="bg-white w-[85%] rounded-lg flex items-center"> <TextField id="standard-basic" className="searchField ml-2 py-1" placeholder={'Type a message'} variant="standard" fullWidth InputProps={{ disableUnderline: true, }} /> </div>
                <div className="w-[5%] flex justify-center pl-2"> <MicIcon className="text-[#54656f]" /> </div>
            </div>
        </div>
    )
}

export default ChatDetails;