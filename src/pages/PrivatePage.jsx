import { useGlobalContext } from "../context/GlobalContextProvider";
import { useState } from "react";

const PrivatePage = () => {
  const { username } = useGlobalContext();
  const [stock, setStock] = useState({
    tallas: ["S", "M", "L"],
    colores: ["Rojo", "Azul", "Verde"],
    inventario: {},
  });

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
  console.log(username);
  return (
    <div>
      <h1>Stock de Productos</h1>
      <table>
        <thead>
          <tr>
            <th>Talla</th>
            {stock.colores.map((color) => (
              <th key={color}>{color}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stock.tallas.map((talla) => (
            <tr key={talla}>
              <td>{talla}</td>
              {stock.colores.map((color) => (
                <td key={color}>
                  <select
                    onChange={(e) =>
                      handleCantidadChange(
                        talla,
                        color,
                        parseInt(e.target.value, 10)
                      )
                    }
                    value={stock.inventario[talla]?.[color] || 0}
                  >
                    {[...Array(10).keys()].map((cantidad) => (
                      <option key={cantidad} value={cantidad}>
                        {cantidad}
                      </option>
                    ))}
                  </select>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <pre>{JSON.stringify(stock, null, 2)}</pre>
    </div>
  );
};

export default PrivatePage;
