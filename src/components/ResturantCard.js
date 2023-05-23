import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const ResturantCard = (props) => {
    const { resData } = props;

    const {cloudinaryImageId,
            name,
            cuisines,
            deliveryTime,
            costForTwo,
            avgRating,
        } = resData?.data;
    return(
        // <div className="res-card" style={styleCard}>
         <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold text-md">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Delivery Time:{deliveryTime} minutes</h4>
            <h4>Cost for two:{costForTwo/100}</h4>
            <h4>{avgRating} stars</h4>
        </div>
    );
};

export default ResturantCard;