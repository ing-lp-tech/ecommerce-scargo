import "../../styles/cartBuy/cartBuy.css";

import { useId } from "react";
import { CartIcon } from "../Icons";

import { useGlobalContext } from "../../context/GlobalContextProvider";
import { Link } from "react-router-dom";

/* import { useCart } from "../hooks/useCart.js"; */

// eslint-disable-next-line react/prop-types
function CartItem({ nombre, precio, id, description, images }) {
  return (
    <div>
      {/*  <div className="wave"> */}
      {/* <h3>{categoria}</h3> */}
      <h2>{nombre}</h2>

      <img src={images[0]} />
      <h5>${precio}</h5>
      <h4>{description}</h4>
      <Link to={"/detail/" + id}>Ver detalle</Link>
      {/* </div> */}
    </div>
  );
}

const CartBuy = () => {
  const cartCheckboxId = useId();
  /* const { cart, clearCart, addToCart } = useCart(); */

  const { cart } = useGlobalContext();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" />
      <aside className="cart">
        <ul>
          {cart.map(({ category, title, id, price, description, images }) => (
            <CartItem
              categoria={category}
              nombre={title}
              id={id}
              precio={price}
              key={id}
              description={description}
              images={images}
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
