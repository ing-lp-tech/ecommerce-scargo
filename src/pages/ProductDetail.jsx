import { useParams } from "react-router-dom";
/* import { products } from "../productsDB"; */
import { Error404 } from "../components";
import { useGlobalContext } from "../context/GlobalContextProvider";
import { productsScargo } from "../productsScargo";
import "../styles/productDetail/productDetail.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Medidas from "../components/productDetail/Medidas";
import Colores from "../components/productDetail/Colores";

const ProductDetail = () => {
  /* const {id} = useParams()  desestrucutramos al id, forma alt mejor*/
  const rute = useParams();
  const productFound = productsScargo.find(
    (product) => product.id === Number(rute.id)
  );
  const { handleAddProduct } = useGlobalContext();

  return (
    <div>
      {productFound ? (
        <div className="details">
          <div className="produtsDetail">
            <div className="productImage">
              <h2>{productFound.title}</h2>
              <img src={productFound.images[0]} />
            </div>

            <div className="productDescription">
              <h2>Descripcion: {productFound.description}</h2>
              <h3>Medidas:</h3>
              <Medidas talles={productFound.talles} />
              <h3>Colores:</h3>
              <Colores colores={productFound.colores} />
              <h3>Precio: $ {productFound.price}</h3>
              <h3>Añadir al carrito:</h3>
              <Fab
                sx={{
                  zIndex: 0,
                }}
                size="medium"
                color="primary"
                aria-label="add"
              >
                <AddIcon onClick={() => handleAddProduct(productFound.id)} />{" "}
              </Fab>
              {/* <button onClick={() => handleAddProduct(productFound.id)}>
                Añadir al carrito
              </button> */}
            </div>
          </div>
        </div>
      ) : (
        <Error404 mensaje={"El producto buscado no existe"} />
      )}
    </div>
  );
};

export default ProductDetail;
