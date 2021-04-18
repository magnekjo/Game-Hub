const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("art");

const key = `53764682efca909762adb22231a167fdac651da9`;
const corsFix = `https://noroffcors.herokuapp.com/`;
const url = `${corsFix}http://www.gamespot.com/api/articles/?api_key=${key}&format=json&filter=id:${id}`;

const articleTitle = document.getElementById("article-h1");
const articleSubitle = document.getElementById("article-h2");
const author = document.getElementById("author");
const articleImage = document.querySelector(".article-image");
const articleBody = document.querySelector(".article-body");
const metaTitle = document.getElementById("meta-title");

async function getArticle() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);

    articleTitle.innerHTML = `${result.results[0].title}`;
    articleSubitle.innerHTML = `${result.results[0].deck}`;
    author.innerHTML = `By ${result.results[0].authors}, last updated on: ${result.results[0].update_date}`;
    articleImage.innerHTML = `<img class="article-image" src="${result.results[0].image.original}" />`;
    articleBody.innerHTML = `${result.results[0].body}`;
    metaTitle.innerHTML = `${result.results[0].title}`;
  } catch (error) {
    console.log(error);
  }
}

getArticle();
