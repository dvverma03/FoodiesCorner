import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";
import Logo from "../assets/The1.png";
import "./header.css";

const Header = () => {
  const [islogin, setIslogin] = useState(false);
  const { loginUser } = useContext(userContext);
  // we subscribing the store by useSelector
  const cartItems = useSelector((store) => store.cart.items);
  const [showMenu, setShowMenu]= useState(false)
  function showMenuHandler(){
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div className="flex justify-between bg-pink-500 sticky top-0 z-10 nav">
        <img className="w-[235px]" src={Logo}></img>
        {!islogin && (
          <>
            <div className="absolute top-2 right-4 w-[40px] flex-col justify-between z-10 flex object-none menu"
            onClick={showMenuHandler}
            >
              <span className="h-[6px] bg-black w-[100%] m-[2px] "></span>
              <span className="h-[6px] bg-black w-[100%] m-[2px]"></span>
              <span className="h-[6px] bg-black w-[100%] m-[2px]"></span>
            </div>
            <div className={`list-none flex py-6 header ${showMenu ? "openkijiye" : ""}`}>

              <li>
                <Link
                  className="p-4 m-2 text-xl w-36 box-border hover:font-bold"
                  to="/"
                  onClick={() => setIslogin(false)}
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  className="p-4 m-2 text-xl w-36 hover:font-bold"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="p-4 m-2 text-xl w-36 hover:font-bold"
                  to="/contact"
                  onClick={() => setIslogin(true)}
                >
                  Contact
                </Link>
              </li>
            </div>
          </>
        )}
        <div className="list-none flex relative headerLower">
          {!islogin && (
            <li className="list-none flex relative">
              <Link className=" cursor-pointer py-6 font-bold" to="/cart">
                <AddShoppingCartIcon />
              </Link>
            </li>
          )}
          {cartItems.length == 0 ? (
            ""
          ) : (
            <span className="text-center font-bold absolute left-4 top-[14px] bg-[#66cc52] rounded-[50%] h-[18px] w-[18px]">
              {cartItems.length}
            </span>
          )}
          <div className="w-24 m-4 p-2">
            {islogin ? (
              <button className="w-24 px-4 py-[5px] rounded-md bg-[#66cc52] hover:font-bold">
                <Link to="/" onClick={() => setIslogin(false)}>
                  Login
                </Link>
              </button>
            ) : (
              <button
                className="w-24 px-4 py-[5px] rounded-md bg-[#66cc52] hover:font-bold"
                onClick={() => setIslogin(true)}
              >
                <Link to="/Contact">{loginUser}</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
