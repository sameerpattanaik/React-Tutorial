import { useEffect, useState } from "react";

const useOnline = () => {
    const[isOneline, setisOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setisOnline(true);
        };
        const handleOffline = () => {
            setisOnline(false);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);   

        }
    }, [])

    return isOneline; //return true or false
}

export default useOnline;