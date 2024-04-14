import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  let [restrautLists, setRestList] = useState([]);
  const [fliteredSearchRestaurants, setFilteredSearchRestauants] = useState([]);
  const [value, setValue] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data.data.cards[1]);
    setRestList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredSearchRestauants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  const handleClick = () => {
    const filtereList = restrautLists.filter(
      (res) => res.info.avgRating >= 4.4
    );
    console.log(filtereList, "heyBuddy");
    setRestList(filtereList);
  };
  const searchRestaurant = () => {
    console.log(restrautLists, "haha");
    console.log(value, "hahahey");
    const searchResultsList = restrautLists.filter((res) =>
      res.info.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSearchRestauants(searchResultsList);
  };
 if (onlineStatus === false) {
   return (
     <>
        <h1>Hey looks like you are offline! Please Check your Connection!</h1>
     </>
   )
 }
  return (
    <div className="body">
      {restrautLists.length > 0 ? (
        <>
          <div className="filter">
            <div className="search">
              <input
                type="text"
                className="search-box"
                placeholder="Search the restaurant"
                value={value}
                onChange={handleInputChange}
              />
              <button onClick={searchRestaurant}>Search</button>
            </div>
            <button className="filter-btn" onClick={handleClick}>
              Top Rated Button
            </button>
          </div>
          <div className="res-container">
            {fliteredSearchRestaurants.map((restaurant) => (
              <Link to = {"/restaurant/"+restaurant.info.id} key={restaurant?.info?.id}><RestaurantCard {...restaurant.info} /></Link>
              
            ))}
          </div>
        </>
      ) : (
        <>
          <div>
            <ShimmerSimpleGallery card imageHeight={250} imageWidth={250} />
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
