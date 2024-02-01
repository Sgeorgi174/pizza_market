import axios from "axios";

export async function getPizzasList({ categoryId = 0, sort = "price" }) {
  const apiURL = "https://65b4205a770d43aba47af23a.mockapi.io/pizzas";
  const order = sort.includes("-") ? "asc" : "desc";
  const sortBy = sort.replace("-", "");
  const category = categoryId > 0 ? `&category=${categoryId}` : "";

  const response = axios.get(
    apiURL + `?sortBy=${sortBy}&order=${order}` + category
  );

  return (await response).data;
}
