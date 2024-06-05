import React, { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
interface SettingsProps {
    tab: string;
    handleProfile: (value: string) => void;
}
const Settings: React.FC<SettingsProps> = ({ tab, handleProfile }) => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
            <div className="flex justify-between py-3 px-6">
                <div className="text-[22px] font-bold capitalize">{tab}</div>
            </div>
            <div className="bg-[#f0f2f5] rounded-md mx-3 mt-2 flex items-center py-1 mb-2">
                <SearchOutlinedIcon fontSize="small" className="mx-3 text-[#54656f]" />
                <TextField id="standard-basic" className="searchField ml-5" placeholder={'Search settings'} variant="standard" fullWidth value={searchTerm} onChange={(evt) => { setSearchTerm(evt.target.value) }} />
                {searchTerm ? <CloseIcon fontSize="small" className="mx-3 text-[#54656f]" onClick={() => setSearchTerm('')} /> : ''}
            </div>
            <div className="flex items-center p-4 hover:bg-[#f5f6f6] cursor-pointer" onClick={() => { handleProfile('profile') }}>
                <div>
                    <Avatar alt="Naveen" src={''} sx={{ width: "80px", height: "80px" }} />
                </div>
                <div className="pl-4">
                    <div className="text-[17px] text-[#111b21]">Naveen</div>
                    <div className="text-sm text-[#54656F]">Take a Deep Breath "</div>
                </div>
            </div>
            <div className="hover:bg-[#f5f6f6] cursor-pointer" onClick={() => { handleProfile('account') }}>
                <div className="flex items-center px-6 py-4 gap-6">
                    <div><AccountCircleIcon fontSize="medium" className="text-[#54656f]" /></div>
                    <div className="text-[17px] text-[#111b21]">Account</div>
                </div>
                <div className="flex">
                    <div className="w-[16%]"></div>
                    <div className="w-[84%] border border-[#e9edef]"></div>
                </div>
            </div>
            <div className="hover:bg-[#f5f6f6] cursor-pointer" onClick={() => { handleProfile('privacy') }}>
                <div className="flex items-center px-6 py-4 gap-6">
                    <div><LockIcon fontSize="medium" className="text-[#54656f]"  /></div>
                    <div className="text-[17px] text-[#111b21]">Privacy</div>
                </div>
                <div className="flex">
                    <div className="w-[16%]"></div>
                    <div className="w-[84%] border border-[#e9edef]"></div>
                </div>
            </div>
            <div className="hover:bg-[#f5f6f6] cursor-pointer"  onClick={() => { handleProfile('chats') }}>
                <div className="flex items-center px-6 py-4 gap-6">
                    <div><svg  color="#54656f" viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>chats-filled</title><path fill-rule="evenodd" clip-rule="evenodd" d="M4.8384 8.45501L5 8.70356V9V17.8333C5 18.7538 5.7462 19.5 6.6667 19.5H20.3333C21.2538 19.5 22 18.7538 22 17.8333V6.66667C22 5.74619 21.2538 5 20.3333 5H2.5927L4.8384 8.45501ZM8 14.5C8 13.6716 8.67157 13 9.5 13H14.5C15.3284 13 16 13.6716 16 14.5C16 15.3284 15.3284 16 14.5 16H9.5C8.67157 16 8 15.3284 8 14.5ZM9.5 8C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11H16.5C17.3284 11 18 10.3284 18 9.5C18 8.67157 17.3284 8 16.5 8H9.5Z" fill="currentColor"></path><path d="M5 8.70356L5.41919 8.43101L5.5 8.55531V8.70356H5ZM4.8384 8.45501L4.41921 8.72756L4.41917 8.7275L4.8384 8.45501ZM2.5927 5L2.17347 5.27249L1.67137 4.5H2.5927V5ZM4.58081 8.9761L4.41921 8.72756L5.25759 8.18247L5.41919 8.43101L4.58081 8.9761ZM4.5 9V8.70356H5.5V9H4.5ZM4.5 17.8333V9H5.5V17.8333H4.5ZM6.6667 20C5.47006 20 4.5 19.0299 4.5 17.8333H5.5C5.5 18.4777 6.02234 19 6.6667 19V20ZM20.3333 20H6.6667V19H20.3333V20ZM22.5 17.8333C22.5 19.0299 21.53 20 20.3333 20V19C20.9777 19 21.5 18.4777 21.5 17.8333H22.5ZM22.5 6.66667V17.8333H21.5V6.66667H22.5ZM20.3333 4.5C21.53 4.5 22.5 5.47005 22.5 6.66667H21.5C21.5 6.02233 20.9777 5.5 20.3333 5.5V4.5ZM2.5927 4.5H20.3333V5.5H2.5927V4.5ZM4.41917 8.7275L2.17347 5.27249L3.01192 4.72751L5.25762 8.18252L4.41917 8.7275ZM9.5 13.5C8.94772 13.5 8.5 13.9477 8.5 14.5H7.5C7.5 13.3954 8.39543 12.5 9.5 12.5V13.5ZM14.5 13.5H9.5V12.5H14.5V13.5ZM15.5 14.5C15.5 13.9477 15.0523 13.5 14.5 13.5V12.5C15.6046 12.5 16.5 13.3954 16.5 14.5H15.5ZM14.5 15.5C15.0523 15.5 15.5 15.0523 15.5 14.5H16.5C16.5 15.6046 15.6046 16.5 14.5 16.5V15.5ZM9.5 15.5H14.5V16.5H9.5V15.5ZM8.5 14.5C8.5 15.0523 8.94772 15.5 9.5 15.5V16.5C8.39543 16.5 7.5 15.6046 7.5 14.5H8.5ZM7.5 9.5C7.5 8.39543 8.39543 7.5 9.5 7.5V8.5C8.94772 8.5 8.5 8.94772 8.5 9.5H7.5ZM9.5 11.5C8.39543 11.5 7.5 10.6046 7.5 9.5H8.5C8.5 10.0523 8.94772 10.5 9.5 10.5V11.5ZM16.5 11.5H9.5V10.5H16.5V11.5ZM18.5 9.5C18.5 10.6046 17.6046 11.5 16.5 11.5V10.5C17.0523 10.5 17.5 10.0523 17.5 9.5H18.5ZM16.5 7.5C17.6046 7.5 18.5 8.39543 18.5 9.5H17.5C17.5 8.94772 17.0523 8.5 16.5 8.5V7.5ZM9.5 7.5H16.5V8.5H9.5V7.5Z" fill="currentColor"></path></svg></div>
                    <div className="text-[17px] text-[#111b21]">Chats</div>
                </div>
                <div className="flex">
                    <div className="w-[16%]"></div>
                    <div className="w-[84%] border border-[#e9edef]"></div>
                </div>
            </div>
            <div className="hover:bg-[#f5f6f6] cursor-pointer" onClick={() => { handleProfile('notifications') }}>
                <div className="flex items-center px-6 py-4 gap-6">
                    <div><NotificationsIcon fontSize="medium" className="text-[#54656f]"/></div>
                    <div className="text-[17px] text-[#111b21]">Notifications</div>
                </div>
                <div className="flex">
                    <div className="w-[16%]"></div>
                    <div className="w-[84%] border border-[#e9edef]"></div>
                </div>
            </div>
            <div className="hover:bg-[#f5f6f6] cursor-pointer" onClick={() => { handleProfile('keyboardShotcuts') }}>
                <div className="flex items-center px-6 py-4 gap-6">
                    <div><svg color="#54656f" viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1"><title>settings-keyboard</title><path fill="currentColor" d="M 10.851562 12.648438 L 13.148438 12.648438 L 12 9 Z M 20 8.691406 L 20 6 C 20 4.898438 19.101562 4 18 4 L 15.308594 4 L 13.410156 2.101562 C 12.628906 1.320312 11.359375 1.320312 10.582031 2.101562 L 8.691406 4 L 6 4 C 4.898438 4 4 4.898438 4 6 L 4 8.691406 L 2.101562 10.589844 C 1.320312 11.371094 1.320312 12.640625 2.101562 13.421875 L 4 15.320312 L 4 18 C 4 19.101562 4.898438 20 6 20 L 8.691406 20 L 10.589844 21.898438 C 11.371094 22.679688 12.640625 22.679688 13.421875 21.898438 L 15.320312 20 L 18 20 C 19.101562 20 20 19.101562 20 18 L 20 15.308594 L 21.898438 13.410156 C 22.679688 12.628906 22.679688 11.359375 21.898438 10.578125 Z M 14.089844 15.398438 L 13.601562 14 L 10.398438 14 L 9.910156 15.398438 C 9.78125 15.761719 9.449219 16 9.070312 16 C 8.449219 16 8.019531 15.390625 8.230469 14.808594 L 10.671875 7.949219 C 10.871094 7.378906 11.398438 7 12 7 C 12.601562 7 13.128906 7.378906 13.339844 7.941406 L 15.78125 14.800781 C 15.988281 15.378906 15.558594 15.988281 14.941406 15.988281 C 14.550781 16 14.21875 15.761719 14.089844 15.398438 Z M 14.089844 15.398438 "></path></svg></div>
                    <div className="text-[17px] text-[#111b21]">Keyboard shortcuts</div>
                </div>
                <div className="flex">
                    <div className="w-[16%]"></div>
                    <div className="w-[84%] border border-[#e9edef]"></div>
                </div>
            </div>
            <div className="hover:bg-[#f5f6f6] cursor-pointer" onClick={() => { handleProfile('help') }}>
                <div className="flex items-center px-6 py-4 gap-6">
                    <div><HelpIcon fontSize="medium" className="text-[#54656f]"/></div>
                    <div className="text-[17px] text-[#111b21]">Help</div>
                </div>
                <div className="flex">
                    <div className="w-[16%]"></div>
                    <div className="w-[84%] border border-[#e9edef]"></div>
                </div>
            </div>
            <div className="hover:bg-[#f5f6f6] cursor-pointer" onClick={() => { handleProfile('logout') }}>
                <div className="flex items-center px-6 py-4 gap-6">
                    <div><LogoutIcon fontSize="medium" className="text-[#ea0038]" /></div>
                    <div className="text-[17px] text-[#ea0038]">Log out</div>
                </div>
                <div className="flex">
                    <div className="w-[16%]"></div>
                    <div className="w-[84%] border border-[#e9edef]"></div>
                </div>
            </div>
        </div>
    )
}

export default Settings;