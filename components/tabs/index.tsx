import React, { useState } from "react";
import MessageIcon from '@mui/icons-material/Message';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

interface TabsComponentProps {
    selectedTab: (tab: string) => void;
}
const TabsComponent: React.FC<TabsComponentProps> = ({ selectedTab }) => {
    const [tabs, setTab] = useState('chats')
    function handleTabs(tab: string) {
        setTab(tab)
        selectedTab(tab)
    }
    return (
        <div className="flex flex-col justify-between items-center h-full w-full">
            <div className="flex flex-col justify-center my-2">
                <div className={`px-2.5 py-2 mb-2 cursor-pointer ${tabs === 'chats' ? 'bg-[#d0d4d6] rounded-full text-center' : ''}`} onClick={() => { handleTabs('chats') }}>
                    <MessageIcon fontSize="medium" className="z-10" />
                </div>
                <div className={`px-2.5 py-2 mb-2 cursor-pointer ${tabs === 'communities' ? 'bg-[#d0d4d6] rounded-full text-center' : ''}`} onClick={() => { handleTabs('communities') }}>
                    <GroupsOutlinedIcon fontSize="medium" />
                </div>
                <div className={`px-2.5 py-2 mb-2 cursor-pointer ${tabs === 'status' ? 'bg-[#d0d4d6] rounded-full text-center' : ''}`} onClick={() => { handleTabs('status') }}>
                    <DonutLargeOutlinedIcon fontSize="medium" />
                </div>
                <div className={`px-2.5 py-2 mb-2 cursor-pointer ${tabs === 'channels' ? 'bg-[#d0d4d6] rounded-full text-center' : ''}`} onClick={() => { handleTabs('channels') }}>
                    <WhatsAppIcon fontSize="medium" />
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="py-3">
                    <SettingsIcon fontSize="medium" />
                </div>
                <div className="py-3">
                    <AccountCircleIcon fontSize="medium" />
                </div>
            </div>
        </div>
    )
}

export default TabsComponent;