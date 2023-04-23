function onLoad(){
let puzzle1 = document.getElementById("puzzle1");
let puzzle2 = document.getElementById("puzzle2");
let puzzle3 = document.getElementById("puzzle3");
let puzzle4 = document.getElementById("puzzle4");
let puzzle5 = document.getElementById("puzzle5");
let puzzle6 = document.getElementById("puzzle6");
let puzzle7 = document.getElementById("puzzle7");
let puzzle8 = document.getElementById("puzzle8");
let puzzle9 = document.getElementById("puzzle9");
let puzzle10 = document.getElementById("puzzle10");
let puzzle11 = document.getElementById("puzzle11");
let puzzle12 = document.getElementById("puzzle12");
let puzzle13 = document.getElementById("puzzle13");
let puzzle14 = document.getElementById("puzzle14");
let puzzle15 = document.getElementById("puzzle15");
let puzzle16 = document.getElementById("puzzle16");
let puzzle17 = document.getElementById("puzzle17");
let puzzle18 = document.getElementById("puzzle18");
let puzzle19 = document.getElementById("puzzle19");
let puzzle20 = document.getElementById("puzzle20");
let puzzle21 = document.getElementById("puzzle21");
let puzzle22 = document.getElementById("puzzle22");
let puzzle23 = document.getElementById("puzzle23");
let puzzle24 = document.getElementById("puzzle24");
let puzzle25 = document.getElementById("puzzle25");
  if(sessionStorage.getItem("completed")>0)
  {
  let img1 = document.createElement("img");
  img1.src = "resources\assets\pictures\cyangrannysquare.png";
  puzzle1.appendChild(img1);
}
else{
  let img1 = document.createElement("img");
  img1.src = "\ resources/assets/pictures/wip.png";
  puzzle1.appendChild(img1);
};
};

function loadPuzzle(url)
{
    location.href = ""+url;
}