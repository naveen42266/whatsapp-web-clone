import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';

interface AppLockProps {
    tab: string;
    handleBack: (value: string) => void;
}

const AppLock: React.FC<AppLockProps> = ({ tab, handleBack }) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="h-full w-full bg-[#f0f2f5]">
            <div className="h-[70%] w-full">
                <div className="bg-white">
                    <div className="flex items-center gap-5 py-5 px-6 ">
                        <ArrowBackIcon fontSize="medium" className="text-[#54656f] cursor-pointer" onClick={() => { handleBack('back') }} />
                        <div className="text-base capitalize">{tab}</div>
                    </div>
                    <div className="text-base text-[#667781] py-4 px-7">Use App lock for privacy</div>
                    <div className="text-sm text-[#667781] py-4 px-7">When enabled, you'll need to enter your password to unlock WhatsApp Web. Notifications will not appear when your app is locked. App lock will be turned off when you log out.<a href="https://faq.whatsapp.com/673193694148537?lang=en" className="text-sm text-[#027eb5] pl-1" target="_blank" rel="noopener noreferrer">Learn more</a></div>
                    <div className="flex justify-between items-center py-4 px-7">
                        <div className="text-sm">App lock</div>
                        <div>
                            <Checkbox sx={{ color: '#008069' }} color='success' {...label} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppLock;