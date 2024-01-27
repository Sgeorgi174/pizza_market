import { CategoriesComponent } from "../components/CategoriesComponent";
import { PizzaBlockComponent } from "../components/PizzaBlockComponent";
import { PizzaBlockLoader } from "../components/PizzaBlockLoader";
import { SortComponent } from "../components/SortComponent";
import { getPizzasList } from "../modules/api";
import { useEffect, useState } from "react";

export const Home = () => {
  const [pizzasList, setPizzasList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPizzasList().then((response) => {
      setPizzasList(response);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <div className="content__top">
        <CategoriesComponent />
        <SortComponent />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => (
              <PizzaBlockLoader key={index} />
            ))
          : pizzasList.map((pizza) => (
              <PizzaBlockComponent {...pizza} key={pizza.id} />
            ))}
      </div>
    </>
  );
};
