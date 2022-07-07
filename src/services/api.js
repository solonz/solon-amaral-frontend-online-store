export async function getCategories() {
  try {
    const ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/categories';
    const request = await fetch(ENDPOINT);
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
    const ENDPOINT1 = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const request = await fetch(ENDPOINT1);
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsFromQuery(query) {
  try {
    const ENDPOINT2 = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const request = await fetch(ENDPOINT2);
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
