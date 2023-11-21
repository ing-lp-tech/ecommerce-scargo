import "../../styles/cartBuy/cartBuy.css";

import { useId } from "react";
import { CartIcon } from "../Icons";

import { useGlobalContext } from "../../context/GlobalContextProvider";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function CartItem({ nombre, precio, images, talles, id }) {
  console.log(
    "nombre",
    nombre,
    "precio",
    precio,
    "images:",
    images,
    "talles",
    talles
  );
  // eslint-disable-next-line no-undef

  const totals = Object.values(talles).map((talle) =>
    talle.reduce((acc, { cantidad }) => acc + cantidad, 0)
  );

  const totalCantidad = totals.reduce((acc, total) => acc + total, 0);

  return (
    <div className="cartItem">
      <h4>{nombre}</h4>
      <img src={images[0]} />
      <h5>Cantidad:{totalCantidad}</h5>
      <h5>Total:${precio * totalCantidad}</h5>
      <Link to={"/detail/" + id}>Ver detalle</Link>
    </div>
  );
}

//
const CartBuy = () => {
  const cartCheckboxId = useId();

  const { cart } = useGlobalContext();

  const newCart = cart.reduce((acc, producto) => {
    const existingProduct = acc.find((p) => p.id === producto.id);

    if (existingProduct) {
      // El producto ya existe en newArray
      if (!existingProduct.talles[producto.talle]) {
        existingProduct.talles[producto.talle] = [];
      }

      existingProduct.talles[producto.talle].push({
        cantidad: producto.cantidad,
        precio: producto.precio,
      });
    } else {
      // El producto no existe en newArray, lo agregamos
      const newProduct = {
        id: producto.id,
        title: producto.title,
        description: producto.description,
        images: producto.images,
        precio: producto.precio,
        /*  cantidad: { ? }, */
        talles: {
          [producto.talle]: [
            {
              cantidad: producto.cantidad,
              precio: producto.precio,
            },
          ],
        },
      };
      acc.push(newProduct);
    }

    return acc;
  }, []);

  console.log("newCart:", newCart);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input className="inputCar" id={cartCheckboxId} type="checkbox" />
      <aside className="cart">
        <h4>Carrito</h4>
        <ul>
          {newCart.map(({ title, id, precio, description, images, talles }) => (
            <CartItem
              nombre={title}
              id={id}
              precio={precio}
              key={id}
              description={description}
              images={images}
              talles={talles}
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
