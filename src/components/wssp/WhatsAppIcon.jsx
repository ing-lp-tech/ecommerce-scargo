import "../../styles/wssp/wssp.css";
/* import PropTypes from "prop-types"; */
import { useGlobalContext } from "../../context/GlobalContextProvider";

const WhatsAppIcon = () => {
  const { cart } = useGlobalContext();
  const handleChatOpen = () => {
    // Lógica para abrir el chat de WhatsApp al hacer clic
    /* window.open("https://api.whatsapp.com/send?phone=123456789", "_blank"); */

    const textoProductos = cart.map((producto) => {
      const { title, quantity } = producto;
      return `${title} - Cantidad: ${quantity}`;
    });

    const textoFinal = `Productos:\n${textoProductos.join("\n")}`;

    const encodedText = encodeURIComponent(textoFinal);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5491162020911&text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatsapp-icon" onClick={handleChatOpen}>
      <img
        src="/imagenes/WhatsApp.svg" // Añade tu propia imagen de ícono de WhatsApp
        alt="WhatsApp"
      />
    </div>
  );
};

/* WhatsAppIcon.propTypes = {
  defaultText: PropTypes.string.isRequired,
};
 */
export default WhatsAppIcon;
