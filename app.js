const form = document.querySelector("form"),
  allInputEl = form.querySelectorAll(".form article input"),
  nextBtn = document.querySelector(".next"),
  backBtn = document.querySelector(".back");

// window.addEventListener('load', () => {
//     allInputEl[0].focus();
// })
nextBtn.addEventListener("click", () => {
  allInputEl[0].focus();
  form.classList.add("active");
});
backBtn.addEventListener("click", () => {
  form.classList.remove("active");
});
