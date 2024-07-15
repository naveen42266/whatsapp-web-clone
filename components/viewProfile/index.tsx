import React from 'react';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
interface ViewProfileProps {
    name: string,
    profile: string,
    handleClose: (value: boolean) => void,
}
const ViewProfile: React.FC<ViewProfileProps> = ({ name, profile, handleClose }) => {

    return (
        <div className='h-full w-full'>
            <div className='flex justify-between h-[10%] w-full px-6 py-4'>
                <div className="flex gap-4">
                    <Avatar className='cursor-pointer' alt="profile" src={profile || ''} sx={{ width: 40, height: 40 }} />
                    <div className='text-lg pt-2'>{name || 'Profile'}</div>
                </div>
                <IconButton aria-label="close" size="large" onClick={() => { handleClose(false) }} >
                    <CloseIcon fontSize='medium' />
                </IconButton>
            </div>
            <div className='flex h-[90%] w-full'>
                <div className='w-[25%]'></div>
                <div className='w-[50%] h-[95%]'><img src={profile || "https://media-tir3-2.cdn.whatsapp.net/v/t61.24694-24/425290466_7377472575642314_1339867965015118829_n.jpg?ccb=11-4&oh=01_Q5AaIGQlA-8k8ryccFV_lzeje04xqvtuWqQENSKdQYbjffej&oe=6690ABD4&_nc_sid=e6ed6c&_nc_cat=108"} className='w-full h-full object-contain' alt="profile" /></div>
                <div className='w-[25%]'></div>
            </div>
        </div>
    )
}
export default ViewProfile;