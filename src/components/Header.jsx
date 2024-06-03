import { NavLink } from "react-router-dom";
import { toggleTheme } from "../redux/slices/CounterSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="d-flex align-items-center justify-content-between mb-3 p-4">
      <h2>Redux Toolkit</h2>
      <nav className="d-flex gap-5 align-items-center">
        <NavLink to={"/"}>Sayaç</NavLink>
        <NavLink to={"/crud"}>Crud</NavLink>
        <button onClick={() => dispatch(toggleTheme())}>Tema Değiş</button>
      </nav>
    </header>
  );
};

export default Header;
