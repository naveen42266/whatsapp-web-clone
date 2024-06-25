import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
interface DefaultMessageTimerProps {
    tab: string;
    handleBack: (value: string) => void;
}

const DefaultMessageTimer: React.FC<DefaultMessageTimerProps> = ({ tab, handleBack }) => {
    return (
        <div className="h-full w-full bg-[#f0f2f5]">
            <div className="h-[70%] w-full">
                <div className="bg-white">
                    <div className="flex items-center gap-5 py-5 px-6 ">
                        <ArrowBackIcon fontSize="medium" className="text-[#54656f] cursor-pointer" onClick={() => { handleBack('back') }} />
                        <div className="text-base capitalize">{tab}</div>
                    </div>
                    <div className="text-base text-[#667781] py-4 px-7">Start new chats with disappearing messages</div>
                    <div className="text-[#667781] py-3 px-7">
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="off"
                                name="radio-buttons-group"
                                className="radioButton"
                            >
                                <FormControlLabel className="pb-2 text-sm" value="24hours" control={<Radio />} label="24 hours" />
                                <FormControlLabel className="pb-2 text-sm" value="7days" control={<Radio />} label="7 days" />
                                <FormControlLabel className="pb-2 text-sm" value="90days" control={<Radio />} label="90 days" />
                                <FormControlLabel className="pb-2 text-sm" value="off" control={<Radio />} label="off" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="text-sm text-[#667781] py-4 px-7">When turned on, all new individual chats will start with disappearing messages set to the duration you select. This setting will not affect your existing chats.</div>
                    <a href="https://faq.whatsapp.com/673193694148537?lang=en" className="text-sm text-[#027eb5] px-7" target="_blank" rel="noopener noreferrer">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default DefaultMessageTimer;