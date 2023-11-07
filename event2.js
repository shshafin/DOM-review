document.querySelector("#btn").addEventListener("click", function () {
  const textArea = document.getElementById("text");
  const areaValue = textArea.value;
  console.log(areaValue);

  const h2 = document.getElementById("head2");
  const p = document.createElement("p");
  p.innerText = areaValue;
  p.style.color = "black";
  h2.appendChild(p);
  document.getElementById("text").value = " ";
});


