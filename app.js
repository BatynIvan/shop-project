// add to card

let productsCountEl = document.getElementById("products_count");
let addToCardBtns = document.querySelectorAll(".btn_add_to_cart");

// for (let i = 0; i < addToCardBtns.length; i++) {
//   addToCardBtns[i].addEventListener("click", function () {
//     productsCountEl.textContent = +productsCountEl.textContent + 1;
//   });
// }

addToCardBtns.forEach((item) => {
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
});

// change like state
let likeBtns = document.querySelectorAll(".like");

likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  });
});

// more details

let moreDetailsBtns = document.querySelectorAll(".btn_more_details");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn_closed");

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// slick

$(".slider").slick({
  dots: true,
});
