import RestaurantCard, { cardWithPromoted } from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  let [restrautLists, setRestList] = useState([]);
  const [fliteredSearchRestaurants, setFilteredSearchRestauants] = useState([]);
  const [value, setValue] = useState("");
  const {setName} = useContext(UserContext);
  const RestaurantCardWithPromoted = cardWithPromoted(RestaurantCard);
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
    setFilteredSearchRestauants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  const handleClick = () => {
    console.log("am i called");
    const filtereList = restrautLists.filter(
      (res) => res.info.avgRating >= 4.4
    );
    console.log(filtereList, "heyBuddy");
    setFilteredSearchRestauants(filtereList);
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
    );
  }
  return (
    <div className="body">
      {restrautLists.length > 0 ? (
        <>
          <div className="mt-2 p-4 flex justify-end">
            <div className="search flex">
              <input
                data-testid = "search-input"
                type="text"
                className="px-8 py-1 mr-3 border focus:border-none"
                placeholder="Search the restaurant"
                value={value}
                onChange={handleInputChange}
              />
              <button
                className="bg-transparent px-8 py-1 mr-3 hover:bg-orange-200 hover:text-black text-orange-500 font-semibold hover:text-white py-2 px-4 border  border-black hover:border-transparent rounded"
                onClick={searchRestaurant}
              >
                Search
              </button>
            </div>
            <button className="px-8 py-1 bg-orange-200" onClick={handleClick}>
              Top Rated Resturants
            </button>
            
                
              <input className="px-8 py-1 ml-2 border border-orange-400" placeholder="Enter Login name" onChange={(e)=> {setName(e.target.value)}} />

          </div>
          <div className="flex flex-wrap justify-center bg-orange-100">
            {fliteredSearchRestaurants.map((restaurant) => (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant?.info?.id}
              >
                {restaurant.info.avgRating > 4.2 ? (
                  <RestaurantCardWithPromoted {...restaurant.info} />
                ) : (
                  <RestaurantCard {...restaurant.info} />
                )}
              </Link>
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
