export async function getAllProducts() {
  const response = await fetch('https://dummyjson.com/products');
  const responseJson = await response.json();
  console.log(responseJson, 'API RESPONSE');
  return responseJson;
}
