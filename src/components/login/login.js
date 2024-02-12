import "./login.css"
import { Link } from "react-router-dom"
export default function Login(){


    
    return(
<div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Lets Know</h3>
            <span className="loginDesc">
                Connects with peoplr all over the World on Lets Know
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="text" placeholder="Email" className="loginInput" />
                <input type="text" placeholder="Password" className="loginInput" />
                <button className="loginButton"><Link className="Link" to="/home">Login</Link></button>
                <span className="loginForget">Forget Password?</span>
                <button className="loginNew"><Link className="Link" to="/register">Create a New Account</Link></button>
            </div>
        </div>
    </div>
</div>
    )
}