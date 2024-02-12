import { useEffect, useState } from "react";

const useOnline = ()=>{

    const [isOnline, setIsOnline]= useState(true);
    console.log(isOnline)
    const handleOnline=()=>{
        setIsOnline(true);
    }

    const handleOffline = ()=>{
        setIsOnline(false)
    }

    useEffect(()=>{
        window.addEventListener('online', ()=>{
            handleOnline
            
        })
        window.addEventListener('offline', ()=>{
            handleOffline

        })

        return ()=> {

            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOnline);
        }

    },[])
    return isOnline;
}

export default useOnline;