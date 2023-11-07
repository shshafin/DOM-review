let count = 0;
// function btn() {
//   const element = document.getElementById("heading-2");
//   element.innerText = ++count;
// }

// function btn2() {
//   const element = document.getElementById("heading-2");
//   element.innerText = --count;
// }
const btn = document.getElementById("plus-btn");
btn.addEventListener("click", function () {
  const element = document.getElementById("heading-2");
  element.innerText = ++count;
});

const btn2 = document.getElementById("minus-btn");
btn2.addEventListener("click", function () {
  const element = document.getElementById("heading-2");
  element.innerText = --count;
});
