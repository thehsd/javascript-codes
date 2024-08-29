const listOfProduct = document.getElementById("product-list");
const basketList = [];
let productList = [];
const getProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  productList = data;
  printProducts(data);
};

const printProducts = (data) => {
  data.forEach((product) => {
    const card = createProductCard(product);
    listOfProduct.appendChild(card);
  });
};
const createProductCard = (product) => {
  const { id, title, price, image, rating } = product;
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${image}" alt="${title}" class="card-image" width="100px" height="143px" />
    <p>${title}</p>
    <p>price: ${price}</p>
    <p>rate: ${rating.rate}</p>
    <button onclick="addToBasket(${id})">add to basket</button>
    `;

  return card;
};

const addToBasket = (id) => {
  const alreadyHasItem = basketList.some((_item) => {
    return _item.id === id;
  });
  if (!alreadyHasItem) {
    const product = productList.find((_item) => {
      return _item.id == id;
    });
    basketList.push(product);
    updateBasketCount();
  }
};

const updateBasketCount = () => {
  const basketCount = document.getElementById("basket-count");
  basketCount.innerText = basketList.length;
};

const setToStorage = () => {
  localStorage.setItem("obj", JSON.stringify({ age: 31 }));
};

const getToStorage = () => {
  const res = localStorage.getItem("obj");
  console.log(" res : ", JSON.parse(res));
};

const removeFromStorage = () => {
  localStorage.removeItem("name");
};

const clearStorage = () => {
  localStorage.clear();
};
