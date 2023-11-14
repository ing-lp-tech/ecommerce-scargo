import { useState } from "react";
import ModalForm from "./ModalForm";
import TablaInventario from "./TablaInventario";
import "../../styles/privatePage/appPrivate.css";

/* import SeleccionStock from "../components/PrivatePage/SelectionStock";
import ConfiguracionStock from "../components/PrivatePage/Configuration"; */

const AppPrivate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inventario, setInventario] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRow(null);
  };

  const handleGuardarInfo = (info) => {
    if (selectedRow !== null) {
      // Modificar el registro existente si selectedRow no es null
      setInventario((prevInventario) =>
        prevInventario.map((item) =>
          item.id === selectedRow ? { ...item, ...info } : item
        )
      );
    } else {
      // Agregar un nuevo registro si selectedRow es null
      const nuevoItem = { id: idCounter, ...info };
      setInventario((prevInventario) => [...prevInventario, nuevoItem]);
      setIdCounter(idCounter + 1);
    }
    handleCloseModal();
  };

  const handleEliminar = (id) => {
    setInventario((prevInventario) =>
      prevInventario.filter((item) => item.id !== id)
    );
  };

  const handleModificar = (id) => {
    // Configurar selectedRow y abrir el modal para la edición
    setSelectedRow(id);
    setModalOpen(true);
  };

  return (
    <div className="app-container">
      <h1>Inventario App</h1>
      <button onClick={handleOpenModal}>Nuevo Registro</button>
      <ModalForm
        open={modalOpen}
        onClose={handleCloseModal}
        onSave={handleGuardarInfo}
        // Pasa las propiedades del elemento seleccionado a ModalForm
        data={
          selectedRow !== null
            ? inventario.find((item) => item.id === selectedRow)
            : null
        }
      />
      <TablaInventario
        inventario={inventario}
        onEliminar={handleEliminar}
        onModificar={handleModificar}
        selectedRow={selectedRow}
      />
    </div>
  );
};

export default AppPrivate;

/* const AppPrivate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inventario, setInventario] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRow(null);
  };

  const handleGuardarInfo = (info) => {
    const nuevoItem = { id: idCounter, ...info };
    setInventario((prevInventario) => [...prevInventario, nuevoItem]);
    setIdCounter(idCounter + 1);
    handleCloseModal();
  };

  const handleEliminar = (id) => {
    setInventario((prevInventario) =>
      prevInventario.filter((item) => item.id !== id)
    );
  };

  const handleModificar = (id) => {
    // Lógica para modificar el registro, puedes implementarla según tus necesidades
    console.log(`Modificar el registro con ID ${id}`);
  };

  return (
    <div className="app-container">
      <h1>Inventario App</h1>
      <button onClick={handleOpenModal}>Nuevo Registro</button>
      <ModalForm
        open={modalOpen}
        onClose={handleCloseModal}
        onSave={handleGuardarInfo}
      />
      <TablaInventario
        inventario={inventario}
        onEliminar={handleEliminar}
        onModificar={handleModificar}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
      />
    </div>
  );
};

export default AppPrivate; */

/* const AppPrivate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inventario, setInventario] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleGuardarInfo = (info) => {
    console.log("info:", info);
    const nuevoItem = { id: idCounter, ...info };
    setInventario((prevInventario) => [...prevInventario, nuevoItem]);
    setIdCounter(idCounter + 1);
    handleCloseModal();
  };

  return (
    <div className="app-container">
      <h1>Inventario App</h1>
      <button onClick={handleOpenModal}>Nuevo Registro</button>
      <ModalForm
        open={modalOpen}
        onClose={handleCloseModal}
        onSave={handleGuardarInfo}
      />
      <TablaInventario inventario={inventario} />
    </div>
  );
};
export default AppPrivate; */

/* const AppPrivate = () => {
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
export default AppPrivate; */
