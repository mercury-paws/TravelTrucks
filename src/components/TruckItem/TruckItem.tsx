import MyCustomSVG from "../../assets/svg";
import css from "./TruckItem.module.css";
import { NavLink } from "react-router-dom";

export default function TruckItem({ data }) {
  const trueValues = Object.entries(data).filter(
    ([key, value]) => value === true
  );

  return (
    <div className={css.truckItemContainer}>
      <img src={data.gallery[0].thumb} className={css.img} />{" "}
      <div className={css.truckItemInfo}>
        <div className={css.truckItemMainInfoBlock}>
          <div className={css.truckItemMainInfo}>
            <p className={css.truckName}>{data.name}</p>
            <div className={css.priceHeart}>
              <p className={css.truckPrice}>
                {"Є"}
                {data.price}
              </p>
              <div className={css.heartIcon}>
                <MyCustomSVG svgName={"heart-icon"} />
              </div>
            </div>
          </div>
          <div className={css.reviewsLocation}>
            <p>
              {data.rating} {data.reviews.length} {"Reviews"}
            </p>
            <p>{data.location}</p>
          </div>
        </div>

        <p className={css.motto}>{data.description}</p>
        <ul className={css.plusesList}>
          {trueValues.map((plus) => {
            return <li className={css.plusesItem}>{plus[0]}</li>;
          })}
        </ul>
        <NavLink to="/truckID" className={css.showMore}>
          Show More
        </NavLink>
      </div>
    </div>
  );
}
