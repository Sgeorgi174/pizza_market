export async function getPizzasList({ categoryId = 0, sortType = "price" }) {
  const apiURL = "https://65b4205a770d43aba47af23a.mockapi.io/pizzas";
  const order = sortType.includes("-") ? "asc" : "desc";
  const sortBy = sortType.replace("-", "");
  const category = categoryId > 0 ? `&category=${categoryId}` : "";

  const response = await fetch(
    apiURL + `?sortBy=${sortBy}&order=${order}` + category
  );
  const data = response.json();
  return data;
}
