import React from "react";
import GroupsIcon from '@mui/icons-material/Groups';

interface CommunitiesProps {
    tab: string;
}
const Communities: React.FC<CommunitiesProps> = ({ tab }) => {
    return (
        <div className="h-screen w-full">
            <div className="flex justify-between py-3 px-6">
                <div className="text-[22px] font-bold capitalize">{tab}</div>
            </div>
            <div className="h-[87%] w-full overflow-y-scroll custom-scroll">
                <div className="flex justify-items-center items-center px-4 py-3">
                    <div className="bg-[#00a884] rounded-xl text-white p-2">
                        <GroupsIcon className="text-3xl" />
                    </div>
                    <div className="px-3">
                        <div className="text-base text-[#3b4a54]">New Community</div>
                    </div>
                </div>
                <div className="h-3 w-full bg-[#f0f2f5]"></div>
                <div className="flex justify-items-center items-center px-4 py-3 border-b border-[#e9edef]">
                    <div className="bg-[#00a884] rounded-xl text-white p-2">
                        <GroupsIcon className="text-3xl" />
                    </div>
                    <div className="px-3">
                        <div className="text-base text-[#3b4a54]">engineerHUB - "Your ONE STOP SOLUTION"</div>
                    </div>
                </div>
                <div className="flex items-center cursor-pointer pl-4 py-3 bg-white hover:bg-[#f5f6f6]">
                    <div className="items-center bg-[#d9fdd3] text-[#008069] rounded-xl mr-4">
                        <svg viewBox="0 0 212 212" height="40" width="40" preserveAspectRatio="xMidYMid meet" fill="currentColor"><title>announcement-speaker</title><path fillRule="evenodd" clipRule="evenodd" d="M89.5827 83.703C89.5827 82.9635 89.9699 82.278 90.6032 81.8962L119.16 64.6781C122.059 62.8863 125.902 64.8549 125.902 68.1319V137.101C125.902 140.308 122.206 142.288 119.301 140.639L90.6507 124.368C89.9905 123.993 89.5827 123.293 89.5827 122.534V83.703ZM46 96.2616C46 88.6676 52.5042 82.5114 60.5276 82.5114H80.209C81.3743 82.5114 82.3189 83.4561 82.3189 84.6213V121.652C82.3189 122.817 81.3743 123.762 80.209 123.762H75.6957L82.4837 147.779C83.0001 149.606 81.9267 151.465 80.0861 151.931L72.2787 153.908C70.4381 154.374 68.5274 153.271 68.0111 151.443L60.2202 123.878C60.2089 123.838 60.1983 123.798 60.1886 123.758C52.3218 123.588 46 117.498 46 110.012V96.2616ZM161.187 71.6946C160.374 70.6624 158.814 70.5245 157.751 71.3468L154.102 74.1721C153.034 74.9983 152.876 76.4799 153.682 77.5251C159.328 84.8487 162.362 93.7105 162.303 102.817C162.244 111.919 159.096 120.741 153.361 127.996C152.536 129.039 152.66 130.516 153.704 131.345L157.352 134.241C158.396 135.07 159.964 134.936 160.799 133.901C167.981 125.002 171.926 114.114 171.999 102.874C172.072 91.624 168.263 80.6813 161.187 71.6946ZM145.914 81.0162C145.113 79.9754 143.55 79.8499 142.494 80.6798L138.867 83.5311C137.806 84.3649 137.664 85.8456 138.444 86.9079C141.82 91.5035 143.641 96.9856 143.626 102.62C143.612 108.251 141.767 113.72 138.373 118.298C137.582 119.364 137.702 120.84 138.746 121.669L142.394 124.564C143.438 125.393 145.009 125.261 145.823 124.211C150.664 117.973 153.303 110.423 153.323 102.642C153.342 94.8522 150.735 87.2808 145.914 81.0162Z"></path></svg>
                    </div>
                    <div className="w-[80%]">
                        <div className="flex flex-row justify-between items-center">
                            <div className="text-[#111b21] text-[17px]">{"Announcement"}</div>
                            <div className="text-[#667781] text-xs">{'5/20/2024'}</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-[#667781]">~Ajay</div>
                            <div className="bg-[#25d366] h-[10px] w-[10px] rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-[17%]"></div>
                    <div className="w-[83%] border-b border-[#e9edef]"></div>
                </div>
                <div className="flex items-center cursor-pointer pl-4 py-3 bg-white hover:bg-[#f5f6f6]">
                    <div className="items-center bg-[#d9fdd3] text-[#008069] rounded-xl mr-4">
                        <svg viewBox="0 0 212 212" height="40" width="40" preserveAspectRatio="xMidYMid meet" fill="currentColor"><title>announcement-speaker</title><path fillRule="evenodd" clipRule="evenodd" d="M89.5827 83.703C89.5827 82.9635 89.9699 82.278 90.6032 81.8962L119.16 64.6781C122.059 62.8863 125.902 64.8549 125.902 68.1319V137.101C125.902 140.308 122.206 142.288 119.301 140.639L90.6507 124.368C89.9905 123.993 89.5827 123.293 89.5827 122.534V83.703ZM46 96.2616C46 88.6676 52.5042 82.5114 60.5276 82.5114H80.209C81.3743 82.5114 82.3189 83.4561 82.3189 84.6213V121.652C82.3189 122.817 81.3743 123.762 80.209 123.762H75.6957L82.4837 147.779C83.0001 149.606 81.9267 151.465 80.0861 151.931L72.2787 153.908C70.4381 154.374 68.5274 153.271 68.0111 151.443L60.2202 123.878C60.2089 123.838 60.1983 123.798 60.1886 123.758C52.3218 123.588 46 117.498 46 110.012V96.2616ZM161.187 71.6946C160.374 70.6624 158.814 70.5245 157.751 71.3468L154.102 74.1721C153.034 74.9983 152.876 76.4799 153.682 77.5251C159.328 84.8487 162.362 93.7105 162.303 102.817C162.244 111.919 159.096 120.741 153.361 127.996C152.536 129.039 152.66 130.516 153.704 131.345L157.352 134.241C158.396 135.07 159.964 134.936 160.799 133.901C167.981 125.002 171.926 114.114 171.999 102.874C172.072 91.624 168.263 80.6813 161.187 71.6946ZM145.914 81.0162C145.113 79.9754 143.55 79.8499 142.494 80.6798L138.867 83.5311C137.806 84.3649 137.664 85.8456 138.444 86.9079C141.82 91.5035 143.641 96.9856 143.626 102.62C143.612 108.251 141.767 113.72 138.373 118.298C137.582 119.364 137.702 120.84 138.746 121.669L142.394 124.564C143.438 125.393 145.009 125.261 145.823 124.211C150.664 117.973 153.303 110.423 153.323 102.642C153.342 94.8522 150.735 87.2808 145.914 81.0162Z"></path></svg>
                    </div>
                    <div className="w-[80%]">
                        <div className="flex flex-row justify-between items-center">
                            <div className="text-[#111b21] text-[17px]">{"Announcement"}</div>
                            <div className="text-[#667781] text-xs">{'5/20/2024'}</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-[#667781]">~Ajay</div>
                            <div className="bg-[#25d366] h-[10px] w-[10px] rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-[17%]"></div>
                    <div className="w-[83%] border-b border-[#e9edef]"></div>
                </div>
            </div>
        </div>
    )
}

export default Communities;