const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
const blur = document.getElementById("blur");

window.onload = function () {
  setTimeout(function () {
    popup.style.display = "block";
    blur.classList.toggle("active");
  }, 2000);
};

close.addEventListener("click", () => {
  popup.style.display = "none";
  blur.classList.toggle("active");
});