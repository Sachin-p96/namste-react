import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
}) => {
  console.log(cuisines, "hey");
  // { resData } = props;
  const cuisineList = cuisines
    ? cuisines.length > 1
      ? cuisines.join(", ")
      : cuisines
    : "";
  return (
    <div className="w-[250px] h-[500px] mx-3 my-4 bg-[#FFD580] brightness text-black  font-mono border rounded-md shadow hover:shadow-lg hover:scale-105 transform transition duration-75">
      <img
        className="w-96 h-60"
        alt="res-logot"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisineList}</h4>
      <h4>{avgRating}</h4>
      <h4>38 mins</h4>
    </div>
  );
};

 export const cardWithPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="hover:scale-105 transform transition duration-100">

        <label className="absolute bg-black w-auto p-1 mt-3 rounded-lg text-white z-50">Promoted </label>
        <RestaurantCard  {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
