import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./register.css";
import AboutImg from "../../assets/backgrounds/web-food-banner.png";
import FormValidation from "../FormValidation"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {toggleGptSearchView} from "../../utils/gptSlice"

export default function Register() {
  
  const dispatch =useDispatch();
  const toggle= useSelector((store)=>store.gpt)
  console.log(toggle.showGptSearch)


  const [errMessage, setErrMessage] = useState(null);
  const name = useRef(null);
  const contact = useRef(null);
  const address = useRef(null);
  const email=useRef(null)
  const navigate = useNavigate();

  const handleButton = () => {
    const message = FormValidation(
      name.current.value,
      email.current.value,
      contact.current.value,
      address.current.value
    );
    console.log(message)
    setErrMessage(message);
    if (message) return;
    dispatch(toggleGptSearchView())
    navigate("/")
  };

  return (
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
            <button onClick={handleButton} className="loginButton">
                Contact us
            </button>
            <button className="loginNew">
                Login into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
