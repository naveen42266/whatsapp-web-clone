import { useState } from "react";
import { WhatsappContext } from "../useContext";
import Status from "../components/status";
import Home from "../components/home/home";
export const data =
{
  status: {
    user: '',
    status: '',
    content: '',
    isStatus: false,
  },
  tab: 'chats',
  tabSection: {
    title: '',
    user: '',
    mobile: '',
    followers: '',
    profile: '',
    isProfile: false
  },
  userProfile: false,
  channelProfile: false,
  wallpaper: {
    color: '#EFEAE2',
    hoverColor: '',
    isWallpaper: false,
    bgImage: 'bgImg'
  },
  chat:{
    isVideoCall:false,
    isMenu: false
  },
  isSearch: false,
}

export default function App() {
  const [whatsapp, setWhatsapp] = useState(data);
  return (
    <WhatsappContext.Provider value={{ whatsapp, setWhatsapp }}>
      {whatsapp?.status?.isStatus ? <Status /> : <Home />}
    </WhatsappContext.Provider>
  );
}
