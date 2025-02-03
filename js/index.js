const categoryliste = document.querySelector("main");
let url = `https://kea-alt-del.dk/t7/api/categories`;

function showCategories(data) {
  console.log(data);
  const markup = data
    .map(
      (element) => `
  <a href="produktliste.html?category=${element.category}">${element.category}</a>`
    )
    .join("");

  categoryliste.innerHTML = markup;
}

function getData() {
  fetch(url).then((response) => response.json().then((data) => showCategories(data)));
}

getData();
