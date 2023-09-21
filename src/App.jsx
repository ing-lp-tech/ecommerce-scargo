/* import reactLogo from "./assets/react.svg"; */
/* import viteLogo from "/vite.svg"; */
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PageRouter from "./router/PageRouter";
import { Header } from "./components";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <PageRouter />
      <Button>
        click <ChildCareIcon />
      </Button>
    </>
  );
}

export default App;
