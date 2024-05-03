import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

const RenderItemsSection = ({card}) => {
   const {name,defaultPrice,price} = card?.info
   const dispatch = useDispatch()
   const handleAddItem = () => {
       dispatch(addItem('Pizzza'))
   }
   return (
    <div className="border-b-2 flex justify-between p-2">
       <div className="text-left">
          {name} ---
          {defaultPrice/100 || price/100}
       </div>
       <button onClick = {handleAddItem} className="border border-black rounded-md p-2 mr-1 bg-black text-white ">Add +</button>
       </div>
   )
}

export default RenderItemsSection;