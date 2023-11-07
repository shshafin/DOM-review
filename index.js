// // checking all properties of document using object  ____ console.dir
// console.dir(document);

// // innerText ---> catch Css change

// // textContent ---> don't catch Css change but catch html changes

// // parent to children
// const parent = document.querySelector(".mine");
// const children = parent.children;
// console.log(children);

// // grandParent to children
// const grandParentToChildren = document.querySelectorAll(".item");
// console.log(grandParentToChildren);

// // children to parent
// const children = document.querySelector(".item");
// const parent = children.parentElement.parentElement;
// console.log(parent);

// // children to grandParent  closest == get the main parent
// const children = document.querySelector(".item");
// const grandParent = children.closest(".mine");
// console.log(grandParent);

// // siblings h1-->ul
// const parent1 = document.querySelector("#parent-h1");
// const parent2 = parent1.nextElementSibling;
// console.log(parent2);

// // siblings ul-->h1
// const parent2 = document.getElementById("parent-ul");
// const parent1 = parent2.previousElementSibling;
// console.log(parent1);

// const div = document.createElement("div");
// div.innerHTML =
//   "<h1>Items</h1><ul><li>purple</li><li>blue</li><li>red</li></ul>";
// const main = document.querySelector(".mine");
// main.appendChild(div);

// const h1 = document.getElementById("parent-h1");

// main.insertBefore(div, h1); //insertBefore == append child on first

// // create class name
// div.className = "hello";
// div.classList.add("hello");

// // set attribute
// div.setAttribute("id", "new-id");
// div.setAttribute("title", "my-title");

// // remove attribute
// div.removeAttribute("id");

// // remove
// document.getElementById("remove").remove();
// const ul = document.getElementById("remove");
// const li = document.getElementById("li-2");
// ul.removeChild(li);
