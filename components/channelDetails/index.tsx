import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PublicIcon from '@mui/icons-material/Public';
import DialpadIcon from '@mui/icons-material/Dialpad';
import { WhatsappContext } from '@/useContext';
import { useContext } from 'react';
const ChannelDetails = () => {
    const { whatsapp, setWhatsapp } = useContext<any>(WhatsappContext)

    function handleUserDetails() {
        setWhatsapp({ ...whatsapp, channelProfile: false });
    }
    return (
        <div className="bg-white h-full">
            <div className="flex items-center gap-5 py-5 px-6 bg-white">
                <CloseIcon fontSize="medium" className="text-[#54656f]" onClick={() => { handleUserDetails() }} />
                <div className="text-base capitalize">Channel Info</div>
            </div>
            <div className="h-[91%] w-full overflow-y-scroll custom-scroll">
                <div className="py-7 flex flex-col justify-center items-center">
                    <Avatar className='cursor-pointer' alt="Naveen" src={''} sx={{ width: "200px", height: "200px" }} />
                    <div className='text-xl pt-3'>{whatsapp?.tabSection?.user}</div>
                    <div className='text-base text-[#8696a0] flex justify-center items-center'>Channel <div className="w-0.5 h-0.5 mx-1.5 bg-[#8696a0] rounded-full"></div> {whatsapp?.tabSection?.followers} followers</div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className='py-3 px-7'>
                    <div className='text-base text-[#8696a0]'>Welcome to your {whatsapp?.tabSection?.user} channel</div>
                    <div className='text-base'>Created 6/21/2024 at 5:11 PM</div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className='py-3 px-7'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-4'>
                            <PublicIcon fontSize='small' className='text-[#667781]' />
                            <div>
                                <div className='text-base'>Public channel</div>
                                <div className='text-base text-[#8696a0]'>Anyone can find this channel and see what's been shared.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-3 px-7'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-4'>
                            <DialpadIcon fontSize='small' className='text-[#667781]' />
                            <div>
                                <div className='text-base'>Profile privacy</div>
                                <div className='text-base text-[#8696a0]'>This channel has added privacy for your profile and phone number. Click to learn more.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className='py-3 px-7 border-b border-slate-100 hover:bg-slate-50'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2 text-[#ea0038]'>
                            <ThumbDownIcon fontSize='small' />
                            <div className='text-base'>Report channel</div>
                        </div>
                    </div>
                </div>
                <div className="h-10 w-full bg-[#f0f2f5]"></div>
            </div>
        </div>
    )
}

export default ChannelDetails;