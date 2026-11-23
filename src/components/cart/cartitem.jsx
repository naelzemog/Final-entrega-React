import { useCart } from "../../context/CartContext";
import { Item } from "../item/item.jsx";

export const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <Item {...item}>
      <button
        className="btn bg-delete primary"
        onClick={() => removeItem(item.id)}
      >
        Eliminar
      </button>
    </Item>
  );
};
