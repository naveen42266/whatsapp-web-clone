import React, { useContext, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import { WhatsappContext } from "@/useContext";
interface WallpaperProps {
    tab: string;
    handleBack: (value: string) => void;
}

const Wallpaper: React.FC<WallpaperProps> = ({ tab, handleBack }) => {
    const { whatsapp, setWhatsapp } = useContext<any>(WhatsappContext)
    const [message, setMessage] = useState('')
    const [open, setOpen] = React.useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const colorsList = ["#EFEAE2", "#87CEFA", "#98FB98", "#FF69B4", "#E0FFFF", "#DDA0DD", "#FFD700", "#FFB6C1", "#7CFC00", "#ADD8E6", "#D8BFD8", "#DEB887", "#AFEEEE", "#E6E6FA", "#F0E68C", "#FFDEAD", "#B0E0E6", "#FFFACD", "#FFA07A", "#00CED1", "#4682B4", "#F4A460", "#D3D3D3", "#9ACD32", "#EEDD82", "#EE82EE", "#8FBC8F", "#FFA500"]
    function handleChangeBgColor(key: string, color: string) {
        setWhatsapp((previous: { wallpaper: any; }) => ({
            ...previous,
            wallpaper: {
                ...previous.wallpaper,
                [key]: color,
            },
        }));
    }
    function handleBackWallpaper(value: boolean) {
        setWhatsapp((prevStatus: { wallpaper: any; }) => ({
            ...prevStatus,
            wallpaper: {
                ...prevStatus.wallpaper,
                isWallpaper: value,
            },
        }));
    }
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return ;
        }
        setOpen(false);
    };

    return (
        <div className="h-screen w-full">
            <div className="flex items-center gap-5 py-5 px-6 bg-white">
                <ArrowBackIcon fontSize="medium" className="text-[#54656f] cursor-pointer" onClick={() => { handleBack('back'), handleBackWallpaper(false) }} />
                <div className="text-base capitalize">{tab}</div>
            </div>
            <div className="h-[86%] w-full overflow-y-scroll custom-scroll">
                <div className="bg-white">
                    <div className="flex flex-col justify-between items-center  px-6 py-4">
                        <div className="flex items-center">
                            {whatsapp?.wallpaper?.bgImage != '' ? <Checkbox checked sx={{ color: '#008069' }} color='success' {...label} onClick={() => { handleChangeBgColor('bgImage', ''), handleClick(), setMessage('Chat wallpaper doodles removed') }} /> : <Checkbox sx={{ color: '#008069' }} color='success' {...label} onClick={() => { handleChangeBgColor('bgImage', 'bgImg'), handleClick(), setMessage('Chat wallpaper doodles added') }} />}
                            <div className="text-sm text-[#111b21] max-w-[85%]">Add WhatsApp doodles</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-8 pl-3">
                        {colorsList?.map((each) => {
                            return (
                                <div key={each} onMouseEnter={() => { handleChangeBgColor('hoverColor', each) }} onMouseLeave={() => { handleChangeBgColor('hoverColor', '') }} onClick={() => { handleChangeBgColor('color', each), handleClick(), setMessage('Chat wallpaper set') }} className={`col-span-2 h-[96px] w-[96px] mb-6 text-xs flex items-center justify-center cursor-pointer ${whatsapp?.wallpaper?.color === each ? 'border-4 border-[#009de2]' : 'transition-transform duration-300 ease-in-out transform hover:scale-90'} `} style={{ backgroundColor: each }}>{each == '#EFEAE2' && 'Default'}</div>
                            )
                        })}
                    </div>
                </div>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message={message} />
            </div>
        </div>
    )
}

export default Wallpaper;