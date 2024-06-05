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
import Privacy from "./settings/privacy";

interface ListComponentProps {
    tab: string;
}

const ListComponent: React.FC<ListComponentProps> = ({ tab }) => {
    const [switchScreen, setSwitchScreen] = useState<string>('')
    const [keyboardShortcutsModal, setKeyboardShortcutsModal] = useState<boolean>(false)
    const [logout, setLogout] = useState<boolean>(false)
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
        else if (tab === 'settings' && switchScreen == '' && !keyboardShortcutsModal && !logout) {
            return <Settings tab={tab} handleProfile={(value: string) => { if (value == 'logout') { setLogout(!logout), selectedTab() } else if (value !== 'keyboardShotcuts') { setSwitchScreen(value), selectedTab() } else { setKeyboardShortcutsModal(!keyboardShortcutsModal), selectedTab() } }} />
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
        else if (tab === 'settings' && switchScreen == '' && keyboardShortcutsModal) {
            return <div>
                <Settings tab={tab} handleProfile={(value: string) => { if (value !== 'keyboardShotcuts') { setSwitchScreen(value), selectedTab() } else { setKeyboardShortcutsModal(!keyboardShortcutsModal), selectedTab() } }} />
                <Modal open={keyboardShortcutsModal} onClose={() => { setKeyboardShortcutsModal(!keyboardShortcutsModal) }}>
                    <div className="flex justify-center items-center h-[100%]">
                        <div className="bg-[#f7f8fa] h-[90%] w-[75%] py-4 pl-8 pr-3">
                            <KeyboardShortcuts handleClose={() => { setKeyboardShortcutsModal(!keyboardShortcutsModal) }} />
                        </div>
                    </div>
                </Modal>
            </div>
        }
        else if (tab === 'settings' && switchScreen == 'privacy') {
            return <Privacy tab={"privacy"} handleBack={(value: string) => { setSwitchScreen(''), selectedTab() }} />
        }
        else if (tab === 'settings' && switchScreen == '' && logout) {
            return <div>
                <Settings tab={tab} handleProfile={(value: string) => { if (value == 'logout') { setLogout(!logout), selectedTab() } else if (value !== 'keyboardShotcuts') { setSwitchScreen(value), selectedTab() } else { setKeyboardShortcutsModal(!keyboardShortcutsModal), selectedTab() } }} />
                <Modal open={logout} onClose={() => { setLogout(!logout) }}>
                    <div className="flex justify-center items-center h-[100%]">
                        <div className="bg-[#f7f8fa] h-[30%] w-[35%] py-4 pl-8 pr-3 flex flex-col justify-between">
                            <div>
                                <div className="text-xl text-[#3B4A54]">Log out ?</div>
                                <div className="text-sm text-[#3B4A54] mt-4">Are you sure you want to log out?</div>
                                <div className="text-sm text-[#3B4A54]">You can turn on <a href="" className="text-[#027eb5]">app lock</a> instead.</div>
                            </div>
                            <div className='flex justify-end gap-4'>
                                <span className='text-[#008069] rounded-full bg-white py-2 px-5 cursor-pointer border border-slate-300' onClick={() => { setLogout(!logout) }}>Cancel</span>
                                <span className='text-white rounded-full bg-[#008069] py-2 px-5 cursor-pointer' onClick={() => { setLogout(!logout) }}>Log out</span>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        }
    }

    return (
        <div>
            {selectedTab()}
        </div>
    )
}

export default ListComponent;