/* import shield from "../assets/shield.svg";
import { useGlobalContext } from "../context/GlobalContextProvider"; */
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

import "../../styles/header/header.css";
import ChildCareIcon from "@mui/icons-material/ChildCare";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "25vw",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  /* const { nombre } = useGlobalContext(); */
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to={"/home"}>
            <ChildCareIcon />
            <h1>Scargo</h1>
          </Link>
        </div>
        <div className="search">
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link to={"/comoComprar"}>COMO COMPRAR</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/faq"}>CONTACTO</Link>
            </li>
            <li>
              <Link to={"/ingresar"}>
                <PersonIcon />
              </Link>
            </li>
          </ul>
        </div>
      </header>
      {/* <header>
        <img src={shield} />
        <h1>{nombre}</h1>
        <h2>HEADER</h2>
      </header>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        ></IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar> */}
    </>
  );
};

export default Header;
