import { useEffect, useState } from "react";
import { ShimmerContentBlock } from "react-shimmer-effects";
import { isEmpty } from "lodash";
import { useParams } from "react-router-dom";
const RendermenuDetails = (menu) => {
    console.log(menu.menu.card.info.name,'menu==')
    
 
  return (
    <>
      <ul>
        <li>{menu?.menu?.card?.info?.name} --{menu?.menu?.card?.info?.price/100}Rs</li>
      </ul>
    </>
  );
};

const RestaurantMenu = () => {
  const [hotelInfo, setHotelInfo] = useState({});
  const [menuInfo, setMenuInfo] = useState({});
  const {resId} = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`
    https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    const restaurantInfo = await data.json();
    console.log(restaurantInfo, "haha---");
    console.log(restaurantInfo?.data?.cards[0]?.card?.card?.info, "haha");
    setHotelInfo(restaurantInfo?.data?.cards[0]?.card?.card?.info);
    setMenuInfo(
      restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[8]?.card?.card?.itemCards
    );
  };

  console.log(hotelInfo.length, "hotel--");
  const { name, costForTwoMessage, cloudinaryImageId } = hotelInfo;
  console.log(name, "heyNAme");
  console.log(menuInfo, "heyNAme");

  const isObjectEmpty = (obj) => {
    return isEmpty(obj);
  };

  return !isObjectEmpty(hotelInfo) ? (
    <>
      <div>
        <div className="name-img">
          <img
            className="rest-image"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt="rest-image"
          />
        </div>
        <div>
          <h1>{name}</h1>
        </div>
      </div>
      <div>{costForTwoMessage}</div>
      <div> Menu</div>
      {menuInfo?.map((menu, index) => (
        <RendermenuDetails key={index} menu ={menu} />
      ))}
    </>
  ) : (
    <>
      <div>
        <ShimmerContentBlock
          title
          text
          cta
          thumbnailWidth={370}
          thumbnailHeight={370}
        />
      </div>
    </>
  );
};

export default RestaurantMenu;
