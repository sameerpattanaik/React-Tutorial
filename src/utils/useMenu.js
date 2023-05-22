import { useState, useEffect } from "react";
import {FETCH_MENU_URl} from "../utils/constants";

const useMenu = (resId) => {
    const [menu, setMenu] = useState(null);

    //Get data from API
    useEffect(() => {
        getResturantMenu();

    }, []);

    async function getResturantMenu() {
        const data = await fetch(FETCH_MENU_URl + resId);
        console.log(data);
        const json = await data.json();
        console.log(json);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    }
    console.log(menu);
    //return resturant Menu
    return menu;

}

export default useMenu;