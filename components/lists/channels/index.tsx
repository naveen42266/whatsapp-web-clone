import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
interface ChannelsProps {
    tab: string;
}
const Channels: React.FC<ChannelsProps> = ({ tab }) => {
    return (
        <div>
            <div className="flex justify-between py-3 px-6">
                <div className="text-[22px] font-bold capitalize">{tab}</div>
                <div className="relative flex gap-6">
                    <div><ChatBubbleOutlineIcon /></div>
                    <div className="absolute top-0 left-1.5 right-0 bottom-4 pb-4 text-base font-bold">+</div>
                    <div><MoreVertIcon /></div>
                </div>
            </div>
        </div>
    )
}

export default Channels;