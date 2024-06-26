import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';
interface WallpaperProps {
    tab: string;
    handleBack: (value: string) => void;
}

const Wallpaper: React.FC<WallpaperProps> = ({ tab, handleBack }) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const colorsList = [
        "#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#33FFA6",
        "#A633FF", "#FF5733", "#FFD700", "#DC143C", "#00FF00",
        "#0000FF", "#4B0082", "#8B4513", "#A52A2A", "#5F9EA0",
        "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", "#FFF8DC",
        "#DC143C", "#00FFFF", "#00008B", "#B8860B", "#A9A9A9",
        "#006400", "#BDB76B", "#8B008B", "#556B2F", "#FF8C00"
      ]
    const colors = Math.ceil(colorsList.length / 4);

    return (
        <div className="h-screen w-full">
            <div className="flex items-center gap-5 py-5 px-6 bg-white">
                <ArrowBackIcon fontSize="medium" className="text-[#54656f]" onClick={() => { handleBack('back') }} />
                <div className="text-base capitalize">{tab}</div>
            </div>
            <div className="h-[86%] w-full overflow-y-scroll custom-scroll">
                <div className="bg-white">
                    <div className="flex flex-col justify-between items-center  px-6 py-4">
                        <div className="flex items-center">
                            <Checkbox checked sx={{ color: '#008069' }} color='success' {...label} />
                            <div className="text-sm text-[#111b21] max-w-[85%]">Add WhatsApp doodles</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-8 pl-3">
                        {colorsList?.map((each) => {
                            return (
                                <div key={each} className="col-span-2 h-[96px] w-[96px] mb-6 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-90" style={{backgroundColor:each}}></div>
                            )
                        })}
                        {/* {Array.from({ length: colors }).map((_, colorIndex) => (
                            <React.Fragment key={colorIndex}>
                                <div className="col-span-1"></div>
                                {colorsList.slice(colorIndex * 4, colorIndex * 4 + 4).map((each, index) => (
                                    <div key={each} className={`col-span-2 h-[96px] w-[96px] hover:h-[90px] hover:w-[90px] mb-6 flex items-center`} style={{backgroundColor:each}}></div>
                                ))}
                            </React.Fragment>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallpaper;