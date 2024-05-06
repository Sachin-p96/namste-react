import { useDispatch, useSelector } from "react-redux";
import RenderItemsSection from "./RenderItemsSection";
import { removeCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items)
    console.log(cartItems,'hey')
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(removeCart())

    }
    return (
        <div className="text-center mt-3">
          <button className = "text-center border border-black rounded-lg font-bold p-4 bg-black text-white hover:scale-105 uppercase"onClick = {handleClearCart}>Clear Cart</button>
          {cartItems.map((item)=><RenderItemsSection card= {item}/>)
           }
        </div>
    )
}

export default Cart;