import { CategoriesComponent } from "../components/CategoriesComponent";
import { PizzaBlockComponent } from "../components/PizzaBlockComponent";
import { PizzaBlockLoader } from "../components/PizzaBlockLoader";
import { SortComponent } from "../components/SortComponent";
import { getPizzasList } from "../modules/api";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setSortType } from "../redux/slices/filterSlice";

export const Home = () => {
  const { categoryId, sort } = useSelector((state) => state.filter);
  const searchValue = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  const [pizzasList, setPizzasList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getPizzasList({ categoryId, sort: sort.sortProp }).then((data) => {
      setPizzasList(data);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [categoryId, sort]);

  const pizzas = pizzasList
    .filter((obj) =>
      obj.title.toUpperCase().includes(searchValue.toUpperCase())
    )
    .map((pizza) => <PizzaBlockComponent {...pizza} key={pizza.id} />);

  const skeleton = [...new Array(8)].map((_, index) => (
    <PizzaBlockLoader key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <CategoriesComponent
          categoryId={categoryId}
          onClickCategory={(id) => dispatch(setCategoryId(id))}
        />
        <SortComponent
          value={sort}
          onChangeSort={(obj) => dispatch(setSortType(obj))}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
    </div>
  );
};
