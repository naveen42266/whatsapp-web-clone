import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
interface CommunitiesProps {
    tab: string;
}
const Communities: React.FC<CommunitiesProps> = ({ tab }) => {
    return (
        <div>
            <div className="flex justify-between py-3 px-6">
                <div className="text-[22px] font-bold capitalize">{tab}</div>
            </div>
        </div>
    )
}

export default Communities;