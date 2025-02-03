const productliste = document.querySelector("#productlist");
let url = `https://kea-alt-del.dk/t7/api/products?limit=100`;

function showProducts(data) {
  const markup = data
    .map(
      (product) => `
      <a href="produkt.html?id=${product.id}">
  <article class="product_card">
    <img src="${`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`}">
    <div>
      <h3>${product.productdisplayname}</h3>
      <p class="subtle">${product.articletype} | ${product.brandname}</p>
      <p>kr. <span>${product.price}</span>,-</p>
      ${product.discount ? `<p>rabat <span>${product.discount}</span>%</p>` : ""}
    </div>
  </article>
</a>`
    )
    .join("");

  productliste.innerHTML = markup;
}

function hentData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showProducts(data));
}

hentData();
