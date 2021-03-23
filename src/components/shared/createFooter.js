const footerContainer = document.querySelector(".footer");
const createFooter = () => {
  footerContainer.innerHTML = `
  <div class="footer__logo-container">
    <img src="./assets/logo.png" alt="Home Decor" />
  </div>
  <p>For more information, mail to: 
    <a
      type="email"
      href="mailto:johndoe@homedecor.com">
      Jon Doe
    </a>
  </p>
  <div class="footer__link-container">
    <a href="#">
      <i class="fab fa-instagram-square"></i>
    </a>
    <a href="#">
      <i class="fab fa-pinterest"></i>
    </a>
    <a href="#">
      <i class="fab fa-facebook"></i>
    </a>
    <a href="#">
      <i class="fab fa-twitter"></i>
    </a>
  </div>
  `;
};

export default createFooter;
