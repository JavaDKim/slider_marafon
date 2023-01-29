const slides = document.querySelectorAll(".slide");
for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
const slide1 = document.querySelector(".header");
slide1.addEventListener("mouseover", () => {
  console.log("mouse");
});
