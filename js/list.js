const productliste = document.querySelector("main");
let url = `https://kea-alt-del.dk/t7/api/products?limit=100`;

function showProducts(data) {
  const markup = data
    .map(
      (product) => `
      <article class="small_product">
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
          alt="produkt"
        />
        <h3>${product.productdisplayname}</h3>
        <p class="subtle">${product.articletype} | ${product.brandname}</p>
        <p class="price">DKK ${product.price},-</p>
        ${product.discount ? <p class="discount"><span>now </span>750 Dkk,-</p>} :
        <a href="produkt.html?id=${product.id}">Read More</a>
      </article>`
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
