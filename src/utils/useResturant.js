import { useState, useEffect } from "react";
import {FETCH_MENU_URl} from "../utils/constants";

const useResturant = (resId) => {
    const [resturant, setResturant] = useState(null);
    
    //Get data from API
    useEffect(() => {
        getResturantInfo();

    }, []);

    async function getResturantInfo() {
        const data = await fetch(FETCH_MENU_URl + resId);
        const json = await data.json();
        setResturant(json?.data?.cards[0]?.card?.card?.info);
    }

    //return resturant Data
    return resturant;

}

export default useResturant;