function onLoad() {
  fadeTextOne();
  setTimeout(fadeOutTextOne, 15000);
  setTimeout(fadeTextTwo, 21000);
  setTimeout(fadeOutTextTwo, 31000);
  setTimeout(fadeTextThree, 37000);
  setTimeout(fadeOutTextThree, 47000);
  setTimeout(fadeTextTitle, 52000);
}
//fade in and out first text block
function fadeTextOne() {
  let text = document.getElementById("one");
  text.classList.add("fade-in-text");
  text.innerText =
    "Once upon a time, there was a child. This child had a loving home, set along a winding path, where light filtered through the leaves in the summer and snow fell in thick flurries in the winter. There was a small mulberry bush that grew right alongside the house and produced the juiciest berries in the late spring. And in fall the leaves along the path turned a fiery blaze of goldenrod and vermillion. Meals were served in enameled dishes with rich stews cupped in bowls deeply colored as the sea and speckled with flecks like stars in the night sky and bread served on plates glazed in the colors of the sun.";
}
function fadeOutTextOne() {
  let text = document.getElementById("one");
  text.classList.remove("fade-in-text");
  text.classList.add("fade-out-text");
  setTimeout(clearText, 4999);
}
function clearText() {
  let text = document.getElementById("one");
  text.classList.remove("fade-out-text");
  text.innerText = "";
}
//fade in and out second text block
function fadeTextTwo() {
  let text = document.getElementById("one");
  text.classList.add("fade-in-text");
  console.log("pt. 2");
  text.innerText = "Can you picture such a child living in such a place?";
  text.appendChild(document.createElement("br"));
  text.innerText += "Can you picture the joy?";
}
function fadeOutTextTwo() {
  let text = document.getElementById("one");
  text.classList.remove("fade-in-text");
  text.classList.add("fade-out-text");
  setTimeout(clearText, 4999);
}
//fade in and out third text block
function fadeTextThree() {
  let text = document.getElementById("one");
  text.classList.add("fade-in-text");
  console.log("pt. 3");
  text.innerText = "Do you know this child?";
  text.appendChild(document.createElement("br"));
  let textBox = document.createElement("input");
  textBox.setAttribute("type", "text");
  textBox.width = textBox.placeholder = "Tell us their name if you know it";
  textBox.id = "NameBox";
  text.appendChild(textBox);
}
function fadeOutTextThree() {
  let text = document.getElementById("one");
  text.classList.remove("fade-in-text");
  text.classList.add("fade-out-text");
  setTimeout(getName, 4980);
}
function getName() {
  let temp = document.getElementById("NameBox");
  console.log(temp.value);
  sessionStorage.setItem("name", temp.value);
  clearText();
}
//fade in and out title screen
function fadeTextTitle() {
  let text = document.getElementById("one");
  text.classList.add("fade-in-text");
  console.log("pt. 4");
  text.innerText = "For One Day, I'll Be Free";
  text.appendChild(document.createElement("br"));
  text.innerText += "By: Max S.";
  text.appendChild(document.createElement("br"));
  let button = document.createElement("button");
  button.textContent = "Start";
  button.addEventListener("click", function (event) {
    location.href = "menu.html";
  });
  text.appendChild(button);
  // textBox.id = "NameBox";
}
// function fadeOutTextThree()
// {
//     let text= document.getElementById("one")
//     text.classList.remove("fade-in-text");
//     text.classList.add("fade-out-text");
//     setTimeout(getName, 4999);
// }
