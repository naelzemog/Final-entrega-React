import { useCart } from "../../context/CartContext";
import { CartItem } from "./cartitem.jsx";

export const CartList = () => {
  const { cart } = useCart();

  return (
    <div className="cart-items-container">
      {cart.map((element) => (
        <CartItem item={element} key={element.id} />
      ))}
    </div>
  );
};
