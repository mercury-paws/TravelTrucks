import css from "./Equipment.module.css";
import MyCustomSVG from "../../assets/svg";

export default function Equipment() {
  return (
    <div className={css.equipmentContainer}>
      <p className={css.equipment}>Vehicle equipment</p>

      <ul className={css.equipmentList}>
        <li className={css.equipmentItem}>
          <MyCustomSVG svgName={"ac-icon"} /> AC
        </li>
        <li className={css.equipmentItem}>
          {" "}
          <MyCustomSVG svgName={"automatic-icon"} /> Automatic
        </li>
        <li className={css.equipmentItem}>
          {" "}
          <MyCustomSVG svgName={"kitchen-icon"} />
          Kitchen
        </li>
        <li className={css.equipmentItem}>
          {" "}
          <MyCustomSVG svgName={"tv-icon"} />
          TV
        </li>
        <li className={css.equipmentItem}>
          {" "}
          <MyCustomSVG svgName={"bathroom-icon"} />
          Bathroom
        </li>
      </ul>
    </div>
  );
}
