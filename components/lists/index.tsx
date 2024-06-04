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
import ChatSettings from "./settings/chats";
import Modal from "@mui/material/Modal";
import KeyboardShortcuts from "./settings/keyboardShotcuts";
import { Box } from "@mui/material";

interface ListComponentProps {
    tab: string;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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
        else if (tab === 'settings' && switchScreen == 'chats') {
            return <ChatSettings tab={"chats"} handleBack={(value: string) => { setSwitchScreen(''), selectedTab() }} />
        }
        else if (tab === 'settings' && switchScreen == 'keyboardShotcuts') {
            return <Modal open={true}>
                <div className="flex justify-center items-center h-[100%]">
                    <div className="bg-white h-[90%] w-[75%] p-3">
                        <KeyboardShortcuts />
                    </div>
                </div>
            </Modal>
        }

    }
    return (
        <div>
            {selectedTab()}
        </div>
    )
}

export default ListComponent;