import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    avgRating,
  }) => {
    console.log(cuisines,'hey')
    // { resData } = props;
    const cuisineList = cuisines ? cuisines.length > 1 ? cuisines.join(", ") : cuisines : ''
    return (
      <div className="w-[250px] h-[350px] mx-3 my-4 bg-[#FFD580] brightness text-black  font-mono border rounded-md shadow hover:shadow-lg hover:scale-105 transform transition duration-75">
        <img
          className="res-logo"
          alt="res-logot"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisineList}</h4>
        <h4>{avgRating}</h4>
        <h4>38 mins</h4>
      </div>
    );
  };

  export default RestaurantCard;