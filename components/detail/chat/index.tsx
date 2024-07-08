import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from "@mui/material/Avatar";
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import moment from "moment";
import EmojiPicker from "emoji-picker-react";
import { WhatsappContext } from "../../../useContext";

interface ChatDetailsProps {
    user: string;
}
const messages = [
    { sender: 'user', text: "Just finished lunch 🍝", react: null, time: '12:30 PM', edited: false },
    { sender: 'other', text: 'What did you have? 🤔', react: null, time: '12:35 PM' },
    { sender: 'user', text: 'Pasta and salad 🥗', react: null, time: '12:40 PM', edited: true },
    { sender: 'other', text: 'Sounds delicious! 😋', react: null, time: '12:45 PM' },
    { sender: 'user', text: 'It was! How about you?', react: null, time: '12:50 PM' },
    { sender: 'other', text: 'Had a sandwich 🥪', react: null, time: '12:55 PM' },
    { sender: 'user', text: 'Nice! Working on the project now?', react: null, time: '1:00 PM' },
    { sender: 'other', text: 'Yeah, fixing some bugs 🐛', react: null, time: '1:05 PM' },
    { sender: 'user', text: 'Cool, need any help? 🤓', react: null, time: '1:10 PM', edited: true },
    { sender: 'other', text: 'Maybe later, thanks! 🙏', react: null, time: '1:15 PM' },
    { sender: 'user', text: 'Okay, let me know! 😊', react: null, time: '1:20 PM' },
    { sender: 'user', text: 'I will be here till 3 PM 🕒', react: null, time: '1:25 PM' },
    { sender: 'other', text: 'Got it! Working on the new feature now 🔧', react: null, time: '1:30 PM' },
    { sender: 'user', text: 'Which feature? 🚀', react: null, time: '1:35 PM' },
    { sender: 'other', text: 'The real-time chat integration', react: null, time: '1:40 PM' },
    { sender: 'user', text: 'Exciting! Can’t wait to see it in action 👀', react: null, time: '1:45 PM' },
    { sender: 'other', text: 'Almost done, just a few more tweaks 🔄', react: null, time: '1:50 PM' },
    { sender: 'user', text: 'You’re the best! 🙌', react: null, time: '1:55 PM' },
    { sender: 'other', text: 'Teamwork makes the dream work 💪', react: null, time: '2:00 PM' },
    { sender: 'user', text: 'Absolutely! 💯', react: null, time: '2:05 PM' },
    { sender: 'other', text: 'Just pushed the changes, check it out! 🚢', react: null, time: '2:10 PM' },
    { sender: 'user', text: 'Looking great! 🥳', react: null, time: '2:15 PM' },
    { sender: 'other', text: 'Thanks! Any feedback? 📝', react: null, time: '2:20 PM' },
    { sender: 'user', text: 'Just a minor suggestion, will message you separately', react: null, time: '2:25 PM' },
    { sender: 'other', text: 'Sure thing! 👍', react: null, time: '2:30 PM' },
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
    const { whatsapp, setWhatsapp } = React.useContext<any>(WhatsappContext);
    const [list, setList] = useState(messages);
    const [message, setMessage] = useState('');
    const [emojiPickerVisible, setEmojiPickerVisible] = useState({ type: "", id: "", isEmoji: false });
    const [reacted, setReacted] = useState({ type: "", id: "", emoji: null });
    const [isHovered, setIsHovered] = useState({ type: "", id: "" });

    const isFirstMessageOfSender = (messages: { sender: any; }[], index: number) => {
        return index === 0 || messages[index].sender !== messages[index - 1].sender;
    };

    const handleUserDetails = () => {
        setWhatsapp({ ...whatsapp, userProfile: true });
    };

    const handleChat = (chat: string) => {
        const newChat = {
            sender: 'user',
            text: chat,
            react: null,
            time: moment().format('LT'),
            edited: false
        };
        setList([...list, newChat]);
        setMessage('');
    };

    const onEmojiClick = (emoji: any) => {
        setReacted({ ...reacted, type: emojiPickerVisible.type, id: emojiPickerVisible.id, emoji });
        const updatedList = list.map((ele, index) => {
            if (`${index}` === emojiPickerVisible.id && ele.sender === emojiPickerVisible.type) {
                return { ...ele, react: emoji };
            }
            return ele;
        });
        setList(updatedList);
        setEmojiPickerVisible({ type: '', id: '', isEmoji: false });
    };
    return (
        <div className="h-screen w-full" onClick={() => emojiPickerVisible.isEmoji && setEmojiPickerVisible({ type: '', id: '', isEmoji: false })}>
            <div className="h-[7.5%] bg-[#f0f2f5] p-2 flex justify-between cursor-pointer" onClick={handleUserDetails}>
                <div className="flex items-center gap-3">
                    <Avatar alt={user} src={''} sx={{ width: 42, height: 42 }} />
                    <div>
                        <div>{user}</div>
                        <div className="text-sm text-[#667781]">Last seen</div>
                    </div>
                </div>
                <div className="relative flex items-center gap-6 mr-1 text-[#54656f]">
                    <VideocamIcon className="cursor-pointer" />
                    <SearchIcon className="cursor-pointer" />
                    <MoreVertIcon className="cursor-pointer" />
                </div>
            </div>
            <div className="p-4 h-[80%] w-full overflow-y-scroll custom-scroll relative">
                <div className="flex justify-center top-0 left-0 bottom-0 right-0 sticky">
                    <span className="text-[#54656f] text-sm px-2 py-1 rounded-md shadow-md" style={{ backgroundColor: "rgba(255, 255, 255)" }}>TUESDAY</span>
                </div>
                <div className="p-6">
                    {list.map((message, index) => (
                        <div key={index} className={`flex cursor-pointer ${message.sender === 'user' ? 'justify-end' : 'justify-start'} ${message.react ? 'mb-[26px]' : 'mb-[3px]'}`} onMouseEnter={() => setIsHovered({ type: message.sender, id: `${index}` })} onMouseLeave={() => setIsHovered({ type: "", id: "" })}>
                            {message.sender !== 'user' && isFirstMessageOfSender(list, index) && <div className="z-10 w-0 h-0 rotate-180 border-t-[15px] border-t-transparent border-l-[15px] border-l-white" />}
                            {message.sender === 'user' && isHovered.type === 'user' && isHovered.id === `${index}` && <EmojiEmotionsIcon className="text-white bg-[#bbbfc1] p-0.5 mt-3 mr-2 rounded-full" onClick={() => setEmojiPickerVisible({ type: message.sender, id: `${index}`, isEmoji: !emojiPickerVisible.isEmoji })} />}
                            <div className={`relative shadow-md rounded-lg px-3 py-1 max-w-[65%] ${message.sender === 'user' ? 'bg-[#d9fdd3] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                                <p className="text-sm pr-16">{message.text}</p>
                                <p className="text-xs text-gray-500 mt-1 text-right">{message.time} {message.edited && '(Edited)'}</p>
                                {message.react && <div className={`bg-white absolute -bottom-5 ${message.sender === 'user' ? 'right-0' : 'left-0'} rounded-full w-[28px] flex justify-center shadow-md`}>{message.react}</div>}
                                {emojiPickerVisible.id === `${index}` && emojiPickerVisible.type === message.sender && emojiPickerVisible.isEmoji && (
                                    <div className={`absolute top-20 left-0 ${message.sender === 'user' ? '-right-40' : 'right-0'} z-20`}>
                                        <EmojiPicker onEmojiClick={(evt) => onEmojiClick(evt.emoji)} />
                                    </div>
                                )}
                            </div>
                            {message.sender !== 'user' && isHovered.type !== 'user' && isHovered.id === `${index}` && <EmojiEmotionsIcon className="text-white bg-[#bbbfc1] p-0.5 mt-3 ml-2 rounded-full" onClick={() => setEmojiPickerVisible({ type: message.sender, id: `${index}`, isEmoji: !emojiPickerVisible.isEmoji })} />}
                            {message.sender === 'user' && isFirstMessageOfSender(list, index) && <div className="z-10 w-0 h-0 rotate-90 border-t-[15px] border-t-transparent border-l-[15px] border-l-[#d9fdd3]" />}
                        </div>
                    ))}
                </div>
            </div>
            <div className=" h-[7.5%] w-full bg-[#f0f2f5] p-2 flex items-center">
                <div className="w-[5%] flex justify-center"> <svg color="#54656f" height="24" width="24" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>smiley</title><path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path> </svg></div>
                <div className="w-[5%] flex justify-center"><AddIcon className="text-[#54656f]" /></div>
                <div className="bg-white w-[85%] rounded-lg flex items-center"> <TextField id="standard-basic" className="searchField ml-2 py-1" placeholder={'Type a message'} variant="standard" fullWidth InputProps={{ disableUnderline: true, }} value={message} onChange={(evt) => { setMessage(evt?.target?.value) }} /> </div>
                <div className="w-[5%] flex justify-center pl-2">{message ? <SendIcon className="text-[#54656f]" onClick={() => { handleChat(message) }} /> : <MicIcon className="text-[#54656f]" />} </div>
            </div>
        </div>
    )
}

export default ChatDetails;