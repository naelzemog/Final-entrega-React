import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CartList } from "./cartlist.jsx";
import { CartSummary } from "./cartsummary.jsx";
import "./cart.css";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1>Tu carrito de compras</h1>

      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <>
          <p className="empty-cart">El carrito está vacío 😕</p>
          <Link className="btn primary bg-primary" to="/">
            Volver
          </Link>
        </>
      )}
    </section>
  );
};
