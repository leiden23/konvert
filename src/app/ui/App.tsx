import style from "./app.module.scss";

import { DashboardPage } from "@/pages/dashboard";

export const App = () => {
  return (
    <div className={style.app}>
      <DashboardPage />
    </div>
  );
};
