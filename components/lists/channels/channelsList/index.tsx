import React, { useContext, useRef, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CloseIcon from '@mui/icons-material/Close';
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VerifiedIcon from '@mui/icons-material/Verified';
import moment from "moment";
import { WhatsappContext } from "../../../../useContext";
import { channels } from "../../../../json";

interface ChannelsListProps {
    tab: string;
    handleBack: (value: string) => void;
    handleChannel: (channel: any) => void;
}
const ChannelsList: React.FC<ChannelsListProps> = ({ tab, handleBack, handleChannel }) => {
    const { whatsapp, setWhatsapp } = useContext<any>(WhatsappContext)
    const tags = ['explore', 'Most active', 'popular', 'new']
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [person, setPerson] = useState<string>('')
    const [tag, setTag] = useState<string>('explore')
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


    return (
        <div className="h-screen w-full">
            <div className="sticky top-0 bg-white border-b border-slate-200">
                <div className="flex items-center gap-5 py-5 px-6 bg-white">
                    <ArrowBackIcon fontSize="medium" className="text-[#54656f] cursor-pointer" onClick={() => { handleBack('back') }} />
                    <div className="text-base capitalize">{tab}</div>
                </div>
                <div className="bg-[#f0f2f5] rounded-md mx-3 mt-2 flex items-center py-1">
                    {isFocused ? <ArrowBackOutlinedIcon fontSize="small" className="mx-3 text-[#00a884]" onClick={() => { setIsFocused(!isFocused) }} /> : <SearchOutlinedIcon fontSize="small" className="mx-3 text-[#54656f]" onClick={() => { setIsFocused(!isFocused), handleDivClick() }} />}
                    <TextField id="standard-basic" autoComplete="off" className="searchField ml-5" placeholder={'Select'} variant="standard" fullWidth value={searchTerm} onChange={(evt) => { setSearchTerm(evt.target.value) }} onFocus={handleFocus} onBlur={handleBlur} inputRef={inputRef} />
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
            <div className="h-[73%] w-full overflow-y-scroll custom-scroll">
                {channels?.map((each, index) => {
                    return (
                        <div key={index} className={`flex items-center cursor-pointer pl-4 ${whatsapp?.tabSection?.user == each.name ? 'bg-[#f0f2f5]' : 'bg-white hover:bg-[#f5f6f6]'} `} onMouseEnter={() => { }} onMouseLeave={() => { }} onClick={() => { handleChannel(each) }}>
                            <div className="">
                                <Avatar src={each?.profile || ''} alt="Naveen" sx={{ width: 50, height: 50 }} />
                            </div>
                            <div className="flex justify-between items-center pl-2 pr-4 w-full border-b border-[#e9edef]">
                                <div className="flex flex-col justify-between">
                                    <div className="flex">
                                        <div className="text-[#111b21] text-[17px]">{each?.name}</div>
                                        <VerifiedIcon className="h-[18px] w-[18px] text-[#009de2] mt-1 mx-1"/>
                                        {/* <svg className="mt-1 mx-1" height="18" width="18" version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><title>psa-verified</title><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg> */}
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
            </div>
        </div>
    )
}

export default ChannelsList;