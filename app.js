let heart = document.querySelector(".bi-heart-fill");
let gift = document.querySelector(".bi-gift");
let basket = document.querySelector(".bi-basket2");

let fav = document.querySelector(".fav");
let gif = document.querySelector(".gift");
let bas = document.querySelector(".basket");

// Mouseover for heart icon
heart.addEventListener("mouseover", () => {
  fav.classList.add("fav-show");
});
heart.addEventListener("mouseout", () => {
  fav.classList.remove("fav-show");
});

// Mouseover for gift icon
gift.addEventListener("mouseover", () => {
  gif.classList.add("fav-show");
});
gift.addEventListener("mouseout", () => {
  gif.classList.remove("fav-show");
});

// Mouseover for basket icon
basket.addEventListener("mouseover", () => {
  bas.classList.add("fav-show");
});
basket.addEventListener("mouseout", () => {
  bas.classList.remove("fav-show");
});