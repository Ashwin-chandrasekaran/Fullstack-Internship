import Appbar from "./Appbar"
import Balance from "./Balance"
import  Users  from "./Users"
export default function Dashboard(){
    return(
        <div>
            <Appbar/>
            <Balance value={"50,000"}/>
            <Users/>
        </div>
    )
}