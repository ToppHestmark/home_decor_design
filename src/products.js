import { products, paints } from "../seeds/products.js";

const productsContainer = document.querySelector(".products__container");
const paintContainer = document.querySelector(".products__container.paint");

products.map((product) => {
  const id = product.id;
  const name = product.name;
  const image = product.image;
  const price = product.price;

  productsContainer.innerHTML += `
  <div class="products__container__image-wrapper">
    <img class="favourite" src="../assets/icons/love.png" alt="Favourite" />
    <img class="items" src=${image} alt=${name} />
    <div class="tag">
      <div>
        <h4> ${name} </h4>
      </div>
      <div class="tag__price">
        <img src="../assets/icons/price.png" alt="Price tag" /> 
        <small>
        ${price}
        </small>
      </div>
      </div>
      <button class="button-buy">Buy</button>
    </div>
  `;
});

paints.map((product) => {
  const id = product.id;
  const name = product.name;
  const image = product.image;
  const price = product.price;

  paintContainer.innerHTML += `
    <div class="products__container__image-wrapper">
    <img class="favourite" src="../assets/icons/love.png" alt="Favourite" />
      <img src=${image} alt=${name} />
      <div class="tag">
      <div>
        <h4> ${name} </h4>
      </div>
      <div class="tag__price">
        <img src="../assets/icons/price.png" alt="Price tag" /> 
        <small>
        ${price}
        </small>
      </div>
      </div>
      <button class="button-buy">Buy</button>
    </div>
  `;
});
