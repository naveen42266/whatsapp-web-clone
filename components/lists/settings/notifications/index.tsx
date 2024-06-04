import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';

class NotificationModel {
    preview: boolean | null = null;
    reaction: boolean | null = null;
}

interface NotificationProps {
    tab: string;
    handleBack: (value: string) => void;
}

const Notifications: React.FC<NotificationProps> = ({ tab, handleBack }) => {
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
                    <div className="text-sm text-[#667781] py-4 px-7">Messages</div>
                    <div className="flex justify-between items-center  px-6 py-4 border-b border-[#e9edef]">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Message Notifications</div>
                            <div className="text-sm text-[#54656f]">Show notifications for new messages</div>
                        </div>
                        <div>
                            <Checkbox sx={{ color: '#008069' }} color='success' {...label} value={messageNotification} onChange={() => { setMessageNotification(!messageNotification) }} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center  px-6 pt-4">
                        <div className="max-w-[75%]">
                            <div className={`text-[17px] ${messageNotification ? '' : 'text-[#8696a0]'} `}>Show previews</div>
                        </div>
                        <div>
                            {messageNotification && byMessageNotification?.preview ?
                                <Checkbox sx={{ color: '#8696a0' }} color='success' {...label} checked onChange={() => { setByMessageNotification({ preview: false, reaction: byMessageNotification?.reaction }) }} />
                                : messageNotification && !byMessageNotification?.preview ?
                                    <Checkbox sx={{ color: '#8696a0' }} {...label} onChange={() => { setByMessageNotification({ preview: true, reaction: byMessageNotification?.reaction }) }} />
                                    : <div className="h-5 w-5 mr-3 bg-[#f0f2f5] rounded-sm my-[11px] "></div>
                            }
                        </div>
                    </div>
                    <div className="flex justify-between items-center  px-6 py-4">
                        <div className="max-w-[75%]">
                            <div className={`text-[17px] ${messageNotification ? '' : 'text-[#8696a0]'} `}>Show reaction notifications</div>
                        </div>
                        <div>
                            {messageNotification && byMessageNotification?.reaction ?
                                <Checkbox sx={{ color: '#8696a0' }} color='success' {...label} checked onChange={() => { setByMessageNotification({ preview: byMessageNotification?.preview, reaction: false }) }} />
                                : messageNotification && !byMessageNotification?.reaction ?
                                    <Checkbox sx={{ color: '#8696a0' }} {...label} onChange={() => { setByMessageNotification({ preview: byMessageNotification?.preview, reaction: true }) }} />
                                    : <div className="h-5 w-5 mr-3 bg-[#f0f2f5] rounded-sm my-[11px] "></div>
                            }
                        </div>
                    </div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className="bg-white">
                    <div className="flex justify-between items-center  px-6 py-4">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Background sync</div>
                            <div className="text-sm text-[#54656f]">Get faster performance by syncing messages in the background.</div>
                        </div>
                        <div>
                            <Checkbox sx={{ color: '#008069' }} color='success' {...label} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center  px-6 py-4">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Sounds</div>
                            <div className="text-sm text-[#54656f]">Play sounds for incoming messages</div>
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

export default Notifications;