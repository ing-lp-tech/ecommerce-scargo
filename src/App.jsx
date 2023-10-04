/* import reactLogo from "./assets/react.svg"; */
/* import viteLogo from "/vite.svg"; */

import PageRouter from "./router/PageRouter";
import { Header } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <PageRouter />
    </>
  );
}

export default App;
