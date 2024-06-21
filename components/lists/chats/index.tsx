import React, { useContext, useRef, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddCommentIcon from '@mui/icons-material/AddComment';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CloseIcon from '@mui/icons-material/Close';
import TextField from "@mui/material/TextField";
import { ChatDetails } from "../../../json";
import Avatar from "@mui/material/Avatar";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VideocamIcon from '@mui/icons-material/Videocam';
import DescriptionIcon from '@mui/icons-material/Description';
import PushPinIcon from '@mui/icons-material/PushPin';
import moment from "moment";
import { WhatsappContext } from "@/pages/whatsapp-context";
interface ChatsProps {
    tab: string;
    handleChatUser: (user: string) => void;
}
const Chats: React.FC<ChatsProps> = ({ tab, handleChatUser }) => {
    const { whatsapp, setWhatsapp } = useContext<any>(WhatsappContext)
    const tags = ['all', 'unread', 'groups']
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [person, setPerson] = useState<string>('')
    const [tag, setTag] = useState<string>('all')
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [hover, setHover] = useState({ 'hover': false, 'name': '' });
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDivClick = () => {
        if (inputRef?.current) {
            inputRef?.current?.focus();
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSelectedTag = (value: string) => {
        if (tag === value) {
            return true;
        }
        return false;
    }

    const handlePlaceholder = () => {
        if (tag === 'unread') {
            return 'Select unread chats'
        }
        else if (tag === 'groups') {
            return 'Select group chats'
        }
        return 'Select'
    }

    function handleChats() {
        const latestTimestamps: { [key: string]: string } = {};
        ChatDetails.messages.forEach(message => {
            const sender = message.sender;
            const timestamp = message.timestamp;
            if (!latestTimestamps[sender] || new Date(timestamp) > new Date(latestTimestamps[sender])) {
                latestTimestamps[sender] = timestamp;
            }
        });
        ChatDetails.participants.sort((a, b) => {
            const timestampA = latestTimestamps[a.id];
            const timestampB = latestTimestamps[b.id];
            return new Date(timestampB).getTime() - new Date(timestampA).getTime();
        });
        return ChatDetails;
    }

    function handleFilterRecentChat(id: string) {
        // Filter messages by sender ID
        const filtered = ChatDetails.messages.filter((msg) => msg.sender === id);

        // Check if there is more than one message from this sender
        if (filtered.length > 1) {
            // Find the most recent message
            const recentMessage = filtered.reduce((latest, current) => {
                return new Date(latest.timestamp) > new Date(current.timestamp) ? latest : current;
            });
            if (recentMessage.type === 'text') {
                return <div className="flex items-center gap-1"><div className="text-[#3b4a54]">{recentMessage?.content as string}</div></div>
            }
            else if (recentMessage.type === 'photo') {
                return <div className="flex items-center gap-1">
                    <DoneAllIcon className="text-[#53bdeb]" />
                    <PhotoCameraIcon className="text-[#8696a0]" />
                    <div className="text-[#3b4a54]">Photo</div>
                </div>
            }
            else if (recentMessage.type === 'video') {
                return <div className="flex items-center gap-1">
                    <DoneAllIcon className="text-[#53bdeb]" />
                    <VideocamIcon className="text-[#8696a0]" />
                    <div className="text-[#3b4a54]">Video</div>
                </div>
            }
            else if (recentMessage.type === 'audio') {
                return <div className="flex items-center gap-1">
                    <DoneAllIcon className="text-[#53bdeb]" />
                    <DescriptionIcon className="text-[#8696a0]" />
                    <div className="text-[#3b4a54]">Audio</div>
                </div>
            }
        }

        // Return the single message or null if no messages are found
        // return filtered.length === 1 ? filtered[0] : null;
        if (filtered.length === 1 && filtered[0].type === 'text') {
            return <div className="flex items-center gap-1"><div className="text-[#3b4a54]">{filtered[0]?.content as string}</div></div>
        }
        else if (filtered.length === 1 && filtered[0].type === 'photo') {
            return <div className="flex items-center gap-1">
                <DoneAllIcon className="text-[#53bdeb]" />
                <PhotoCameraIcon className="text-[#8696a0]" />
                <div className="text-[#3b4a54]">Photo</div>
            </div>
        }
        else if (filtered.length === 1 && filtered[0].type === 'video') {
            return <div className="flex items-center gap-1">
                <DoneAllIcon className="text-[#53bdeb]" />
                <VideocamIcon className="text-[#8696a0]" />
                <div className="text-[#3b4a54]">Video</div>
            </div>
        }
        else if (filtered.length === 1 && filtered[0].type === 'audio') {
            return <div className="flex items-center gap-1">
                <DoneAllIcon className="text-[#53bdeb]" />
                <DescriptionIcon className="text-[#8696a0]" />
                <div className="text-[#3b4a54]">Audio</div>
            </div>
        }
        return <div className="flex items-center gap-1"></div>
    }

    return (
        <div className="h-screen w-full">
            <div className="sticky top-0 bg-white">
                <div className="flex justify-between items-center py-3 px-6">
                    <div className="text-[22px] font-bold capitalize">{tab}</div>
                    <div className="relative flex items-center gap-6 mr-1">
                        <div className="cursor-pointer"><svg color="#54656f" height="24" width="24" fill="none"><title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="currentColor"></path></svg></div>
                        <div className="cursor-pointer"><MoreVertIcon className="text-[#54656f]" /></div>
                    </div>
                </div>
                <div className="bg-[#f0f2f5] rounded-md mx-3 mt-2 flex items-center py-1">
                    {isFocused ? <ArrowBackOutlinedIcon fontSize="small" className="mx-3 text-[#00a884]" onClick={() => { setIsFocused(!isFocused) }} /> : <SearchOutlinedIcon fontSize="small" className="mx-3 text-[#54656f]" onClick={() => { setIsFocused(!isFocused), handleDivClick() }} />}
                    <TextField id="standard-basic" className="searchField ml-5" placeholder={isFocused ? '' : handlePlaceholder()} variant="standard" fullWidth value={searchTerm} onChange={(evt) => { setSearchTerm(evt.target.value) }} onFocus={handleFocus} onBlur={handleBlur} inputRef={inputRef} />
                    {searchTerm ? <CloseIcon fontSize="small" className="mx-3 text-[#54656f]" onClick={() => setSearchTerm('')} /> : ''}
                </div>
                <div className="flex items-center gap-1.5 my-2 mx-4">
                    {tags?.map((each, index) => {
                        return (
                            <span key={index} className={`${handleSelectedTag(each) ? 'bg-[#e7fce3] text-[#008069]' : "bg-[#f0f2f5] text-[#54656f]"} rounded-full text-[15px] font-normal text-center capitalize cursor-pointer py-1 px-3`} onClick={() => { setTag(each) }}>{each}</span>
                        )
                    })}
                </div>
            </div>
            {/* <div className="grid grid-cols-12 items-center pl-4 py-3 bg-[#f0f2f5] mt-4">
                <div className="col-span-2 items-center">
                    <Avatar alt="Naveen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3FqoYVPZxd_5TH71L8ccH4Mf7CxqWD0OxnPOL8_3bg&s" sx={{ width: 50, height: 50 }} />
                </div>
                <div className="col-span-9 items-center border-b border-[#e9edef]">
                    <div className="flex justify-between items-center">
                        <div className="text-[#111b21] text-[17px]">Me (You)</div>
                        <div className="text-[#667781] text-xs">6.50 PM</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <DoneAllIcon className="text-[#53bdeb]" />
                            <PhotoCameraIcon className="text-[#8696a0]" />
                            <div className="text-[#3b4a54]">Photo</div>
                        </div>
                        <div><PushPinIcon className="text-[#8696a0]" /></div>
                    </div>
                </div>
            </div> */}
            {/* <div className="grid grid-cols-12 items-center pl-4 pt-3 bg-white hover:bg-[#f5f6f6]" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className="col-span-2 items-center">
                    <Avatar alt="Naveen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3FqoYVPZxd_5TH71L8ccH4Mf7CxqWD0OxnPOL8_3bg&s" sx={{ width: 50, height: 50 }} />
                </div>
                <div className="col-span-9 items-center">
                    <div className="flex justify-between items-center">
                        <div className="text-[#111b21] text-[17px]">Sam</div>
                        <div className="text-[#667781] text-xs">6.40 PM</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <DoneAllIcon className="text-[#53bdeb]" />
                            <PhotoCameraIcon className="text-[#8696a0]" />
                            <div className="text-[#3b4a54]">Photo</div>
                        </div>
                        {hover ? <div><KeyboardArrowDownIcon className="text-[#8696a0]" /></div> : <div></div>}
                    </div>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-10 pt-4 border-b border-[#e9edef]"></div>
            </div> */}
            {/* <div className="grid grid-cols-12 items-center pl-4 pt-3 bg-white hover:bg-[#f5f6f6]">
                <div className="col-span-2 items-center">
                    <Avatar alt="Naveen" src="" sx={{ width: 50, height: 50 }} />
                </div>
                <div className="col-span-9 items-center">
                    <div className="flex justify-between items-center">
                        <div className="text-[#111b21] text-[17px]">Nithish</div>
                        <div className="text-[#667781] text-xs">6.34 PM</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <div className="text-[#3b4a54]">Ok da</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-10 pt-4 border-b border-[#e9edef]"></div>
            </div> */}
            <div className="h-[74%] w-full overflow-y-scroll custom-scroll">
                {handleChats()?.participants?.map((each, index) => {
                    return (
                        <div key={index} className={`grid grid-cols-12 items-center cursor-pointer pl-4 pt-3 ${whatsapp?.tabSection?.user==each.name ? 'bg-[#f0f2f5]' : 'bg-white hover:bg-[#f5f6f6]'} `} onMouseEnter={() => setHover({ name: each?.name, hover: true })} onMouseLeave={() => setHover({ name: each?.name, hover: false })} onClick={() => { handleChatUser(each?.name),setPerson(each?.name) }}>
                            <div className="col-span-2 items-center">
                                <Avatar alt="Naveen" src={ChatDetails?.messages?.find((msg) => msg.sender === each.id)?.profile ?? ''} sx={{ width: 50, height: 50 }} />
                            </div>
                            <div className="col-span-9 items-center">
                                <div className="flex justify-between items-center">
                                    <div className="text-[#111b21] text-[17px]">{each?.name}</div>
                                    <div className="text-[#667781] text-xs">{moment(ChatDetails?.messages?.find((msg) => msg.sender === each.id)?.timestamp ?? 0).format('LT')}</div>
                                </div>
                                <div className="flex justify-between items-center">
                                    {handleFilterRecentChat(each.id)}
                                    <div className="flex">
                                        {/* <PushPinIcon className="text-[#8696a0]" /> */}
                                        <KeyboardArrowDownIcon className={`${hover?.name == each?.name && hover?.hover ? 'block' : 'hidden'} text-[#8696a0]`} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2"></div>
                            <div className="col-span-10 pt-4 border-b border-[#e9edef]"></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Chats;