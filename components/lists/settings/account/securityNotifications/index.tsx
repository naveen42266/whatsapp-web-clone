import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';
import LockIcon from '@mui/icons-material/Lock';
interface SecurityNotificationsProps {
    tab: string;
    handleBack: (value: string) => void;
}

const SecurityNotifications: React.FC<SecurityNotificationsProps> = ({ tab, handleBack }) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className="h-screen w-full">
            <div className="flex items-center gap-5 py-5 px-6 bg-white">
                <ArrowBackIcon fontSize="medium" className="text-[#54656f]" onClick={() => { handleBack('back') }} />
                <div className="text-base capitalize">{tab}</div>
            </div>
            <div className="h-[86%] w-full overflow-y-scroll custom-scroll">
                <div className="bg-white">
                    <div className="text-center my-6"><LockIcon className="h-20 w-20 p-4 bg-[#00c298] rounded-full text-white" /></div>
                    <div className="text-lg font-semibold py-4 px-7">Your chats and calls are private</div>
                    <div className="text-sm text-[#54656f] px-7 pb-3">End-to-end encryption keeps your personal messages and calls between you and the people you choose. Not even WhatsApp can read or listen to them. This includes your:</div>
                    <div className="py-4 px-7 text-sm border-b border-slate-300">
                        <div className="flex items-center gap-3 text-[#54656f] pb-3">
                            <svg viewBox="0 0 24 24" height="25" width="25" fill="none"><title>e2e-message</title><path fillRule="evenodd" clipRule="evenodd" d="M13.1468 3H5.19245C3.43784 3 2 4.43784 2 6.19245V10.2361C2 11.9907 3.43784 13.4286 5.19245 13.4286H5.91071V16.0357L9.38734 13.4286H13.1468C14.9027 13.4286 16.3393 11.9907 16.3393 10.2361V6.19245C16.3393 4.43784 14.9027 3 13.1468 3Z" stroke="#8696A0" strokeWidth="1.2" stroke-linejoin="round"></path><path d="M7.21436 15.0581V15.4505C7.21436 17.2051 8.65219 18.6429 10.4068 18.6429H14.1663L17.6429 21.2501V18.6429H18.3612C20.1158 18.6429 21.5536 17.2051 21.5536 15.4505V11.4068C21.5536 9.65219 20.1158 8.21436 18.3612 8.21436H16.3394" stroke="#8696A0" strokeWidth="1.2" stroke-linejoin="round"></path></svg>
                            <div>Text and voice messages</div>
                        </div>
                        <div className="flex items-center gap-3 text-[#54656f] pb-3">
                            <svg viewBox="0 0 24 24" height="25" width="25" fill="none"><title>e2e-contact-info-call</title><path d="M15.9512 20.1499C17.4038 20.1499 18.3584 19.7598 19.1968 18.8135C19.2632 18.7471 19.3296 18.6724 19.3877 18.606C19.8857 18.0498 20.1182 17.502 20.1182 16.979C20.1182 16.3813 19.7695 15.8252 19.0308 15.3105L16.6152 13.6338C15.8682 13.1191 14.9966 13.061 14.2993 13.75L13.6602 14.3892C13.4692 14.5801 13.3032 14.5884 13.1206 14.4722C12.6724 14.1899 11.7676 13.4014 11.1533 12.7871C10.5059 12.1479 9.8833 11.4341 9.55127 10.9111C9.44336 10.7202 9.45166 10.5625 9.64258 10.3716L10.2734 9.73242C10.9707 9.03516 10.9126 8.15527 10.3979 7.4165L8.72119 5.00098C8.20654 4.26221 7.65039 3.92188 7.05273 3.91357C6.52979 3.90527 5.98193 4.146 5.42578 4.64404C5.35107 4.71045 5.28467 4.76855 5.21826 4.82666C4.27197 5.67334 3.88184 6.62793 3.88184 8.06396C3.88184 10.438 5.34277 13.3267 8.02393 16.0078C10.6885 18.6724 13.5854 20.1499 15.9512 20.1499ZM15.9595 18.8716C13.8428 18.9131 11.1284 17.2861 8.97852 15.1445C6.81201 12.9863 5.11035 10.1807 5.15186 8.06396C5.16846 7.15088 5.49219 6.3623 6.13965 5.79785C6.19775 5.74805 6.23926 5.70654 6.29736 5.66504C6.54639 5.44922 6.81201 5.33301 7.05273 5.33301C7.29346 5.33301 7.50928 5.42432 7.66699 5.67334L9.27734 8.08887C9.45166 8.34619 9.46826 8.63672 9.21094 8.89404L8.48047 9.62451C7.90771 10.1973 7.94922 10.8945 8.36426 11.4507C8.8374 12.0898 9.65918 13.0195 10.2983 13.6504C10.9292 14.2896 11.9336 15.186 12.5811 15.6675C13.1372 16.0825 13.8345 16.124 14.4072 15.5513L15.1377 14.8208C15.395 14.5635 15.6772 14.5801 15.9429 14.7461L18.3584 16.3564C18.6074 16.5225 18.6987 16.73 18.6987 16.979C18.6987 17.2197 18.5825 17.4854 18.3667 17.7344C18.3169 17.7925 18.2837 17.834 18.2339 17.8921C17.6694 18.5396 16.8809 18.855 15.9595 18.8716Z" fill="#8696A0"></path></svg>
                            <div>Audio and video calls</div>
                        </div>
                        <div className="flex items-center gap-3 text-[#54656f] pb-3">
                            <svg viewBox="0 0 24 24" height="25" width="25" fill="none"><title>e2e-attachment</title><path d="M10.0636 6.34105L17.5257 12.6005C18.9998 13.8371 19.4065 16.0166 18.3169 17.602C17.0651 19.4237 14.5629 19.728 12.9125 18.3435L4.195 11.0309C3.27106 10.2559 2.98788 8.88887 3.66532 7.89506C4.44697 6.74836 6.01764 6.55189 7.05443 7.42159L14.4601 13.6338C14.848 13.9592 14.8992 14.5428 14.5738 14.9307C14.2484 15.3186 13.6648 15.3698 13.2768 15.0444L7.10544 9.86756C6.81627 9.62499 6.37531 9.66364 6.13274 9.95281C5.89017 10.242 5.92882 10.6829 6.21799 10.9255L12.2906 16.0195C13.2146 16.7945 14.61 16.8356 15.4709 15.9956C16.4641 15.0264 16.3844 13.4455 15.3476 12.5758L8.06178 6.46422C6.5877 5.2277 4.37064 5.20638 2.99898 6.55508C1.42867 8.09762 1.5584 10.6216 3.20881 12.0061L11.8629 19.2654C13.8871 20.9634 16.9421 21.0028 18.8247 19.1453C20.9827 17.0024 20.8041 13.5482 18.5331 11.6432L10.9511 5.28309C10.6619 5.04052 10.2209 5.07917 9.97836 5.36834C9.73579 5.65752 9.77444 6.09848 10.0636 6.34105Z" fill="#8696A0"></path></svg>
                            <div>Photos, videos and documents</div>
                        </div>
                        <div className="flex items-center gap-3 text-[#54656f] pb-3">
                            <svg viewBox="0 0 24 24" height="25" width="25" color="#8696A0"><title>location-outline</title><path fillRule="evenodd" clipRule="evenodd" d="M12 3.85C15.2628 3.85 17.9 6.48723 17.9 9.75C17.9 11.2005 17.2341 12.9144 16.1692 14.6727C15.1244 16.3979 13.8026 17.9926 12.7293 19.1643C12.3206 19.6104 11.6795 19.6104 11.2707 19.1643C10.1975 17.9926 8.87559 16.3979 7.83078 14.6727C6.7659 12.9144 6.1 11.2005 6.1 9.75C6.1 6.48723 8.73723 3.85 12 3.85ZM12 2.25C16.1464 2.25 19.5 5.60357 19.5 9.75C19.5 13.5199 16.1311 17.8193 13.9091 20.245C12.8662 21.3835 11.1338 21.3835 10.0909 20.245C7.86889 17.8193 4.50001 13.5199 4.5 9.75C4.5 5.60357 7.85357 2.25 12 2.25ZM12 13.6C13.9192 13.6 15.475 12.0442 15.475 10.125C15.475 8.20581 13.9192 6.65 12 6.65C10.0808 6.65 8.525 8.20581 8.525 10.125C8.525 12.0442 10.0808 13.6 12 13.6ZM13.875 10.125C13.875 11.1605 13.0355 12 12 12C10.9645 12 10.125 11.1605 10.125 10.125C10.125 9.08947 10.9645 8.25 12 8.25C13.0355 8.25 13.875 9.08947 13.875 10.125Z" fill="currentColor"></path></svg>
                            <div>Location sharing</div>
                        </div>
                        <div className="flex items-center gap-3 text-[#54656f] pb-3">
                            <svg viewBox="0 0 24 24" height="25" width="25" fill="none"><title>e2e-status</title><path d="M20.3351 11.583C20.4874 15.1659 18.3165 18.5828 14.7619 19.8518C14.3677 19.9923 13.9702 20.102 13.5718 20.1813" stroke="#8696A0" strokeWidth="1.4" strokeLinecap="round" stroke-linejoin="round"></path><path d="M5.61426 6.39954C6.52735 5.35496 7.71219 4.52266 9.11157 4.02283C11.6343 3.12242 14.3025 3.50061 16.408 4.82167" stroke="#8696A0" strokeWidth="1.4" strokeLinecap="round" stroke-linejoin="round"></path><path d="M10.3036 20.1821C7.50086 19.624 5.05315 17.6498 4.02262 14.7625C3.35894 12.9029 3.3898 10.9646 3.98122 9.23047" stroke="#8696A0" strokeWidth="1.4" strokeLinecap="round" stroke-linejoin="round"></path><path d="M17.2768 11.9373C17.2768 14.8864 14.886 17.2769 11.937 17.2769C8.98793 17.2769 6.59717 14.8864 6.59717 11.9373C6.59717 8.98828 8.98793 6.59778 11.937 6.59778C12.9754 6.59778 13.9446 6.89418 14.7646 7.40699" stroke="#8696A0" strokeWidth="1.4" strokeLinecap="round" stroke-linejoin="round"></path></svg>
                            <div>Status updates</div>
                        </div>
                        <a className="text-[#027eb5]" href="https://www.whatsapp.com/security/?lg=en" target="_blank" rel="noopener noreferrer">Learn more</a>
                    </div>
                    <div className="flex flex-col justify-between items-center  px-6 py-4 border-b border-[#e9edef]">
                        <div className="flex items-center">
                            <Checkbox checked sx={{ color: '#008069' }} color='success' {...label} />
                            <div className="text-[17px] text-[#111b21] max-w-[85%]">Show security notifications on this computer</div>
                        </div>
                        <div className="w-full flex py-1">
                            <div className="w-[13%]"></div>
                            <div className="text-sm text-[#54656f] w-[85%]">Get notified when your security code changes for a contact's phone. If you have multiple devices, this setting must be enabled on each device where you want to get notifications.<a href="https://faq.whatsapp.com/1524220618005378?lang=en" target="_blank" rel="noopener noreferrer" className="text-[#027eb5] text-sm"> Learn more</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecurityNotifications;