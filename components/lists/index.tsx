import React, { useContext, useState } from "react";
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
import SecurityNotifications from "./settings/account/securityNotifications";
import RequestAccountInfo from "./settings/account/requestAccountInfo";
import { WhatsappContext } from "../../useContext";
import LastSeenAndOnline from "./settings/privacy/lastseenAndOnline";
import ProfilePhoto from "./settings/privacy/profilePhoto";
import About from "./settings/privacy/about";
import Groups from "./settings/privacy/groups";
import BlockedContacts from "./settings/privacy/blockedContacts";
import DefaultMessageTimer from "./settings/privacy/defaultMessageTimer";
import AppLock from "./settings/privacy/appLock";

interface ListComponentProps {
    tab: string;
    handleDetailContent: (value: string, mobile: string, key: string) => void;
}

const ListComponent: React.FC<ListComponentProps> = ({ handleDetailContent }) => {
    const { whatsapp, setWhatsapp } = useContext<any>(WhatsappContext)

    const [switchScreen, setSwitchScreen] = useState<string>('')
    const [keyboardShortcutsModal, setKeyboardShortcutsModal] = useState<boolean>(false)
    const [logout, setLogout] = useState<boolean>(false)
    function selectedTab() {
        if (whatsapp?.tab === 'chats') {
            return <Chats tab={whatsapp?.tab} handleChatUser={(user: string, mobile: string) => { handleDetailContent(user, mobile, 'chat') }} />
        }
        else if (whatsapp?.tab === 'communities') {
            return <Communities tab={whatsapp?.tab} />
        }
        else if (whatsapp?.tab === 'status') {
            return <Status tab={whatsapp?.tab} />
        }
        else if (whatsapp?.tab === 'channels') {
            return <Channels tab={whatsapp?.tab} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == '' && !keyboardShortcutsModal && !logout) {
            return <Settings tab={whatsapp?.tab} handleProfile={(value: string) => { if (value == 'logout') { setLogout(!logout), selectedTab() } else if (value !== 'keyboardShotcuts') { setSwitchScreen(value), selectedTab() } else { setKeyboardShortcutsModal(!keyboardShortcutsModal), selectedTab() } }} />
        }
        else if (whatsapp?.tab === 'profile' && switchScreen == '') {
            return <Profile tab={whatsapp?.tab} from={'tab'} handleBack={(value: string) => { }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'profile') {
            return <Profile tab={'profile'} from={'settings'} handleBack={(value: string) => { setSwitchScreen(''), selectedTab() }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'account') {
            return <Account tab={"account"} handleBack={(value: string) => { setSwitchScreen(''), selectedTab(); }} handleToOpen={(value: string) => { setSwitchScreen(value) }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'help') {
            return <Help tab={"help"} handleBack={(value: string) => { setSwitchScreen(''), selectedTab() }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'notifications') {
            return <Notifications tab={"notifications"} handleBack={(value: string) => { setSwitchScreen(''), selectedTab() }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'chats') {
            return <ChatSettings tab={"chats"} handleBack={(value: string) => { setSwitchScreen(''), selectedTab() }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == '' && keyboardShortcutsModal) {
            return <div>
                <Settings tab={whatsapp?.tab} handleProfile={(value: string) => { if (value !== 'keyboardShotcuts') { setSwitchScreen(value), selectedTab() } else { setKeyboardShortcutsModal(!keyboardShortcutsModal), selectedTab() } }} />
                <Modal open={keyboardShortcutsModal} onClose={() => { setKeyboardShortcutsModal(!keyboardShortcutsModal) }}>
                    <div className="flex justify-center items-center h-[100%]">
                        <div className="bg-[#f7f8fa] h-[90%] w-[75%] py-4 pl-8 pr-3">
                            <KeyboardShortcuts handleClose={() => { setKeyboardShortcutsModal(!keyboardShortcutsModal) }} />
                        </div>
                    </div>
                </Modal>
            </div>
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'privacy') {
            return <Privacy tab={"privacy"} handleBack={(value: string) => { setSwitchScreen(''), selectedTab(); }} handleToPrivacy={(value: string) => { setSwitchScreen(value) }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == '' && logout) {
            return <div>
                <Settings tab={whatsapp?.tab} handleProfile={(value: string) => { if (value == 'logout') { setLogout(!logout), selectedTab() } else if (value !== 'keyboardShotcuts') { setSwitchScreen(value), selectedTab() } else { setKeyboardShortcutsModal(!keyboardShortcutsModal), selectedTab() } }} />
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
        else if (whatsapp?.tab === 'settings' && switchScreen == 'Security notifications') {
            return <SecurityNotifications tab={'Security'} handleBack={(value: string) => { setSwitchScreen('account') }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'Request account info') {
            return <RequestAccountInfo tab={switchScreen} handleBack={(value: string) => { setSwitchScreen('account') }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'Last seen and online') {
            return <LastSeenAndOnline tab={switchScreen} handleBack={(value: string) => { setSwitchScreen('privacy') }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'Profile photo') {
            return <ProfilePhoto tab={switchScreen} handleBack={(value: string) => { setSwitchScreen('privacy') }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'About') {
            return <About tab={switchScreen} handleBack={(value: string) => { setSwitchScreen('privacy') }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'Default message timer') {
            return <DefaultMessageTimer tab={switchScreen} handleBack={(value: string) => { setSwitchScreen('privacy') }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'Groups') {
            return <Groups tab={switchScreen} handleBack={(value: string) => { setSwitchScreen('privacy') }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'Blocked contacts') {
            return <BlockedContacts tab={switchScreen} handleBack={(value: string) => { setSwitchScreen('privacy') }} />
        }
        else if (whatsapp?.tab === 'settings' && switchScreen == 'App lock') {
            return <AppLock tab={switchScreen} handleBack={(value: string) => { setSwitchScreen('privacy') }} />
        }
    }

    return (
        <div>
            {selectedTab()}
        </div>
    )
}

export default ListComponent;