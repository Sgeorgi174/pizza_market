import { CategoriesComponent } from "../components/CategoriesComponent";
import { PizzaBlockComponent } from "../components/PizzaBlockComponent";
import { PizzaBlockLoader } from "../components/PizzaBlockLoader";
import { SortComponent, sortList } from "../components/SortComponent";
import { getPizzasList } from "../modules/api";
import { useEffect, useRef, useState } from "react";
import qs from "qs";

import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setSortType,
  setFilters,
} from "../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { categoryId, sort } = useSelector((state) => state.filter);
  const searchValue = useSelector((state) => state.search.value);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isMounted = useRef(false);
  const isSearch = useRef(false);

  const [pizzasList, setPizzasList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProp: sort.sortProp,
        categoryId,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort, navigate]);

  // Если был первый рендер, то проверяем URl-параметры и сохраняем в редуксе
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProp === params.sortProp);
      dispatch(setFilters({ ...params, sort }));
    }
  }, [dispatch]);

  // Если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      setIsLoading(true);
      getPizzasList({ categoryId, sort: sort.sortProp }).then((data) => {
        setPizzasList(data);
        setIsLoading(false);
      });
    }

    isSearch.current = false;
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
