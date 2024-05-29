import React from "react";
import Avatar from "@mui/material/Avatar";
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
interface ProfileProps {
    tab: string;
    from: string;
    handleBack: (value: string) => void;
}
const Profile: React.FC<ProfileProps> = ({ tab, from, handleBack }) => {
    return (
        <div className="bg-[#f0f2f5] h-full">
            {from == 'tab' ?
                <div className="flex justify-between py-3 px-6 bg-white">
                    <div className="text-[22px] font-bold capitalize">{tab}</div>
                </div>
                : <div className="flex items-center gap-5 py-3 px-6 bg-white">
                    <ArrowBackIcon fontSize="medium" onClick={() => { handleBack('back') }} />
                    <div className="text-base capitalize">{tab}</div>
                </div>}
            <div className="flex flex-row justify-center py-7 cursor-pointer">
                <Avatar alt="Naveen" src={''} sx={{ width: "200px", height: "200px" }} />
            </div>
            <div className="items-center p-4 bg-white">
                <div className="pb-3 text-[#008069]">Your name</div>
                <div className="flex flex-row justify-between">
                    <div className="text-base text-[#3b4a54]">Naveen</div>
                    <div><EditIcon className="text-[#8696a0] cursor-pointer" /></div>
                </div>
            </div>
            <div className="p-5 text-base text-[#54656f]">
                This is not your username or PIN. This name will be visible to your WhatsApp contacts.
            </div>
            <div className="items-center p-4 bg-white">
                <div className="pb-3 text-[#008069]">About</div>
                <div className="flex flex-row justify-between">
                    <div className="text-base text-[#3b4a54]">Take a Deep Breath "</div>
                    <div><EditIcon className="text-[#8696a0] cursor-pointer" /></div>
                </div>
            </div>
        </div>
    )
}

export default Profile;