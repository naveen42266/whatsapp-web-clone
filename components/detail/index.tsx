import React from "react";
import LockIcon from '@mui/icons-material/Lock';
const DetailComponent = () => {
    return (
        <div className=" flex flex-col items-center mx-auto">
            <img src="https://static.whatsapp.net/rsrc.php/v3/y6/r/wa669aeJeom.png" style={{ width: '320px', paddingTop: '144px' }} alt="" />
            <div className="pt-[22px] mx-auto text-[32px] font-light text-[#41525d]">Download WhatsApp for Windows</div>
            <div className="flex items-center">
                <div className="w-[5%]"></div>
                <div className="pt-4 text-sm text-[#54656f] w-[90%] text-center">Make calls, share your screen and get a faster experience when you download the Windows app.</div>
                <div className="w-[5%]"></div>
            </div>
            <span className="mt-8 py-2 px-6 text-sm font-semibold text-white bg-[#008069] rounded-full cursor-pointer">Get from Microsoft Store</span>
            <div className="text-sm text-[#8696a0] pt-24"><LockIcon sx={{ height: '14px', width: '12px', paddingRight: '2px' }} />Your personal messages are end-to-end encrypted</div>
        </div>
    )
}

export default DetailComponent;