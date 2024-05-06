import { useDispatch, useSelector } from "react-redux"
import { addItem, setPageName } from "../utils/cartSlice"

const RenderItemsSection = ({card}) => {
   const {name,defaultPrice,price} = card?.info
   const dispatch = useDispatch()
   const handleAddItem = (item) => {
       dispatch(addItem(item))
   }
   
   const pageName = useSelector((store)=> store.cart.pageName)
   if (window.location.href.includes('cart')){
      dispatch(setPageName('cart'))
   }
   else {
      dispatch(setPageName(''))
   }
   return (
    <div className="border-b-2 flex justify-between p-2">
       <div className="text-left">
          {name} ---
          {defaultPrice/100 || price/100}
       </div>
       {pageName !== 'cart' && <button onClick = {() => handleAddItem(card)} className="border border-black rounded-md p-2 mr-1 bg-black text-white ">Add +</button>}
       </div>
   )
}

export default RenderItemsSection;