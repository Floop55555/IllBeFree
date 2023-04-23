function loadPuzzle(url)
{
    location.href = ""+url;
}
function onLoad(){
let puzzle1 = document.getElementById("puzzle1");
let completed = Number(sessionStorage.getItem("completed"));
console.log(completed);
  if(completed>0)
  {
  let img1 = document.createElement("img");
  img1.src = "\ resources/assets/pictures/cyangrannysquare.png";
  puzzle1.appendChild(img1);
  Puzzle2()
}
else{
  let img1 = document.createElement("img");
  img1.src = "\ resources/assets/pictures/wip.png";
  puzzle1.appendChild(img1);
};
};

function Puzzle2(){
  let puzzle = document.getElementById("puzzle2");
  let completed = Number(sessionStorage.getItem("completed"));
  console.log(completed);
    if(completed>1)
    {
    let img = document.createElement("img");
    img.src = "\ resources/assets/pictures/cyangrannysquare.png";
    puzzle.appendChild(img);
    Puzzle3()
  }
  else{
    let img = document.createElement("img");
    img.src = "\ resources/assets/pictures/wip.png";
    puzzle.appendChild(img);
  };
};
function Puzzle2(){
  let puzzle = document.getElementById("puzzle2");
  let completed = Number(sessionStorage.getItem("completed"));
  console.log(completed);
    if(completed>1)
    {
    let img = document.createElement("img");
    img.src = "\ resources/assets/pictures/hat.png";
    puzzle.appendChild(img);
    Puzzle3()
  }
  else{
    let img = document.createElement("img");
    img.src = "\ resources/assets/pictures/wip.png";
    puzzle.appendChild(img);
  };
};
function Puzzle3(){
  let puzzle = document.getElementById("puzzle3");
  let completed = Number(sessionStorage.getItem("completed"));
  console.log(completed);
    if(completed>2)
    {
    let img = document.createElement("img");
    img.src = "\ resources/assets/pictures/slipper.png";
    puzzle.appendChild(img);
    Puzzle4()
  }
  else{
    let img = document.createElement("img");
    img.src = "\ resources/assets/pictures/wip.png";
    puzzle.appendChild(img);
  };
};