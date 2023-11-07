// default vabe false thake ar false thakle child - grandparent show kore (this is capturing)
// ar true kore dile grandparent - child  show korbe  (this is bubbling)

document.getElementById("GrandParent").addEventListener(
  "click",
  function (e) {
    console.log("GrandParent");
    // e.stopPropagation();
  },
  true
);
document.getElementById("parent").addEventListener(
  "click",
  function (e) {
    console.log("parent");
    // e.stopPropagation();
  },
  true
);
document.getElementById("child").addEventListener(
  "click",
  function (e) {
    console.log("child");
  },
  true
);
