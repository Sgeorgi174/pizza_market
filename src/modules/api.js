const apiURL = "https://65b4205a770d43aba47af23a.mockapi.io/pizzas";

export async function getPizzasList() {
  const response = await fetch(apiURL);
  const data = response.json();
  return data;
}
