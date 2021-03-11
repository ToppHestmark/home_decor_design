const createNavbar = () => {
  const body = document.querySelector("body");
  const navContainer = document.querySelector(".nav");

  const pathName = location.pathname;
  const homeActive = pathName === "/index.html" ? "active" : "";
  const portfolioActive = pathName === "/portfolio.html" ? "active" : "";

  navContainer.innerHTML = `
    <button class="nav__toggle">
      <span class="hamburger"></span>
    </button>
    <div class="logo-container navbar">
     <img src="./assets/logo.png" alt="logo" />
    </div>
    <ul class="nav__list">
      <li class="nav__item ${homeActive}">
        <a href="./index.html" class="nav__link">Home</a>
      </li>
      <li class="nav__item ${portfolioActive}">
        <a href="./portfolio.html" class="nav__link">Portfolio</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">About</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Contact</a>
      </li>
    </ul>
  `;

  const navToggle = document.querySelector(".nav__toggle");
  navToggle.onclick = () => {
    document.body.classList.toggle("nav--open");
    body.classList.toggle("body--preventScrolling");
  };
};

export default createNavbar;
