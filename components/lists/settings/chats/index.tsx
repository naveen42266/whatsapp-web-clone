import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Checkbox from '@mui/material/Checkbox';

class NotificationModel {
    preview: boolean | null = null;
    reaction: boolean | null = null;
}

interface ChatSettingsProps {
    tab: string;
    handleBack: (value: string) => void;
}

const ChatSettings: React.FC<ChatSettingsProps> = ({ tab, handleBack }) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [messageNotification, setMessageNotification] = useState(false)
    const [byMessageNotification, setByMessageNotification] = useState<NotificationModel>({ preview: true, reaction: true })
    return (
        <div className="h-full w-full bg-[#f0f2f5]">
            <div className="h-[70%] w-full">
                <div className="bg-white">
                    <div className="flex items-center gap-5 py-5 px-6 ">
                        <ArrowBackIcon fontSize="medium" onClick={() => { handleBack('back') }} />
                        <div className="text-base capitalize">{tab}</div>
                    </div>
                    <div className="text-sm text-[#667781] py-4 px-7">Display</div>
                    <div className="flex justify-between items-center  px-6 py-4 border-b border-[#e9edef]">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Theme</div>
                            <div className="text-sm text-[#54656f]">System default</div>
                        </div>
                        <div>
                            <ArrowForwardIosIcon fontSize="small" className="text-[#54656f]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center  px-6 py-4">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Wallpaper</div>
                        </div>
                        <div>
                            <ArrowForwardIosIcon fontSize="small" className="text-[#54656f]" />
                        </div>
                    </div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className="bg-white">
                    <div className="text-sm text-[#667781] py-4 px-7">Chat settings</div>
                    <div className="flex justify-between items-center px-6 py-4 border-b border-[#e9edef]">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Media auto-download</div>
                        </div>
                        <div>
                            <ArrowForwardIosIcon fontSize="small" className="text-[#54656f]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center  px-6 py-4">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Spell check</div>
                            <div className="text-sm text-[#54656f]">Check spelling while typing.</div>
                        </div>
                        <div>
                            <Checkbox sx={{ color: '#008069' }} color='success' {...label} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center  px-6 py-4">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Replace text with emoji</div>
                            <div className="text-sm text-[#54656f]">Emoji will replace specific text as you type.</div>
                        </div>
                        <div>
                            <Checkbox sx={{ color: '#008069' }} color='success' {...label} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center  px-6 py-4">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Enter is send</div>
                            <div className="text-sm text-[#54656f]">Enter key will send your message.</div>
                        </div>
                        <div>
                            <Checkbox sx={{ color: '#008069' }} color='success' {...label} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[30%] w-full bg-[#f0f2f5]"></div>
        </div>
    )
}

export default ChatSettings;