import "../styles/home/products.css";
import Card from "../components/Home/Card";
import { useGlobalContext } from "../context/GlobalContextProvider";
import Carousel from "../components/Home/Carousel";

const Home = () => {
  const { prodSearch } = useGlobalContext();
  return (
    <div className="home">
      <img
        className="imageBienvenidos"
        src="/imagenes/bienvenidoScargo.png"
        alt=""
      />

      <Carousel />
      <div className="products">
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
    </div>
  );
};

export default Home;
