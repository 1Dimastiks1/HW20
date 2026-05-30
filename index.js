const images = document.querySelectorAll(".image");

let currentIndex = 0;


function showImage(index) {
  images[index].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
  });

  images[index].focus();
}


document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
});