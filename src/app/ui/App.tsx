import { DashboardPage } from "../../pages/dashboard";
import style from "./app.module.scss";

export const App = () => {
  return (
    <div className={style.app}>
      <DashboardPage />
    </div>
  );
};
