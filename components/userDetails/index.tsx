import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LockIcon from '@mui/icons-material/Lock';
import BlockIcon from '@mui/icons-material/Block';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';
import { WhatsappContext } from '@/useContext';
import { useContext } from 'react';
const UserDetails = () => {
    const { whatsapp, setWhatsapp } = useContext<any>(WhatsappContext)

    function handleUserDetails() {
        setWhatsapp({ ...whatsapp, userProfile: false, channelProfile: false });
    }

    function handleViewProfile() {
        setWhatsapp((prevTabSection: { tabSection: any; }) => ({
            ...prevTabSection,
            tabSection: {
                ...prevTabSection.tabSection,
                isProfile: true
            }
        }));
    }
    return (
        <div className="bg-white h-full">
            <div className="flex items-center gap-5 py-5 px-6 bg-white">
                <CloseIcon fontSize="medium" className="text-[#54656f]" onClick={() => { handleUserDetails() }} />
                <div className="text-base capitalize">Contact Info</div>
            </div>
            <div className="h-[91%] w-full overflow-y-scroll custom-scroll">
                <div className="py-7 flex flex-col justify-center items-center">
                    <Avatar className='cursor-pointer' alt="Naveen" src={whatsapp?.tabSection?.profile ?? ''} sx={{ width: "200px", height: "200px" }}  onClick={() => { whatsapp?.tabSection?.profile != '' ? handleViewProfile() : '' }} />
                    <div className='text-xl pt-3'>{whatsapp?.tabSection?.user}</div>
                    <div className='text-base text-[#8696a0]'>{whatsapp?.tabSection?.mobile}</div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className='py-3 px-7'>
                    <div className='text-base text-[#8696a0]'>About</div>
                    <div className='text-lg'>Journey never ends</div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className='py-3 px-7'>
                    <div className='flex justify-between items-center'>
                        <div className='text-base text-[#8696a0]'>Media, links and docs</div>
                        <div className='flex justify-center items-center gap-1'>
                            <div className='text-lg text-[#8696a0]'>3</div>
                            <div><ArrowForwardIosIcon className='h-4 w-4 text-[#667781]' /></div>
                        </div>
                    </div>
                    <div className='grid grid-cols-11 gap-2 py-3'>
                        <div className='col-span-1' />
                        {[1, 2, 3]?.map((each) => {
                            return (
                                <div key={each} className='col-span-3 h-24 w-24 bg-slate-500 rounded-lg'></div>
                            )
                        })}
                    </div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className='py-3 px-7 border-b border-slate-200'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <StarIcon fontSize='small' className='text-[#667781]' />
                            <div className='text-base'>Starred messages</div>
                        </div>
                        <ArrowForwardIosIcon className='h-4 w-4 text-[#667781]' />
                    </div>
                </div>
                <div className='py-3 px-7'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <NotificationsIcon fontSize='small' className='text-[#667781]' />
                            <div className='text-base'>Mute notifications</div>
                        </div>
                        {/* <ArrowForwardIosIcon className='h-4 w-4 text-[#667781]' /> */}
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>
                <div className='py-3 px-7'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <svg viewBox="0 0 36 36" height="20" color='#667781' fill="none"><title>disappearing</title><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M18 31.5C18.0909 31.5 18.1817 31.4991 18.2722 31.4973C19.1005 31.4809 19.7586 30.7961 19.7422 29.9679C19.7258 29.1396 19.041 28.4815 18.2128 28.4979C18.142 28.4993 18.0711 28.5 18 28.5V31.5ZM18 7.5C18.0711 7.5 18.142 7.5007 18.2128 7.50211C19.041 7.51853 19.7258 6.86039 19.7422 6.03213C19.7586 5.20387 19.1005 4.51912 18.2722 4.5027C18.1817 4.5009 18.0909 4.5 18 4.5V7.5ZM24.5153 6.17374C23.7901 5.77341 22.8776 6.03683 22.4772 6.76211C22.0769 7.48739 22.3403 8.39988 23.0656 8.8002C23.1891 8.86838 23.3111 8.93898 23.4316 9.01195C24.1401 9.44118 25.0625 9.21475 25.4917 8.5062C25.921 7.79765 25.6945 6.87529 24.986 6.44605C24.8311 6.35223 24.6742 6.26144 24.5153 6.17374ZM29.554 11.014C29.1247 10.3055 28.2024 10.079 27.4938 10.5083C26.7852 10.9375 26.5588 11.8599 26.9881 12.5684C27.061 12.6889 27.1316 12.8109 27.1998 12.9344C27.6001 13.6597 28.5126 13.9231 29.2379 13.5228C29.9632 13.1224 30.2266 12.2099 29.8263 11.4847C29.7386 11.3258 29.6478 11.1689 29.554 11.014ZM31.4973 17.7278C31.4809 16.8995 30.7961 16.2414 29.9679 16.2578C29.1396 16.2742 28.4815 16.959 28.4979 17.7872C28.4993 17.858 28.5 17.9289 28.5 18C28.5 18.0711 28.4993 18.142 28.4979 18.2128C28.4815 19.041 29.1396 19.7258 29.9679 19.7422C30.7961 19.7586 31.4809 19.1005 31.4973 18.2722C31.4991 18.1817 31.5 18.0909 31.5 18C31.5 17.9091 31.4991 17.8183 31.4973 17.7278ZM29.8263 24.5153C30.2266 23.7901 29.9632 22.8776 29.2379 22.4772C28.5126 22.0769 27.6001 22.3403 27.1998 23.0656C27.1316 23.1891 27.061 23.3111 26.9881 23.4316C26.5588 24.1401 26.7852 25.0625 27.4938 25.4917C28.2024 25.921 29.1247 25.6945 29.554 24.986C29.6478 24.8311 29.7386 24.6742 29.8263 24.5153ZM24.986 29.554C25.6945 29.1247 25.921 28.2024 25.4917 27.4938C25.0625 26.7852 24.1401 26.5588 23.4316 26.9881C23.3111 27.061 23.1891 27.1316 23.0656 27.1998C22.3403 27.6001 22.0769 28.5126 22.4772 29.2379C22.8776 29.9632 23.7901 30.2266 24.5153 29.8263C24.6742 29.7386 24.8311 29.6478 24.986 29.554Z"></path><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M18.0001 4.5C18 4.5 17.9999 4.5 17.9998 4.5C10.5439 4.5 4.49976 10.5442 4.49976 18C4.49976 25.4558 10.5439 31.5 17.9998 31.5C17.9999 31.5 18 31.5 18.0001 31.5V28.5C18 28.5 17.9999 28.5 17.9998 28.5C12.2008 28.5 7.49976 23.799 7.49976 18C7.49976 12.201 12.2008 7.5 17.9998 7.5C17.9999 7.5 18 7.5 18.0001 7.5V4.5Z"></path><path fill="currentColor" d="M23.3247 12.0107C23.669 11.7525 24.1507 11.7867 24.455 12.091V12.091C24.7593 12.3953 24.7935 12.877 24.5353 13.2213L19.9714 19.3066C19.2589 20.2566 17.8701 20.3553 17.0304 19.5156V19.5156C16.1907 18.6759 16.2894 17.2871 17.2394 16.5746L23.3247 12.0107Z"></path></svg>
                            <div>
                                <div className='text-base'>Disappearing messages</div>
                                <div className='text-base text-[#8696a0]'>Off</div>
                            </div>
                        </div>
                        <ArrowForwardIosIcon className='h-4 w-4 text-[#667781]' />
                    </div>
                </div>
                <div className='py-3 px-7'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <LockIcon fontSize='small' className='text-[#667781]' />
                            <div>
                                <div className='text-base'>Encryption</div>
                                <div className='text-base text-[#8696a0]'>Messages are end-to-end encrypted. Click to verify.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-3 px-7 border-t border-slate-100 hover:bg-slate-50'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2 text-[#ea0038]'>
                            <BlockIcon fontSize='small' />
                            <div className='text-base'>Block {whatsapp?.tabSection?.user}</div>
                        </div>
                    </div>
                </div>
                <div className='py-3 px-7 border-b border-slate-100 hover:bg-slate-50'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2 text-[#ea0038]'>
                            <ThumbDownIcon fontSize='small' />
                            <div className='text-base'>Report {whatsapp?.tabSection?.user}</div>
                        </div>
                    </div>
                </div>
                <div className='py-3 px-7 hover:bg-slate-50'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2 text-[#ea0038]'>
                            <DeleteIcon fontSize='small' />
                            <div className='text-base'>Delete Chat</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;