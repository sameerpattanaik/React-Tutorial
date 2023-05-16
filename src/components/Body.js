import ResturantCard from "./ResturantCard";
import resList from "../utils/mockdata";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    //Local State variable - Super powerful variable
    const [allResturants, setAllResturants] = useState([]);
    const [filteredResturants, setFilteredResturant] = useState([]);

    useEffect(() => {
      //API Call
      getResturants();
    }, []);

async function getResturants() {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
  //optional chaining
  setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
  setFilteredResturant(json?.data?.cards[2]?.data?.data?.cards);
}

//Conditional Rendering
// if resturant is empty => shimmer UI
// if resturant is not empty => actual UI

//not render component (Early return)
if(!allResturants) return null;
if(filteredResturants ?. length === 0) return <h1> No Resturant match your Filter!</h1>

  return (allResturants.length == 0) ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic;
            const filteredList = allResturants.filter(res => res?.data?.avgRating > 4);
            setAllResturants(filteredList);   
          }}

        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {allResturants.map((resturant) => (
          <ResturantCard key={resturant?.data?.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
