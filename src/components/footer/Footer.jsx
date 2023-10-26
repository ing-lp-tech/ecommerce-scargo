import "../../styles/footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Ubicación</h2>
            <p>Dirección: Calle Principal, Ciudad</p>
          </div>
          <div className="footer-section">
            <h2>Contacto</h2>
            <p>Teléfono: (123) 456-7890</p>
            <p>Correo Electrónico: info@tutienda.com</p>
          </div>
          <div className="footer-section">
            <h2>Redes Sociales</h2>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Categorías de Productos</h2>
            <ul>
              <li>
                <a href="#">Niños</a>
              </li>
              <li>
                <a href="#">Niñas</a>
              </li>
              <li>
                <a href="#">Bebés</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Preguntas Frecuentes</h2>
            <ul>
              <li>
                <a href="#">¿Cómo realizar un pedido?</a>
              </li>
              <li>
                <a href="#">Política de devoluciones</a>
              </li>
              <li>
                <a href="#">Términos y condiciones</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
