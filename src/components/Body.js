import ResturantCard from "./ResturantCard";
import resList from "../utils/mockdata";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


const Body = () => {
    const [allResturants, setAllResturants] = useState([]);
    const [filteredResturants, setFilteredResturant] = useState([]);

    useEffect(() => {
      //API Call
      getResturants();
    }, []);

async function getResturants() {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  //optional chaining
  setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
  setFilteredResturant(json?.data?.cards[2]?.data?.data?.cards);
}

const isOnline = useOnline();

if(!isOnline){
  return <h1>🛑 Offline, Please check your internet connections!!</h1>
}

// if(!allResturants) return null;
// if(filteredResturants ?. length === 0) return <h1> No Resturant match your Filter!</h1>
  const searchBtnCSS = {
    backgroundColor: "red"
  }

  return (allResturants.length == 0) ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <button
          style={{
            backgroundColor: "red"
          }}
          onClick={() => {
            //filter logic;
            const filteredList = allResturants.filter(res => res?.data?.avgRating > 4);
            setAllResturants(filteredList);   
          }}

        >
        Top Rated Resturants
        </button>
      </div>
      <div className="resturant-list">
        {allResturants.map((resturant) => (
          <Link to={"/resturant/"+ resturant?.data?.id}
          key={resturant?.data?.id}
          >
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
