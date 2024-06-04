import React, { useState } from "react";
import Chats from "../lists/chats";
import Communities from "../lists/communities";
import Status from "../lists/status";
import Channels from "../lists/channels";
import Settings from "./settings";
import Profile from "./profile";
import Account from "./settings/account";
import Help from "./settings/help";
import Notifications from "./settings/notifications";

interface ListComponentProps {
    tab: string;
}
const ListComponent: React.FC<ListComponentProps> = ({ tab }) => {
    const [switchScreen, setSwitchScreen] = useState<string>('')
    function selectedTab() {
        if (tab === 'chats') {
            return <Chats tab={tab} />
        }
        else if (tab === 'communities') {
            return <Communities tab={tab} />
        }
        else if (tab === 'status') {
            return <Status tab={tab} />
        }
        else if (tab === 'channels') {
            return <Channels tab={tab} />
        }
        else if (tab === 'settings' && switchScreen == '') {
            return <Settings tab={tab} handleProfile={(value: string) => { setSwitchScreen(value), selectedTab() }} />
        }
        else if (tab === 'profile' && switchScreen == '') {
            return <Profile tab={tab} from={'tab'} handleBack={(value: string) => { }} />
        }
        else if (tab === 'settings' && switchScreen == 'profile') {
            return <Profile tab={'profile'} from={'settings'} handleBack={(value: string) => { setSwitchScreen(''), selectedTab() }} />
        }
        else if (tab === 'settings' && switchScreen == 'account') {
            return <Account tab={"account"} handleBack={(value: string) => { setSwitchScreen(''), selectedTab() }} />
        }
        else if (tab === 'settings' && switchScreen == 'help') {
            return <Help tab={"help"} handleBack={(value: string) => { setSwitchScreen(''), selectedTab() }} />
        }
        else if (tab === 'settings' && switchScreen == 'notifications') {
            return <Notifications tab={"notifications"} handleBack={(value: string) => { setSwitchScreen(''), selectedTab() }} />
        }
    }
    return (
        <div>
            {selectedTab()}
        </div>
    )
}

export default ListComponent;