import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
interface RequestAccountInfoProps {
    tab: string;
    handleBack: (value: string) => void;
}

const RequestAccountInfo: React.FC<RequestAccountInfoProps> = ({ tab, handleBack }) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className="h-full w-full bg-[#f0f2f5]">
            <div className="h-[70%] w-full">
                <div className="bg-white">
                    <div className="flex items-center gap-5 py-5 px-6 ">
                        <ArrowBackIcon fontSize="medium" className="text-[#54656f]" onClick={() => { handleBack('back') }} />
                        <div className="text-base capitalize">{tab}</div>
                    </div>
                    <div className="text-sm text-[#667781] py-4 px-7">Account information</div>
                    <div className="flex p-5 border-y border-gray-200 hover:bg-[#f5f6f6] cursor-pointer">
                        <DescriptionIcon className="mr-3 text-[#a0a4a6]" />
                        <div>Request report</div>
                    </div>
                    <div className="text-sm text-[#54656f] px-7 py-3">Create a report of your WhatsApp account information and settings, which you can access or port to another app. This report does not include your messages.<a className="text-[#027eb5] pl-2" href="https://faq.whatsapp.com/526463418847093/?cms_platform=iphone&lang=en" target="_blank" rel="noopener noreferrer">Learn more</a></div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className="bg-white">
                    <div className="text-sm text-[#667781] py-4 px-7">Channels activity</div>
                    <div className="flex items-center px-5 py-3 border-y border-gray-200 hover:bg-[#f5f6f6] cursor-pointer">
                        <DownloadIcon className="mr-3 text-[#a0a4a6]" />
                        <div>
                            <div className="text-sm">Download report</div>
                            <div className="text-sm text-[#667781]">June 16, 2024 · 34 kB</div>
                        </div>
                    </div>
                    <div className="flex p-5 border-y border-gray-200 hover:bg-[#f5f6f6] cursor-pointer">
                        <DeleteOutlinedIcon className="mr-3 text-[#a0a4a6]" />
                        <div>Delete and request new report</div>
                    </div>
                    <div className="text-[#8696a0] p-5">Your report is available to download until July 16, 2024</div>
                </div>
            </div>
        </div>
    )
}

export default RequestAccountInfo;