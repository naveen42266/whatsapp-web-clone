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
    tabSection:{
      title:'',
      user:''
    },
    userProfile: false
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
