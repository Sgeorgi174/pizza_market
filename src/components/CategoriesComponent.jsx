import React from "react";

export const CategoriesComponent = () => {
  const [activeCategory, setActiveCategory] = React.useState(5);

  const categoriesList = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((category, index) => {
          return (
            <li
              key={index}
              onClick={() => setActiveCategory(index)}
              className={activeCategory === index ? "active" : ""}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
