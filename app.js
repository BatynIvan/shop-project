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

// Counter

let incrementBtn = document.querySelectorAll(".increment-button");
let decrementBtn = document.querySelectorAll(".decrement-button");
let inputFields = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleButtonState = function () {
    let count = +this.domRefs.inputField.value;

    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };
  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );

  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}

// let counter = new Counter(
//   document.querySelectorAll(".increment-button")[0],
//   document.querySelectorAll(".decrement-button")[0],
//   document.querySelectorAll(".product-quantity input")[0]
// );

let counters = [];

inputFields.forEach(
  (item, i) =>
    (counters[i] = new Counter(incrementBtn[i], decrementBtn[i], item))
);
