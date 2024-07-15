import Signup from "./Signup";
import {Link} from "react-router-dom"
export default function Bottomwarning({label,buttontext,to}){
    return(
        <div className="flex justify-center">
            <div>
                {label}
            </div>
            <Link className="cursor-pointer underline underline-offset-1" to={to}>{buttontext}</Link>
        </div>
    )
}