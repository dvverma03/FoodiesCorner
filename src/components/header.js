import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";
import Logo from "../assets/The1.png";
import "./header.css";
import { useDispatch, useSelector } from 'react-redux'
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const [islogin, setIslogin] = useState(false);
  const { loginUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [showMenu, setShowMenu] = useState(false);
  const shows = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch()

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the threshold as needed

  // Use useEffect to update the device type on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  function showMenuHandler() {
    setShowMenu(!showMenu);
  }

  function toggle(){
    dispatch(toggleGptSearchView())
  }


  return (
    <>
      <div className="flex justify-between bg-pink-500 sticky top-0 z-10 nav">
        <img className="w-[235px]" src={Logo}></img>
        {shows && (
          <>
            <div
              className="absolute top-2 right-4 w-[40px] flex-col justify-between z-10 flex object-none menu"
              onClick={showMenuHandler}
            >
              <span className="h-[6px] bg-black w-[100%] m-[2px] "></span>
              <span className="h-[6px] bg-black w-[100%] m-[2px]"></span>
              <span className="h-[6px] bg-black w-[100%] m-[2px]"></span>
            </div>
            <div
              className={`list-none flex py-6 header ${
                showMenu ? "openkijiye" : ""
              }`}
            >
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
                  className="p-4 m-2 text-xl w-36 box-border hover:font-bold"
                  to="/favrestaurant"
                  onClick={() => setIslogin(false)}
                >
                  Top Restaurants
                </Link>
              </li>
              {!isMobile && <li>
                <Link
                  className="p-4 m-2 text-xl w-36 box-border hover:font-bold"
                  to="/yourmind"
                  onClick={() => setIslogin(false)}
                >
                  Dishes
                </Link>
              </li>}
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
                  onClick={toggle}
                >
                  Contact
                </Link>
              </li>
            </div>
          </>
        )}
        <div className="list-none flex relative headerLower">
          {shows && (
            <li className="list-none flex relative">
              <Link className=" cursor-pointer py-6 font-bold" to="/cart">
                <AddShoppingCartIcon />
              </Link>
            </li>
          )}
          {cartItems.length == 0 ? (
            ""
          ) : (shows &&
            <span className="text-center font-bold absolute left-4 top-[14px] bg-[#66cc52] rounded-[50%] h-[18px] w-[18px]">
              {cartItems.length}
            </span>
          )}
          <div className="w-24 m-4 p-2">
            {!shows ? (
              <button className="w-24 px-4 py-[5px] rounded-md bg-[#66cc52] hover:font-bold">
                <Link to="/" onClick={toggle}>
                  Login
                </Link>
              </button>
            ) : (
              <button
                className="w-24 px-4 py-[5px] rounded-md bg-[#66cc52] hover:font-bold"
                onClick={toggle}
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
