import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';
import RefreshIcon from '@mui/icons-material/Refresh';
interface MediaAutoDownloadProps {
    tab: string;
    handleBack: (value: string) => void;
}

const MediaAutoDownload: React.FC<MediaAutoDownloadProps> = ({ tab, handleBack }) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="h-full w-full bg-[#f0f2f5]">
            <div className="h-[70%] w-full">
                <div className="bg-white">
                    <div className="flex items-center gap-5 py-5 px-6 ">
                        <ArrowBackIcon fontSize="medium" className="text-[#54656f] cursor-pointer" onClick={() => { handleBack('back') }} />
                        <div className="text-base capitalize">{tab}</div>
                    </div>
                    <div className="p-4 border-b border-slate-200">
                        {['Photos', 'Audios', 'Videos', 'Documents']?.map((each) => {
                            return (
                                <div className="flex items-center" key={each}>
                                    <Checkbox sx={{ color: '#008069' }} color='success' {...label} />
                                    <div className="text-sm">{each}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-sm text-[#667781] py-4 px-7">Voice messages are always automatically downloaded for the best communication experience.</div>
                    <div className="h-3 w-full bg-[#f0f2f5]"></div>
                    <div className="flex items-center gap-3 p-4 text-[#667781]">
                        <RefreshIcon />
                        <div className="text-base">Use App lock for privacy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaAutoDownload;