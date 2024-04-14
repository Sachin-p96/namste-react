import { useEffect, useState } from "react";
import { ShimmerContentBlock } from "react-shimmer-effects";
import { isEmpty } from "lodash";
import { useParams } from "react-router-dom";
import useMenuInfo from "../utils/useMenuInfo";
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
 
  const {resId} = useParams();
  const resInfo = useMenuInfo(resId);
  console.log(resInfo,'hahababe')
 
 

  const isObjectEmpty = (obj) => {
    return isEmpty(obj);
  };
if (isObjectEmpty(resInfo)){
    return(
        
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
          
    )
}
  const { name, costForTwoMessage, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info;
  
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
  ?.cards[8]?.card?.card

  return (
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
      {itemCards?.map((menu, index) => (
        <RendermenuDetails key={index} menu ={menu} />
      ))}
    </>
  ) 
};

export default RestaurantMenu;
