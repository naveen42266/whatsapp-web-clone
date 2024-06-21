import { useState } from "react";
import { WhatsappContext } from "./whatsapp-context";
import Home from "@/components/home/home";
import Status from "@/components/status";
export const data = 
  {
    status: {
      user: 'name',
      status: 'nnnn',
      isStatus: false,
    },
    tab: 'chats',
    tabSection:{
      title:'',
      user:''
    }
    
  }

export default function App() {
  const [whatsapp, setWhatsapp] = useState(data)

  return (
    <WhatsappContext.Provider value={{ whatsapp, setWhatsapp }}>
      {whatsapp?.status?.isStatus ? <Status /> : <Home />}    
    </WhatsappContext.Provider>
    
  );
}
