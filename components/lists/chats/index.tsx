import React, { useRef, useState } from "react";
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
import PushPinIcon from '@mui/icons-material/PushPin';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import moment from "moment";
interface ChatsProps {
    tab: string;
}
const Chats: React.FC<ChatsProps> = ({ tab }) => {
    const tags = ['all', 'unread', 'groups']
    const [searchTerm, setSearchTerm] = useState('')
    const [tag, setTag] = useState('all')
    const [isFocused, setIsFocused] = useState(false);
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

    return (
        <div>
            <div className="sticky top-0">
                <div className="flex justify-between items-center py-3 px-6">
                    <div className="text-[22px] font-bold capitalize">{tab}</div>
                    <div className="relative flex items-center gap-6 mr-1">
                        <div><AddCommentOutlinedIcon /></div>
                        {/* <div><ChatBubbleOutlineIcon className="rotate-90" /></div>
                    <div className="absolute top-0 left-1.5 right-0 bottom-4 pb-4 text-base font-bold">+</div> */}
                        <div><MoreVertIcon /></div>
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
            <div className="grid grid-cols-12 items-center pl-4 py-3 bg-[#f0f2f5] mt-4">
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
            </div>
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
            <div className="grid grid-cols-12 items-center pl-4 pt-3 bg-white hover:bg-[#f5f6f6]">
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
            </div>
            {handleChats()?.participants?.map((each, index) => {
                return (
                    <div key={index} className="grid grid-cols-12 items-center cursor-pointer pl-4 pt-3 bg-white hover:bg-[#f5f6f6]" onMouseEnter={() => setHover({ name: each?.name, hover: true })} onMouseLeave={() => setHover({ name: each?.name, hover: false })}>
                        <div className="col-span-2 items-center">
                            <Avatar alt="Naveen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3FqoYVPZxd_5TH71L8ccH4Mf7CxqWD0OxnPOL8_3bg&s" sx={{ width: 50, height: 50 }} />
                        </div>
                        <div className="col-span-9 items-center">
                            <div className="flex justify-between items-center">
                                <div className="text-[#111b21] text-[17px]">{each?.name}</div>
                                <div className="text-[#667781] text-xs">{moment(ChatDetails?.messages?.find((msg) => msg.sender == each.id)?.timestamp).format('LT')}</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <DoneAllIcon className="text-[#53bdeb]" />
                                    <PhotoCameraIcon className="text-[#8696a0]" />
                                    <div className="text-[#3b4a54]">Photo</div>
                                </div>
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
    )
}

export default Chats;