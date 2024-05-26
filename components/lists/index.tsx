import React from "react";
import Chats from "../lists/chats";
import Communities from "../lists/communities";
import Status from "../lists/status";
import Channels from "../lists/channels";

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
    }
    return (
        <div>
          {selectedTab()}
        </div>
    )
}

export default ListComponent;