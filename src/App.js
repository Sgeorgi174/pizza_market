import { CategoriesComponent } from "./components/CategoriesComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { PizzaBlockComponent } from "./components/PizzaBlockComponent";
import { SortComponent } from "./components/SortComponent";
import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <HeaderComponent />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <CategoriesComponent />
              <SortComponent />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlockComponent title="Мексиканская" price="500" />
              <PizzaBlockComponent title="Чизбургер-пицца" price="555" />
              <PizzaBlockComponent title="Пепперони" price="650" />
              <PizzaBlockComponent title="Четыре сезона" price="350" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
