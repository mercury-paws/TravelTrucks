import css from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={css.hero}>
      <div className={css.heroBlock}>
        <h1 className={css.heroHeader}>Campers of your dreams</h1>
        <p className={css.heroText}>
          You can find everything you want in our catalog
        </p>
        <button className={css.viewBtn}>View Now</button>
      </div>
    </div>
  );
}
