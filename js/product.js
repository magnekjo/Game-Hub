const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const productURL = "https://magnessite.com/wp-json/wc/store/products/" + id;

const image = document.querySelector(".i-img");
const Iname = document.querySelector(".i-name");
const price = document.querySelector(".i-price");
const info = document.querySelector(".i-info");
const metaTitle = document.getElementById("pMetaTitle");

async function getProduct() {
  try {
    const response = await fetch(productURL);
    const result = await response.json();

    image.src = `${result.images[0].src}`;
    Iname.innerHTML = `${result.name}`;
    price.innerHTML = `${
      result.prices.currency_symbol
    }${result.prices.price.slice(0, -2)}.${result.prices.price.substring(
      2,
      4
    )}`;
    info.innerHTML = `${result.description}`;
    metaTitle.innerHTML = `${result.name}`;

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getProduct();
