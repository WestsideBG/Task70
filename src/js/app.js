import "../scss/app.scss";


window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const img = document.getElementById("img1");
  img.addEventListener("click", () => {
    img.style.transform = "scale(2)";
    img.style.transition = "transform 0.25s ease";
  })
  // Set image size to original
  const reset = document.querySelector(".reset")
  reset.addEventListener("click", () => {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease"
  })
});