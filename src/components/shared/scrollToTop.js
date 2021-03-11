const scrollToTop = () => {
  const scrollToTopButton = document.querySelector(".scrollToTopButton");
  window.onscroll = () => {
    const scrollingPosition = Math.ceil(window.scrollY);

    if (scrollingPosition > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };

  scrollToTopButton.onclick = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
};

export default scrollToTop;
