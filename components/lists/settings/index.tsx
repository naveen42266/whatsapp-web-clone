import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
interface SettingsProps {
    tab: string;
}
const Settings: React.FC<SettingsProps> = ({ tab }) => {
    return (
        <div>
            <div className="flex justify-between py-3 px-6">
                <div className="text-[22px] font-bold capitalize">{tab}</div>
            </div>
        </div>
    )
}

export default Settings;