import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {CDN_URL} from "../utils/constants";
import useResturant from "../utils/useResturant";
import useMenu from "../utils/useMenu";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
    const param = useParams();
    const {id} = param; 

    const resturant = useResturant(id);
    const menu = useMenu(id);

    return (!resturant) ? <Shimmer /> :(
        <div className="menu">
            <div>
            <h1>Resturant id : {resturant?.id}</h1>
            <h2>{resturant?.name}</h2>
            <img src = {CDN_URL + resturant?.cloudinaryImageId} />
            <h3>{resturant?.areaName}</h3>
            <h3>{resturant?.city}</h3>
            <h3>{resturant?.avgRating}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <div>
                    <ul>
                        {
                           (menu?.itemCards)?.map((item) => (
                           <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                           )
                           )
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ResturantMenu;   