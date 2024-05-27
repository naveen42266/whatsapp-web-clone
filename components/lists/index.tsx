import React from "react";
import Chats from "../lists/chats";
import Communities from "../lists/communities";
import Status from "../lists/status";
import Channels from "../lists/channels";
import Settings from "./settings";
import Profile from "./profile";

interface ListComponentProps{
    tab:string;
}
const ListComponent:React.FC<ListComponentProps> = ({tab}) => {
    function selectedTab(){
        if(tab === 'chats'){
            return <Chats tab={tab}/>
        }
        else if(tab === 'communities'){
            return <Communities tab={tab}/>
        }
        else if(tab === 'status'){
            return <Status tab={tab}/>
        }
        else if(tab === 'channels'){
            return <Channels tab={tab}/>
        }
        else if(tab === 'settings'){
            return <Settings tab={tab}/>
        }
        else if(tab === 'profile'){
            return <Profile tab={tab}/>
        }
    }
    return (
        <div>
          {selectedTab()}
        </div>
    )
}

export default ListComponent;