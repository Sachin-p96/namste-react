const RenderItemsSection = ({card}) => {
   const {name,defaultPrice,price} = card?.info
   return (
    <div className="border-b-2 flex justify-between">
       <div className="text-left">
          {name}
       </div>
       <div>
          {defaultPrice/100 || price/100}
       </div>
       </div>
   )
}

export default RenderItemsSection;