import React from "react";

interface ProfileProps {
    tab: string;
}
const Profile: React.FC<ProfileProps> = ({ tab }) => {
    return (
        <div>
            <div className="flex justify-between py-3 px-6">
                <div className="text-[22px] font-bold capitalize">{tab}</div>
            </div>
        </div>
    )
}

export default Profile;