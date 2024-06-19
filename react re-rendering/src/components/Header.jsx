import React,{memo} from "react"
const Header=memo(function Header({title}){
    return(
        <div>
            {title}
        </div>
    )
})
export default Header