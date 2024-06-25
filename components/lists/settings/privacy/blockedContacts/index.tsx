import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
interface BlockedContactsProps {
    tab: string;
    handleBack: (value: string) => void;
}

const BlockedContacts: React.FC<BlockedContactsProps> = ({ tab, handleBack }) => {
    return (
        <div className="h-full w-full bg-[#f0f2f5]">
            <div className="h-[70%] w-full">
                <div className="bg-white">
                    <div className="flex items-center gap-5 py-5 px-6 ">
                        <ArrowBackIcon fontSize="medium" className="text-[#54656f] cursor-pointer" onClick={() => { handleBack('back') }} />
                        <div className="text-base capitalize">{tab}</div>
                    </div>
                    <div className="flex items-center gap-5 py-5 px-6 hover:bg-[#f5f6f6] border-b border-slate-200 cursor-pointer">
                        <PersonAddIcon fontSize="medium" className="text-[#54656f]"/>
                        <div className="text-base capitalize">Add blocked contact</div>
                    </div>
                    <div className="flex justify-between items-center py-3 px-6 border-b border-slate-200 hover:bg-[#f5f6f6] cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div><AccountCircleIcon fontSize="large" className="text-[#54656f]"/></div>
                            <div>
                                <div>+91 99999 00000</div>
                                <div className="text-sm text-[#667781]">Hey there! I am using WhatsApp.</div>
                            </div>
                        </div>
                        <div><CloseIcon fontSize="small" className="text-[#667781]"/></div>
                    </div>
                    <div className="text-sm text-[#667781] py-4 px-7">Blocked contacts will no longer be able to call you or send you messages</div>
                </div>
            </div>
        </div>
    )
}

export default BlockedContacts;