import React from "react";
import { useRouteError } from "react-router";
 
const Error = ()=>{
    const err= useRouteError();
    return(
        <div className="flex-col w-screen">
        <img className="justify-center m-auto align-center w-[90%]" src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg"/>
        <div className="md:text-5xl font-bold text-center pb-4 w-[90%]">Oop's Something went wrong</div>
        <div className="md:text-3xl font-bold text-center pb-4 w-[90%]">Check your CORS permission</div>
        <h1 className="md:text-3xl font-bold text-center pb-4 w-[90%]">Please add this extention and enable it (https://chromewebstore.google.com/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc )</h1>
        </div>
    )
}
export default Error;