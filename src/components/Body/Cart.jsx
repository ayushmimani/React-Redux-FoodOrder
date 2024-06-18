import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearcart } from "../Utils/CartSlice";

const Cart = () => {
  const cartitem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handlecart = () => {
    dispatch(clearcart());
  };
  return (
    <div className="text-center">
      <h1 className="text-2xl m-4 p-4">Cart</h1>
      <div className="w-6/12 m-auto">
        <button className="bg-black text-white m-2 p-2" onClick={handlecart}>
          Clear Cart
        </button>
        <ItemList items={cartitem} />
      </div>
    </div>
  );
};

export default Cart;
