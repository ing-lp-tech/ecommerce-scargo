import { useContext, createContext, useState } from "react";
/* import { products } from "../productsDB"; */
import { productsScargo } from "../productsScargo";

const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
const GlobalContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [prodSearch, setProdSearch] = useState([]);

  const handleAddProduct = (id) => {
    const productFound = productsScargo.find(
      (prod) => Number(prod.id) === Number(id)
    );
    const isInCart = cart.find((producto) => producto.id == id);
    if (isInCart) {
      setCart(
        cart.map((producto) => {
          if (producto.id === id) {
            producto.quantity++;
          }
          return producto;
        })
      );
    } else {
      setCart([...cart, { ...productFound, quantity: 1 }]);
    }
  };

  const productsSearch = (prod) => {
    setProdSearch(prod);
  };

  const nombre = "luis";
  console.log(cart);
  return (
    <GlobalContext.Provider
      value={{ handleAddProduct, productsSearch, prodSearch, nombre, cart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;
