import React from "react";
import Avatar from "@mui/material/Avatar";
import { whatsappStatusData } from "../../../json";
import moment from "moment";
import LockIcon from '@mui/icons-material/Lock';

class StatusModel{
    user:string | null = null;
    status: string | null = null;
    isStatus: boolean | null = null;
}
interface StatusProps {
    tab: string;
}
const Status: React.FC<StatusProps> = ({ tab }) => {
    function handleFilteredByLatest() {
        if (whatsappStatusData.length === 0) return null;
        const latestTimestamps: { [key: string]: string } = {};

        whatsappStatusData.forEach(message => {
            const sender = message.name;
            const timestamp = message.updated;
            if (!latestTimestamps[sender] || new Date(timestamp) > new Date(latestTimestamps[sender])) {
                latestTimestamps[sender] = timestamp;
            }
        });
        whatsappStatusData.sort((a, b) => {
            const timestampA = latestTimestamps[a.name];
            const timestampB = latestTimestamps[b.name];
            return new Date(timestampB).getTime() - new Date(timestampA).getTime();
        });
        return whatsappStatusData
    }
    
    function handleStatus(user: string ,status: string){
       let statusData = new StatusModel();
       statusData.isStatus = true;
       statusData.user = user;
       statusData.status = status;
       localStorage.setItem('status', JSON.stringify(statusData));
       console.log(user,status)
    }

    return (
        <div className="h-screen w-full">
            <div className="flex justify-between py-3 px-6">
                <div className="text-[22px] font-bold capitalize">{tab}</div>
            </div>
            <div className="h-[87%] w-full overflow-y-scroll custom-scroll">
                <div className="flex justify-items-center items-center px-4 py-3">
                    <div>
                        <Avatar alt="Naveen" src={''} sx={{ width: 40, height: 40 }} />
                    </div>
                    <div className="px-3">
                        <div className="text-base text-[#3b4a54]">My status</div>
                        <div className="text-sm text-[#667781]">No updates</div>
                    </div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className="text-base pt-[30px] pl-8 pb-4 text-[#008069]">RECENT</div>
                {handleFilteredByLatest()?.map((each, index) => {
                    return (
                        <div key={index} className="cursor-pointer hover:bg-[#f5f6f6]" onClick={()=>{handleStatus(each?.name,"https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg")}}>
                            <div className="flex">
                                <div className="w-[15%]"></div>
                                <div className="border-t border-[#e9edef] w-[85%]"></div>
                            </div>
                            <div className="flex justify-items-center items-center px-4 py-3">
                                <div className="border-2 border-[#25d366] rounded-full p-[1px]">
                                    <Avatar alt="Naveen" src={'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg'} sx={{ width: 40, height: 40 }} />
                                </div>
                                <div className="px-3">
                                    <div className="text-base text-[#3b4a54]">{each?.name}</div>
                                    <div className="text-sm text-[#667781]">{moment(each?.updated).calendar()}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
                <div className="text-sm text-[#8696a0] flex justify-center items-center my-[15px] mx-[16px] pt-10"><LockIcon sx={{ height: '18px', width: '16px', paddingRight: '2px' }} />Your status are <div className="text-[#027eb5] px-1 cursor-pointer">end-to-end encrypted</div></div>
            </div>
        </div>
    )
}

export default Status;