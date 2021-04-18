// current day and previous day START

const todayRaw = new Date();
const yesterdayRaw = new Date(todayRaw);

yesterdayRaw.setDate(yesterdayRaw.getDate() - 2);

const today = todayRaw.toISOString().split("T")[0];
const yesterday = yesterdayRaw.toISOString().split("T")[0];

// current day and previous day END

// API call START

const key = `53764682efca909762adb22231a167fdac651da9`;
const corsFix = `https://noroffcors.herokuapp.com/`;
const url = `${corsFix}http://www.gamespot.com/api/articles/?api_key=${key}&format=json&filter=categories:18,publish_date:${yesterday}|${today}`;

const newsCard = document.querySelectorAll(".news-card");
newsCard.innerHTML = "";

console.log(newsCard.length);

async function getArticles() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);

    for (let i = result.results.length - 2; i < result.results.length; i++) {
      console.log(result.results[i]);
    }
    for (i = 0; i < 4; i++) {
      newsCard[
        i
      ].innerHTML += `<a href="article.html?art=${result.results[i].id}"><img src="${result.results[i].image.original}" class="article-img"><h3>${result.results[i].title}</h3></a>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getArticles();

// API call END
