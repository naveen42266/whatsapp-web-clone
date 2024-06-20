import React, { useState } from "react";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LinearWithValueLabel from "./animatedLinearProgress";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
const Status = () => {
    const [pause, setPause] = useState(false);
    return (
        <div className="h-screen w-full overflow-y-hidden bg-black px-8">
            <div className="grid grid-cols-12 text-white">
                <div className="col-span-4">
                    <div className="p-4"><ArrowBackOutlinedIcon /></div>
                </div>
                <div className="col-span-4">
                    <div className="relative">
                        <img src="https://assets.hongkiat.com/uploads/marvel-wallpapers/mobile/preview/marvel-mobile-wallpaper-1.jpg" className="h-full w-full" alt="" />
                        <div className="absolute top-4 left-4 right-4 ">
                            <LinearWithValueLabel />
                            <div className="flex justify-between py-4">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <AccountCircleIcon className="h-10 w-10" />
                                    </div>
                                    <div>
                                        <div className="text-base">Padmanaban</div>
                                        <div className="text-xs text-slate-300">Today at 8:09 AM</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    {pause ? <PauseOutlinedIcon onClick={() => { setPause(!pause) }} /> : <PlayArrowIcon onClick={() => { setPause(!pause) }} />}
                                    <VolumeDownOutlinedIcon/>
                                    <MoreVertOutlinedIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="p-4 text-end"><CloseOutlinedIcon /></div>
                </div>
            </div>
        </div>
    )
}

export default Status;