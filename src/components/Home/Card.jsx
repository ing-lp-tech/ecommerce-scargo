import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Card = ({ categoria, nombre, precio, id, description, images }) => {
  return (
    <div className="card">
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
};
export default Card;
