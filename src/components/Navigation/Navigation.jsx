// import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <nav>
        {/* <NavLink className={css.link} to="/"> */}
        <p>Home</p>
        {/* </NavLink> */}
        {/* <NavLink className={css.link} to="/catalog"> */}
        <p>Catalog</p>
        {/* </NavLink> */}
      </nav>
    </>
  );
}
