/* import { products } from "../productsDB"; */
/* 
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { Button } from "@mui/material";
import { productsScargo } from "../productsScargo"; */
import "../styles/home/products.css";
import Card from "../components/Home/Card";
import { useGlobalContext } from "../context/GlobalContextProvider";
import Carousel from "../components/Home/Carousel";
/* import CartBuy from "../components/Home/CartBuy"; */

const Home = () => {
  const { prodSearch } = useGlobalContext();
  return (
    <div className="home">
      {/*   <h1>Bienvenidos a Scargo Store</h1> */}
      <img
        className="imageBienvenidos"
        src="/imagenes/bienvenidos.png"
        alt=""
      />

      {/*  <CartBuy /> */}
      <Carousel />
      <div className="products">
        {/* {products.map(({ categoria, nombre, id, precio }) => (
          <Card
            categoria={categoria}
            nombre={nombre}
            id={id}
            precio={precio}
            key={id}
          />
        ))} */}
        {prodSearch.map(
          ({ category, title, id, price, description, images }) => (
            <Card
              categoria={category}
              nombre={title}
              id={id}
              precio={price}
              key={id}
              description={description}
              images={images}
            />
          )
        )}
      </div>
      {/* <Button>
        click <ChildCareIcon />
      </Button> */}
    </div>
  );
};

export default Home;
