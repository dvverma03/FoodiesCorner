import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer/footer";
import Body from "./components/body";
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about/about";
import Contact from "./components/contact";
import Error from "./components/error";
import RestaurantMenu  from "./components/restaurantmenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import TopRestaurant from "./components/TopRestaurants";
import YourMind from "./components/YourMind";
 
const Element= ()=>{
    const [userName, setUserName]=useState("");
    useEffect(()=>{
        const data={
            name:" Deepak",
        }
        setUserName(data.name);
    },[])
    return (
       <Provider store={appStore}>
        {/* // outside the userContext.Provider will show default value */}
        <userContext.Provider value={{loginUser:userName, setUserName}}>
        {/* show userName  */}
            {/* <userContext.Provider value={{loginUser:"Deep"}}> */}
                {/* show deep  */}
            {/* <Header/> */}
            {/* </userContext.Provider> */}
            <Outlet />
            <Footer />
        </userContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Element/>,
        errorElement:<Error/>,
        children:[

            {
                path:"/about",
                element:<About/>,
                errorElement:<Error/>,
                
            },
            {
                path:"/",
                element:<Body/>,
                errorElement:<Error/>
            },
            {
                path:"/favrestaurant",
                element:<TopRestaurant/>,
                errorElement:<Error/>
            },
            {
                path:"/yourmind",
                element:<YourMind/>,
                errorElement:<Error/>
            },
            {
                path:"/Contact",
                element:<Contact/>,
                errorElement:<Error/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>,
                errorElement:<Error/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)