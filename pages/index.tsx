import { useState } from "react";
import { WhatsappContext } from "../useContext";
import Status from "../components/status";
import Home from "../components/home/home";
import { channel } from "diagnostics_channel";
export const data = 
  {
    status: {
      user: '',
      status: '',
      content: '',
      isStatus: false,
    },
    tab: 'chats',
    tabSection:{
      title:'',
      user:'',
      mobile:'',
      followers:''
    },
    userProfile: false,
    channelProfile: false,
    wallpaper:{
      color:'#EFEAE2',
      hoverColor:'',
      isWallpaper:false,
      bgImage:'bgImg'
    }
  }

export default function App() {
  const [whatsapp, setWhatsapp] = useState(data)

  return (
    //chat screen bg img is overlaping
    <WhatsappContext.Provider value={{ whatsapp, setWhatsapp }}>
      {whatsapp?.status?.isStatus ? <Status /> : <Home />}    
    </WhatsappContext.Provider>
    
  );
}
