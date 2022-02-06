import { memo } from "react";
import "./style.css";

const ManagementSystem = () => {
  return (
    <div className="wrapper-manager">
      <h2 className="title-manager">
        Простая и эффективная система управления СТО
      </h2>
      <img
        className="img-manager"
        src="https://workshop.zen.car/new_promo_page/images/priem-avto.png"
        alt="img"
      />
    </div>
  );
};

export default memo(ManagementSystem);
