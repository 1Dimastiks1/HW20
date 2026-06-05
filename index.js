const carouselContainer = document.querySelector(".carousel-container");

function handleKeyboardScroll(event) {
  const scrollDistance = carouselContainer.clientWidth;

  if (event.key === "ArrowRight") {
    carouselContainer.scrollBy({
      left: scrollDistance,
      behavior: "smooth"
    });
  }

  if (event.key === "ArrowLeft") {
    carouselContainer.scrollBy({
      left: -scrollDistance,
      behavior: "smooth"
    });
  }
}

document.addEventListener("keydown", handleKeyboardScroll);