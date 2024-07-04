import React,{useMemo, useState,useEffect} from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { allbuttonsatom,totalnotification } from "./atom"
import axios from "Axios"

function App(){
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
    )
}
function MainApp(){
  const [allbuttonsatom1,setallbuttonsatom]=useRecoilState(allbuttonsatom);
  const totalnotificationcount=useRecoilValue(totalnotification)
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/notifications").then(res=>setallbuttonsatom(res.data))
  },[])
  console.log(allbuttonsatom1.network)

  return(
    <div>
      <button>Home</button>
      <button>My Network ({allbuttonsatom1.network >=100 ? "99+" : allbuttonsatom1.network })</button>
      <button>Jobs ({allbuttonsatom1.Jobs})</button>
      <button>Messaging ({allbuttonsatom1.messaging})</button>
      <button>Notifications ({allbuttonsatom1.notifications})</button>
      <button>Me({totalnotificationcount})</button>
    </div>
  )
}
// function Buttonupdate(){
//   const setMessagingnotificationcount=useSetRecoilState(messagingAtom)
//   return(
//   <button onClick={()=>{
//     setMessagingnotificationcount(c=>c+1)
//   }}>Me({totalnotification})</button>
// )
// }
export default App