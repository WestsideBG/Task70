import "../scss/app.scss";


window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const img = document.querySelector(".image");
  let scale = false
  img.addEventListener("click", () => {
    if (scale) {
      img.style.transform = "scale(1)"
      img.style.transition = "transform 0.25s ease";
      scale = false;
      return;
    }

    if (!scale) {
      img.style.transform = "scale(2)";
      img.style.transition = "transform 0.25s ease";
      scale = true;
      return;
    }
    console.log(scale);


  })
});