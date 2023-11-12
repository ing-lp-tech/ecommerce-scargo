import "../../styles/cartBuy/cartBuy.css";

import { useId } from "react";
import { CartIcon } from "../Icons";

import { useGlobalContext } from "../../context/GlobalContextProvider";

/* import { useCart } from "../hooks/useCart.js"; */

// eslint-disable-next-line react/prop-types
function CartItem({ nombre, precio, images, quantity }) {
  return (
    <div className="cartItem">
      <h4>{nombre}</h4>
      <img src={images[0]} />
      <h5>Cantidad:{quantity}</h5>
      <h5>Total:${precio * quantity}</h5>
      {/* <Link to={"/detail/" + id}>Ver detalle</Link> */}
    </div>
  );
}

const CartBuy = () => {
  const cartCheckboxId = useId();
  /* const { cart, clearCart, addToCart } = useCart(); */

  const { cart } = useGlobalContext();

  console.log("cart:", cart);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input className="inputCar" id={cartCheckboxId} type="checkbox" />
      <aside className="cart">
        <h4>Carrito</h4>
        <ul>
          {cart.map(({ title, id, price, description, images, quantity }) => (
            <CartItem
              nombre={title}
              id={id}
              precio={price}
              key={id}
              description={description}
              images={images}
              quantity={quantity}
            />
          ))}
        </ul>

        {/*  <button onClick={clearCart}>
          <ClearCartIcon />
        </button> */}
      </aside>
    </>
  );
};

export default CartBuy;
