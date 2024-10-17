import css from "./Type.module.css";
import MyCustomSVG from "../../assets/svg";

export default function Type() {
  return (
    <div className={css.typeContainer}>
      <p className={css.type}>Vehicle type</p>

      <ul className={css.typeList}>
        <li className={css.typeItem}>
          {" "}
          <MyCustomSVG svgName={"van-icon"} />
          Van
        </li>
        <li className={css.typeItem}>
          {" "}
          <MyCustomSVG svgName={"integrated-icon"} />
          Fully integrated
        </li>
        <li className={css.typeItem}>
          {" "}
          <MyCustomSVG svgName={"alcove-icon"} />
          Alcove
        </li>
      </ul>
    </div>
  );
}
