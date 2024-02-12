import { Link } from "react-router-dom"
import { useRef,useState } from "react"
import "./register.css"
import AboutImg from "../../assets/backgrounds/web-food-banner.png"
import { FormValidation } from "../validation"
export default function Register(){

    const [errMessage, setErrMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const contact = useRef(null);
  const address = useRef(null);

  const handleButton = () => {
    const message = FormValidation(email.current.value, name.current.value, contact.current.value, address.current.value);
    setErrMessage(message);
    if (message) return;
  };

    return(
<div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <img src={AboutImg} alt="" className="ContactImg" />
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input ref={name} type="text" placeholder="Name" className="loginInput" />
                <input ref={email} type="text" placeholder="Email" className="loginInput" />
                <input ref={contact} type="text" placeholder="Contact number" className="loginInput" />
                <input ref={address} type="text" placeholder="Adress" className="loginInput" />
                <p className="ErrorMessage text-red-600">{errMessage}</p>
                <button onClick={handleButton}  className="loginButton"><Link className="loginLink" to={!errMessage?"/contact":"/"}>Contact us</Link></button>
                <button className="loginNew"><Link className="loginLink" to="/">Login  into Account</Link></button>
            </div>
        </div>
    </div>
</div>
    )
}