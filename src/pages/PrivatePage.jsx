/* import { useGlobalContext } from "../context/GlobalContextProvider"; */
import { useState } from "react";
import SeleccionStock from "../components/PrivatePage/SelectionStock";
import ConfiguracionStock from "../components/PrivatePage/Configuration";

const PrivatePage = () => {
  const [configuracion, setConfiguracion] = useState({
    talles: ["S", "M", "L"],
    colores: ["Rojo", "Azul", "Verde"],
  });

  const [stock, setStock] = useState({
    inventario: {},
  });

  const handleConfiguracionChange = (nuevaConfiguracion) => {
    setConfiguracion(nuevaConfiguracion);

    // Reiniciar el inventario al cambiar la configuración
    setStock({ inventario: {} });
  };

  const handleCantidadChange = (talla, color, cantidad) => {
    setStock((prevStock) => ({
      ...prevStock,
      inventario: {
        ...prevStock.inventario,
        [talla]: {
          ...prevStock.inventario[talla],
          [color]: cantidad,
        },
      },
    }));
  };

  return (
    <div>
      <ConfiguracionStock onConfiguracionChange={handleConfiguracionChange} />
      <SeleccionStock
        talles={configuracion.talles}
        colores={configuracion.colores}
        onCantidadChange={handleCantidadChange}
      />
      <pre>{JSON.stringify(stock, null, 2)}</pre>
    </div>
  );
};
export default PrivatePage;
