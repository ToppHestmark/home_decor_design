const footerContainer = document.querySelector(".footer");
const createFooter = () => {
  footerContainer.innerHTML = `
  <div class="footer__logo-container">
    <img src="./assets/logo.png" alt="Home Decor" />
  </div>
  <p>For more information, email: jane@homedecor.com</p>
  <div class="footer__link-container">
    <a href="#">INSTAGRAM</a>
    <a href="#">PINTEREST</a>
    <a href="#">FACEBOOK</a>
    <a href="#">TWITTER</a>
  </div>
  `;
};

export default createFooter;
