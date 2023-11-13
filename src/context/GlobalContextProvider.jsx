import { useContext, createContext, useState } from "react";
/* import { products } from "../productsDB"; */
import { productsScargo } from "../productsScargo";

const GlobalContext = createContext();

//users login
const users = [
  { username: "luis", password: "luis" },
  { username: "usuario1", password: "contrasena1" },
  { username: "usuario2", password: "contrasena2" },
  { username: "usuario3", password: "contrasena3" },
];
//

// eslint-disable-next-line react/prop-types
const GlobalContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [prodSearch, setProdSearch] = useState([]);

  //login
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  //
  const handleAddProduct = (id) => {
    const productFound = productsScargo.find(
      (prod) => Number(prod.id) === Number(id)
    );
    console.log("productFound:", productFound);
    const isInCart = cart.find((producto) => producto.id == id);
    console.log("isInCart:", isInCart);
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
  const handleRemoveProduct = (id) => {
    const productFound = productsScargo.find(
      (prod) => Number(prod.id) === Number(id)
    );
    console.log("productFound:", productFound);
    const isInCart = cart.find((producto) => producto.id == id);
    console.log("isInCart:", isInCart);
    if (isInCart) {
      setCart(
        cart.map((producto) => {
          if (producto.id === id) {
            producto.quantity--;
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

  //functions login
  const login = (credentials) => {
    const user = users.find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );
    if (user) {
      setLoggedIn(true);
      setUsername(credentials.username);
    }
  };

  const logout = () => {
    setLoggedIn(false);
  };
  //

  const nombre = "luis";
  console.log("cart:", cart);
  return (
    <GlobalContext.Provider
      value={{
        handleAddProduct,
        handleRemoveProduct,
        productsSearch,
        prodSearch,
        nombre,
        cart,
        isLoggedIn,
        username,
        login,
        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;
