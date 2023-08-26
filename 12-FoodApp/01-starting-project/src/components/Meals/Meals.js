import React, { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AviliableMeals from "./AvaliableMeals";

const AvaliableMenu = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AviliableMeals />
    </Fragment>
  );
};

export default AvaliableMenu;
