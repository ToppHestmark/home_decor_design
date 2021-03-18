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
      <img class="items" src=${image} alt=${name} />
      <h4> ${name} </h4>
      <p>$ ${price} </p>
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
      <img src=${image} alt=${name} />
      <h4> ${name} </h4>
      <p>$ ${price} </p>
    </div>
  `;
});
