import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Checkbox from '@mui/material/Checkbox';

interface PrivacyProps {
    tab: string;
    handleBack: (value: string) => void;
}

const Privacy: React.FC<PrivacyProps> = ({ tab, handleBack }) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className="h-screen w-full">
            <div className="flex items-center gap-5 py-5 px-6 bg-white">
                <ArrowBackIcon fontSize="medium" className="text-[#54656f]" onClick={() => { handleBack('back') }} />
                <div className="text-base capitalize">{tab}</div>
            </div>
            <div className="h-[86%] w-full overflow-y-scroll custom-scroll">
                <div className="bg-white">
                    <div className="text-sm text-[#667781] py-4 px-7">Who can see my personal info</div>
                    <div className="flex justify-between items-center  px-6 py-4 border-b border-[#e9edef]">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Last seen and online</div>
                            <div className="text-sm text-[#54656f]">Everyone</div>
                        </div>
                        <div>
                            <ArrowForwardIosIcon fontSize="small" className="text-[#54656f]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center  px-6 py-4 border-b border-[#e9edef]">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Profile photo</div>
                            <div className="text-sm text-[#54656f]">Everyone</div>
                        </div>
                        <div>
                            <ArrowForwardIosIcon fontSize="small" className="text-[#54656f]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center  px-6 py-4 border-b border-[#e9edef]">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">About</div>
                            <div className="text-sm text-[#54656f]">Everyone</div>
                        </div>
                        <div>
                            <ArrowForwardIosIcon fontSize="small" className="text-[#54656f]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center  px-6 py-4 border-b border-[#e9edef]">
                        <div className="max-w-[85%]">
                            <div className="text-[17px] text-[#111b21]">Read receipts</div>
                            <div className="text-sm text-[#54656f]">If turned off, you won't send or receive read receipts. Read receipts are always sent for group chats.</div>
                        </div>
                        <div>
                            <Checkbox sx={{ color: '#008069' }} color='success' {...label} />
                        </div>
                    </div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className="bg-white">
                    <div className="text-sm text-[#667781] py-4 px-7">Disappearing messages</div>
                    <div className="flex justify-between items-center  px-6 py-4 border-b border-[#e9edef]">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Default message timer</div>
                            <div className="text-sm text-[#54656f]">Off</div>
                        </div>
                        <div>
                            <ArrowForwardIosIcon fontSize="small" className="text-[#54656f]" />
                        </div>
                    </div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className="bg-white">
                    <div className="text-sm text-[#667781] py-4 px-7">Advanced</div>
                    <div className="flex justify-between items-center  px-6 py-4 border-b border-[#e9edef]">
                        <div className="max-w-[85%]">
                            <div className="text-[17px] text-[#111b21]">Disable link previews</div>
                            <div className="text-sm text-[#54656f]">To help protect your IP address from being inferred by third-party websites, previews for the links you share in chats will no longer be generated.<a href="https://faq.whatsapp.com/445453537819972?lang=en" className="text-[#027eb5] text-sm"> Learn more</a></div>
                        </div>
                        <div>
                            <Checkbox sx={{ color: '#008069' }} color='success' {...label} />
                        </div>
                    </div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className="bg-white">
                    <div className="flex justify-between items-center px-6 py-4 border-b border-[#e9edef]">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Groups</div>
                            <div className="text-sm text-[#54656f]">Everyone</div>
                        </div>
                        <div>
                            <ArrowForwardIosIcon fontSize="small" className="text-[#54656f]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4 border-b border-[#e9edef]">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">Blocked contacts</div>
                            <div className="text-sm text-[#54656f]">1</div>
                        </div>
                        <div>
                            <ArrowForwardIosIcon fontSize="small" className="text-[#54656f]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4 border-b border-[#e9edef]">
                        <div className="max-w-[75%]">
                            <div className="text-[17px] text-[#111b21]">App lock</div>
                            <div className="text-sm text-[#54656f]">Require password to unlock WhatsApp</div>
                        </div>
                        <div>
                            <ArrowForwardIosIcon fontSize="small" className="text-[#54656f]" />
                        </div>
                    </div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
            </div>
        </div>
    )
}

export default Privacy;