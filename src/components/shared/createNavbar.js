const createNavbar = () => {
  const navContainer = document.querySelector(".nav");

  navContainer.innerHTML = `
    <button class="nav__toggle">
      <span class="hamburger"></span>
    </button>
    <ul class="nav__list">
      <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
      <li class="nav__item"><a href="#" class="nav__link">Adipisci</a></li>
      <li class="nav__item"><a href="#" class="nav__link">Natus</a></li>
      <li class="nav__item"><a href="#" class="nav__link">Beatae</a></li>
    </ul>
  `;

  const navToggle = document.querySelector(".nav__toggle");
  navToggle.onclick = () => {
    document.body.classList.toggle("nav-open");
  };
};

export default createNavbar;
