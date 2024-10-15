import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}
