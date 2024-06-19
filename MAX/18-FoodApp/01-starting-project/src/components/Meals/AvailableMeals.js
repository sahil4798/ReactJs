import { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  // useEffect(() => {
  //   // fetchrequest(DUMMY_MEALS);
  //   DUMMY_MEALS.forEach((item) => fetchrequest(item));
  // }, []);

  // const fetchrequest = async (item) => {
  //   const response = await fetch(
  //     "https://react-http-5f152-default-rtdb.firebaseio.com/meals.json/",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(item),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const result = await response.json();
  //   console.log(result);
  // };

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHtppError] = useState();

  useEffect(() => {
    const fetchRequest = async () => {
      const response = await fetch(
        "https://react-http-5f152-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Somehing Went Wrong");
      }
      const data = await response.json();

      const meals = [];
      for (const key in data) {
        meals.push({
          id: data[key].id,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
        });
      }
      // console.log(meals.length);

      setMeals(meals);
      setIsLoading(false);
    };

    // try {
    //   fetchRequest();
    // } catch (error) {
    //   console.log("bibfneijwodm");
    //   setHtppError(error.message);
    //   setIsLoading(false);
    // }

    fetchRequest().catch((error) => {
      setHtppError(error.message);
      setIsLoading(false);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let show;
  if (isLoading) {
    show = <p style={{ textAlign: "center" }}>Loading...</p>;
  } else if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  } else {
    show = mealsList;
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{show}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
