const urlParams = new URLSearchParams(window.location.search);

const myId = urlParams.get("id");

const productUrl = `https://kea-alt-del.dk/t7/api/products/${myId}`;
const article = document.querySelector("main");

function getData() {
  fetch(productUrl).then((response) =>
    response.json().then((data) => show(data))
  );
}

function show(data) {
  console.log(data);
  article.innerHTML = `
    <img
        src="${`https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp`}">
        <section class="purchase_box">
        <h3>${data.productdisplayname}</h3>
        <p class="subtle">${data.brandname} | ${data.articletype}</p>
        <form>
          <label
            >Choose a size
            <select name="size">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </label>
          <button>Add to basket</button>
        </form>
      </section>
      <section class="info">
        <h2>Product Information</h2>
        <dl>
          <dt>Product name</dt>
          <dd>${data.productdisplayname}</dd>
          <dt>Type</dt>
          <dd>${data.usagetype}</dd>
          <dt>Inventory number</dt>
          <dd>${data.id}</dd>
        </dl>
      </section>
  `;
}

getData();
