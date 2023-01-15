const baseURL = "https://dummyjson.com";

// -------- api call to authenticate user -------------- //
export async function authenticateUser(username, password) {
  const res = await fetch(`${baseURL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  return await res.json();
}
// -------- api call to fetch all products ------------- //
export async function getAllProducts(limit, skip) {
  const res = await fetch(`${baseURL}/products?limit=${limit}&skip=${skip}`);
  return await res.json();
}

// --------- api call to fetch all categories --------- //
export async function getAllCategories() {
  const res = await fetch(`${baseURL}/products/categories`);
  return await res.json();
}

// --------- api call to fetch all products of a category --------- //
export async function getAllProductsOfCategory(category) {
  const res = await fetch(`${baseURL}/products/category/${category}`);
  return await res.json();
}

// --------- api call to search products --------- //
export async function searchProducts(query) {
  const res = await fetch(`${baseURL}/products/search?q=${query}`);
  return await res.json();
}

// --------- api call to search products --------- //
export async function getSingleProduct(prodId) {
  const res = await fetch(`${baseURL}/products/${prodId}`);
  return await res.json();
}

// -------------- api call to add new product -------------- //
export async function addNewProduct(title, brand, price) {
  const res = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      brand: brand,
      price: price,
    }),
  });
  return await res.json();
}
