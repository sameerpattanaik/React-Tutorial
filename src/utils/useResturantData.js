import { useState, useEffect } from "react";
import {FETCH_MENU_URl} from "../utils/constants";

export const useResturantData = (resId) => {

    //Get data from API
    useEffect(() => {
        getResturantData();

    }, []);

    async function getResturantData() {
        const setResData = await fetch(FETCH_MENU_URl + resId);
    
    }
    //return resturant Menu
    return setResData;

}

export default useResturantData;