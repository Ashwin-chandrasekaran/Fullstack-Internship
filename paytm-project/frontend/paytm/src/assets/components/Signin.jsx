import Heading from "./Heading";
import Subheading from "./Subheading";
import Inputbox from "./Inputbox";
import Button from  "./Button"
import Bottomwarning from "./Bottomwarning";

export default function Signin(){
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="rounded-lg border border-white bg-white w-80 h-full text-center p-2 px-4">
                <Heading label={"Sign In"}/>
                <Subheading label={"Enter your credentials to access your account"}/>
                <Inputbox placeholder="johnDoe@gmail.com" label={"Username"}/>
                <Inputbox placeholder="password" label={"Password"}/> 
                <div>
                    <Button label={"Sign In"}/>
                </div>
                <div>
                    <Bottomwarning label={"Don't have an account?"} buttontext={"Sign Up"} to={"/sign-up"}/>
                </div>
            </div>
        </div>
        
    )
}