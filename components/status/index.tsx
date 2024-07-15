import React, { useState } from "react";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LinearWithValueLabel from "./animatedLinearProgress";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import VolumeMuteOutlinedIcon from '@mui/icons-material/VolumeMuteOutlined';
import SendIcon from '@mui/icons-material/Send';
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { WhatsappContext } from "../../useContext";
const Status = () => {
    const [pause, setPause] = useState(false);
    const [mute, setMute] = useState(false);
    const { whatsapp, setWhatsapp } = React.useContext<any>(WhatsappContext)
    function handleCancelStatus(){
        setWhatsapp((prevStatus: { status: any; }) => ({
            ...prevStatus,
            status: {
                ...prevStatus.status,
                isStatus: false
            }
        }));
    }
    // https://assets.hongkiat.com/uploads/marvel-wallpapers/mobile/preview/marvel-mobile-wallpaper-1.jpg
    return (
        <div className="h-screen w-full overflow-y-hidden relative" style={{ backgroundImage: `url(${whatsapp?.status?.status || 'https://assets.hongkiat.com/uploads/marvel-wallpapers/mobile/preview/marvel-mobile-wallpaper-1.jpg'})` }}>
            <div className="grid grid-cols-12 text-white">
                <div className="col-span-4 relative">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="absolute inset-0 backdrop-blur-sm"></div>
                    <div className="relative p-4">
                        <ArrowBackOutlinedIcon className="cursor-pointer" onClick={()=>{handleCancelStatus()}}/>
                    </div>
                    <div className="relative p-4 h-[80%] flex flex-col justify-center items-start">
                        <ArrowBackIosIcon className="bg-slate-800 pl-3 py-1.5 h-10 w-10 rounded-full cursor-pointer" />
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="relative">
                        <img loading="lazy" src={whatsapp?.status?.status} className="h-screen w-full" alt="" />
                        <div className="absolute top-4 left-4 right-4 ">
                            <LinearWithValueLabel />
                            <div className="flex justify-between py-4">
                                <div className="flex items-center gap-3 cursor-pointer">
                                    <div>
                                        <AccountCircleIcon className="h-10 w-10" />
                                    </div>
                                    <div>
                                        <div className="text-base">{whatsapp?.status?.user}</div>
                                        <div className="text-xs text-slate-300">Today at 8:09 AM</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    {pause ? <PlayArrowIcon onClick={() => { setPause(!pause) }} className="cursor-pointer" /> : <PauseOutlinedIcon onClick={() => { setPause(!pause) }} className="cursor-pointer" />}
                                    {mute ? <VolumeMuteOutlinedIcon onClick={() => { setMute(!mute) }} className="cursor-pointer" /> : <VolumeDownOutlinedIcon onClick={() => { setMute(!mute) }} className="cursor-pointer" />}
                                    <MoreVertOutlinedIcon className="cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40">
                            <div className="text-center text-white">{whatsapp?.status?.content}</div>
                            <div className="h-20"></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 relative">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="absolute inset-0 backdrop-blur-sm"></div>
                    <div className="relative p-4 text-end">
                        <CloseOutlinedIcon className="cursor-pointer" onClick={()=>{handleCancelStatus()}}/>
                    </div>
                    <div className="relative p-4 h-[80%] flex flex-col justify-center items-end">
                        <ArrowForwardIosIcon className="bg-slate-800 px-1.5 py-1.5 h-10 w-10 rounded-full cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 ">
                <div className="flex justify-center items-center gap-2">
                    <svg className="cursor-pointer" color="white" height="24" width="24" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>smiley</title><path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path> </svg>
                    <svg className="cursor-pointer" color="white" height="24" width="24" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>sticker</title><path fill="currentColor" d="M21.799,10.183c-0.002-0.184-0.003-0.373-0.008-0.548c-0.02-0.768-0.065-1.348-0.173-1.939 c-0.124-0.682-0.328-1.296-0.624-1.87c-0.301-0.587-0.695-1.124-1.171-1.594c-0.473-0.469-1.016-0.859-1.614-1.159 c-0.576-0.291-1.196-0.493-1.887-0.615c-0.59-0.106-1.174-0.15-1.961-0.171c-0.318-0.008-3.607-0.012-4.631,0 c-0.798,0.02-1.383,0.064-1.975,0.17C7.066,2.58,6.446,2.781,5.867,3.073c-0.596,0.299-1.139,0.69-1.614,1.16 C3.78,4.7,3.386,5.236,3.082,5.826C2.788,6.398,2.584,7.012,2.459,7.694C2.352,8.285,2.307,8.88,2.286,9.635 C2.278,9.912,2.27,12.517,2.27,12.517c0,0.52,0.008,1.647,0.016,1.925c0.02,0.755,0.066,1.349,0.172,1.938 c0.126,0.687,0.33,1.3,0.624,1.871c0.303,0.59,0.698,1.126,1.173,1.595c0.473,0.469,1.017,0.859,1.614,1.159 c0.578,0.291,1.197,0.492,1.887,0.615c0.085,0.015,0.171,0.029,0.259,0.041c0.479,0.068,0.833,0.087,1.633,0.108 c0.035,0.001,2.118-0.024,2.578-0.035c1.667-0.04,3.261-0.684,4.487-1.811c1.128-1.038,2.129-1.972,2.928-2.737 c1.242-1.19,1.99-2.806,2.097-4.528l0.066-1.052c0.001-0.296,0.001-0.499,0.001-0.668C21.806,10.915,21.8,10.2,21.799,10.183z  M18.604,16.103c-0.79,0.757-1.784,1.684-2.906,2.716c-0.588,0.541-1.292,0.919-2.044,1.154c0.051-0.143,0.116-0.276,0.145-0.433 c0.042-0.234,0.06-0.461,0.067-0.74c0.003-0.105,0.009-0.789,0.009-0.789c0.013-0.483,0.042-0.865,0.107-1.22 c0.069-0.379,0.179-0.709,0.336-1.016c0.16-0.311,0.369-0.595,0.621-0.844c0.254-0.252,0.542-0.458,0.859-0.617 c0.314-0.158,0.65-0.268,1.037-0.337c0.359-0.064,0.733-0.093,1.253-0.106c0,0,0.383,0.001,0.701-0.003 c0.301-0.008,0.523-0.025,0.755-0.066c0.186-0.034,0.348-0.105,0.515-0.169C19.806,14.568,19.311,15.425,18.604,16.103z  M20.267,11.346c-0.028,0.15-0.063,0.263-0.111,0.356c-0.06,0.116-0.128,0.211-0.208,0.29c-0.088,0.087-0.187,0.158-0.296,0.213 s-0.228,0.094-0.371,0.119c-0.141,0.025-0.298,0.037-0.52,0.043c-0.309,0.004-0.687,0.004-0.687,0.004 c-0.613,0.016-1.053,0.049-1.502,0.129c-0.527,0.094-1.002,0.249-1.447,0.473c-0.457,0.229-0.875,0.529-1.241,0.891 c-0.363,0.358-0.667,0.771-0.9,1.224C12.757,15.53,12.6,16,12.505,16.522c-0.081,0.447-0.116,0.895-0.131,1.461 c0,0-0.006,0.684-0.008,0.777c-0.006,0.208-0.018,0.37-0.043,0.511c-0.025,0.136-0.063,0.251-0.117,0.356 c-0.056,0.108-0.127,0.206-0.213,0.291c-0.088,0.087-0.187,0.158-0.296,0.213c-0.072,0.036-0.168,0.063-0.37,0.098 c-0.027,0.005-0.25,0.027-0.448,0.031c-0.021,0-1.157,0.01-1.192,0.009c-0.742-0.019-1.263-0.046-1.668-0.126 c-0.551-0.098-1.031-0.254-1.477-0.479c-0.457-0.229-0.871-0.527-1.233-0.885c-0.363-0.358-0.663-0.766-0.894-1.215 c-0.225-0.436-0.382-0.909-0.482-1.453c-0.09-0.495-0.13-1.025-0.149-1.71c-0.007-0.266-0.011-0.543-0.012-0.847 C3.769,13.262,3.777,9.94,3.784,9.675c0.02-0.685,0.061-1.214,0.151-1.712c0.098-0.54,0.256-1.012,0.481-1.45 C4.647,6.064,4.946,5.657,5.308,5.3c0.363-0.36,0.777-0.657,1.233-0.886c0.447-0.225,0.927-0.382,1.477-0.479 c0.503-0.09,1.022-0.129,1.74-0.149c1.008-0.012,4.26-0.008,4.561,0c0.717,0.019,1.236,0.058,1.737,0.148 c0.552,0.098,1.032,0.254,1.476,0.478c0.458,0.23,0.872,0.527,1.234,0.885c0.364,0.359,0.663,0.766,0.892,1.213 c0.228,0.441,0.385,0.913,0.482,1.453c0.091,0.499,0.131,1.013,0.15,1.712c0.008,0.271,0.014,1.098,0.014,1.235 C20.299,11.085,20.289,11.226,20.267,11.346z"></path></svg>
                    <div className="bg-black opacity-40 w-[60%] rounded-lg flex items-center statusTextField"> <TextField id="standard-basic" autoComplete="off" className="searchField ml-2 py-2" placeholder={'Type a reply...'} variant="standard" fullWidth InputProps={{ disableUnderline: true, }} /> </div>
                    <SendIcon className="text-white h-[34px] w-[34px] cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Status;