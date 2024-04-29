import { useEffect, useState } from "react";
import { ShimmerContentBlock } from "react-shimmer-effects";
import { isEmpty } from "lodash";
import { useParams } from "react-router-dom";
import useMenuInfo from "../utils/useMenuInfo";
import RenderItemsSection from "./RenderItemsSection";

const RendermenuDetails = ({menu,showItem,handleIndex}) => {
  
  console.log(menu, "menu");
  const {itemCards} = menu?.card?.card
  const handleAcoordionClick = () =>{
    handleIndex()

  }
  return (
    <div className=" bg-slate-300 m-10 text-center">
      <div className="flex justify-between p-2 cursor-pointer " onClick={handleAcoordionClick}>
        <div className="">{menu?.card?.card?.title}</div>
        <span>🔽</span>
        
      </div>
      {showItem && itemCards.map((item,index)=> <RenderItemsSection {...item} key={item.card.info.id}/>)}
    </div>
  );
};

const RestaurantMenu = () => {
  const [showIndex ,setShowIndex] = useState(0);
  
 const [isOpen,setIsOpen]  = useState(false);


  handleIndex = (index) =>{
    setShowIndex(index);
    if(index == showIndex) {
      setIsOpen(!isOpen);
    }
    else{
      setIsOpen(true)
    }
    
   
  }
  const { resId } = useParams();
  const resInfo = useMenuInfo(resId);
  console.log(resInfo, "hahababe");

  const isObjectEmpty = (obj) => {
    return isEmpty(obj);
  };
  if (isObjectEmpty(resInfo)) {
    return (
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
  }
  const { name, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(resInfo, "info");
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(itemCards, "hey");
  console.log(showIndex, "heyINDEX");
 
  return (
    <>
      <div>
        <div className="flex font-bold font-mono text-xl w-100 text-center justify-center">
          <h1>{name}</h1>
          <div>--{costForTwoMessage}</div>
        </div>

        {/* <div className="flex justify-center bg-orange-400 mt-3">
          <img
            className="w-[250px]"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt="rest-image"
          />
          <div className="flex font-bold font-serif items-center"></div>
        </div> */}
      </div>

      <div className="text-center mt-10 text-lg font-bold font-serif"> Menu</div>
      {itemCards?.map((menu, index) => (
        <RendermenuDetails key={index} menu={menu} showItem = {index === showIndex && isOpen ? true : false} handleIndex = {()=>{handleIndex(index)}} />
      ))}
    </>
  );
};

export default RestaurantMenu;
