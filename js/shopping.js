const productsURL = "https://magnessite.com/wp-json/wc/store/products/";
const wpURL =
  "https://magnessite.com/wp-json/wc/store/products/?featured=false&id=";
const wpFeaturedURL =
  "https://magnessite.com/wp-json/wc/store/products/?featured=true&id=";

const featuredImage = document.querySelectorAll(".featured-image");
const featuredName = document.querySelectorAll(".featured-name");
const featuredPlatform = document.querySelectorAll(".featured-platform");
const featuredPrice = document.querySelectorAll(".featured-price");

const productImage = document.querySelectorAll(".new-image");
const productName = document.querySelectorAll(".new-name");
const productPlatform = document.querySelectorAll(".new-platform");
const productPrice = document.querySelectorAll(".new-price");
const productLink = document.querySelectorAll(".product-card a");

async function getProducts() {
  try {
    const response = await fetch(wpURL);
    const result = await response.json();

    const responseTwo = await fetch(productsURL);
    const resultTwo = await responseTwo.json();

    console.log(result);

    for (let i = 0; i < featuredName.length; i++) {
      productName[i].innerHTML = `${result[i].name}`;
      productPrice[i].innerHTML = `${result[i].prices.currency_symbol}${result[
        i
      ].prices.price.slice(0, -2)}.${result[i].prices.price.substring(2, 4)}`;
      productImage[i].src = `${result[i].images[0].src}`;
    }
    for (let i = 0; i < productLink.length; i++) {
      productLink[i].href = `product.html?id=${resultTwo[i].id}`;
    }
  } catch (error) {
    console.log(error);
  }
}

getProducts();

async function getFeaturedProducts() {
  try {
    const response = await fetch(wpFeaturedURL);
    const result = await response.json();

    for (let i = 0; i < featuredName.length; i++) {
      featuredName[i].innerHTML = `${result[i].name}`;
      featuredPrice[i].innerHTML = `${result[i].prices.currency_symbol}${result[
        i
      ].prices.price.slice(0, -2)}.${result[i].prices.price.substring(2, 4)}`;
      featuredImage[i].src = `${result[i].images[0].src}`;
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getFeaturedProducts();
