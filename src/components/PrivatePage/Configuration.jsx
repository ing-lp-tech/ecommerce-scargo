import { useState } from "react";
import "../../styles/privatePage/selectionStock.css";

// eslint-disable-next-line react/prop-types

const ConfiguracionStock = ({ onConfiguracionChange }) => {
  const [configuracion, setConfiguracion] = useState({
    talles: [],
    colores: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validar que solo se ingresen números separados por coma
    if (/^[0-9,]*$/.test(value)) {
      setConfiguracion((prevConfig) => ({
        ...prevConfig,
        [name]: value.split(",").map((item) => item.trim()),
      }));
    }
  };

  const handleConfiguracionSubmit = (e) => {
    e.preventDefault();
    onConfiguracionChange(configuracion);
  };

  return (
    <div>
      <h2>Configuración de Stock</h2>
      <form onSubmit={handleConfiguracionSubmit}>
        <label>
          Talles (separados por coma):
          <input
            type="text"
            name="talles"
            value={configuracion.talles.join(",")}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Colores (separados por coma):
          <input
            type="text"
            name="colores"
            value={configuracion.colores.join(",")}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Guardar Configuración</button>
      </form>
    </div>
  );
};

export default ConfiguracionStock;
