/* import reactLogo from "./assets/react.svg"; */
/* import viteLogo from "/vite.svg"; */

import PageRouter from "./router/PageRouter";
import { Header, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="pages">
        <PageRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
