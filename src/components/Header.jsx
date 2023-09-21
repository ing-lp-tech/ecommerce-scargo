import shield from "../assets/shield.svg";
import { useGlobalContext } from "../context/GlobalContextProvider";
const Header = () => {
  const { nombre } = useGlobalContext();
  return (
    <header>
      <img src={shield} />
      <h1>{nombre}</h1>
      <h2>HEADER</h2>
    </header>
  );
};

export default Header;
