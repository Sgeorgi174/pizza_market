import { CategoriesComponent } from "../components/CategoriesComponent";
import { PizzaBlockComponent } from "../components/PizzaBlockComponent";
import { PizzaBlockLoader } from "../components/PizzaBlockLoader";
import { SortComponent } from "../components/SortComponent";
import { getPizzasList } from "../modules/api";
import { useEffect, useState } from "react";

export const Home = () => {
  const [pizzasList, setPizzasList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    sortName: "популярности",
    sortProp: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    getPizzasList({ categoryId, sortType: sortType.sortProp }).then(
      (response) => {
        setPizzasList(response);
        setIsLoading(false);
      }
    );
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <CategoriesComponent
          categoryId={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <SortComponent
          value={sortType}
          onChangeSort={(obj) => setSortType(obj)}
        />
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
    </div>
  );
};
