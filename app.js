let heart = document.querySelector(".my-heart");
let gift = document.querySelector(".bi-gift");
let basket = document.querySelector(".bi-basket2");
let cards = document.querySelectorAll(".my-images");

let fav = document.querySelector(".fav");
let gif = document.querySelector(".gift");
let bas = document.querySelector(".basket");


heart.addEventListener("mouseover", () => {
  fav.classList.add("fav-show");
});
heart.addEventListener("mouseout", () => {
  fav.classList.remove("fav-show");
});

gift.addEventListener("mouseover", () => {
  gif.classList.add("fav-show");
});
gift.addEventListener("mouseout", () => {
  gif.classList.remove("fav-show");
});

basket.addEventListener("mouseover", () => {
  bas.classList.add("fav-show");
});
basket.addEventListener("mouseout", () => {
  bas.classList.remove("fav-show");
});

cards.forEach((card) => {
  let heartIcon = card.querySelector(".our-heart");

  card.addEventListener("mouseover", () => {
    heartIcon.classList.add("show-my-heart");
  });

  card.addEventListener("mouseout", () => {
    heartIcon.classList.remove("show-my-heart");
  });

  heartIcon.addEventListener("click", () => {
    heartIcon.classList.toggle("red");
  });
});