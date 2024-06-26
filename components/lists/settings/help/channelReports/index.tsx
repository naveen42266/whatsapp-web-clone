import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
interface ChannelReportsProps {
    tab: string;
    handleBack: (value: string) => void;
}

const ChannelReports: React.FC<ChannelReportsProps> = ({ tab, handleBack }) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="h-full w-full bg-[#f0f2f5]">
            <div className="h-[70%] w-full">
                <div className="bg-white">
                    <div className="flex items-center gap-5 py-5 px-6 ">
                        <ArrowBackIcon fontSize="medium" className="text-[#54656f] cursor-pointer" onClick={() => { handleBack('back') }} />
                        <div className="text-base capitalize">{tab}</div>
                    </div>
                    <div className="h-60"></div>
                    <div className="text-center">
                        <div className="text-lg">No reports</div>
                        <div className="text-[#667781] text-sm px-4 pt-3">If you report a channel, you can see your report and the outcome here.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelReports;