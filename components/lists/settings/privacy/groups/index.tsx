import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
interface GroupsProps {
    tab: string;
    handleBack: (value: string) => void;
}

const Groups: React.FC<GroupsProps> = ({ tab, handleBack }) => {
    return (
        <div className="h-full w-full bg-[#f0f2f5]">
            <div className="h-[70%] w-full">
                <div className="bg-white">
                    <div className="flex items-center gap-5 py-5 px-6 ">
                        <ArrowBackIcon fontSize="medium" className="text-[#54656f] cursor-pointer" onClick={() => { handleBack('back') }} />
                        <div className="text-base capitalize">{tab}</div>
                    </div>
                    <div className="text-base text-[#667781] py-4 px-7">Who can add me to groups</div>
                    <div className="text-[#667781] py-3 px-7">
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="everyone"
                                name="radio-buttons-group"
                                className="radioButton"
                            >
                                <FormControlLabel className="pb-2 text-sm" value="everyone" control={<Radio />} label="Everyone" />
                                <FormControlLabel className="pb-2 text-sm" value="myContact" control={<Radio />} label="My Contact" />
                                <FormControlLabel className="pb-2 text-sm" value="myContactExpect...." control={<Radio />} label="My Contact Expect...." />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="text-sm text-[#667781] py-4 px-7">Admins who can't add you to a group will have the option of inviting you privately instead.</div>
                    <div className="text-sm text-[#667781] py-4 px-7">This setting does not apply to community announcement groups. If you're added to a community, you'll always be added to a community announcement group.</div>
                </div>
            </div>
        </div>
    )
}

export default Groups;