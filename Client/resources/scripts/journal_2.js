function onLoad() {
    let date = document.getElementById("one");
    let entry = document.getElementById("two");
    let button = document.getElementById("three");
    date.innerText = "January 12";
    setTimeout(entry.classList.add("fade-in-text"), 2000);
    entry.innerText = "Flurries, with the promise of more. I remember this quilt from when I was young. The cyan patch was always my favorite. It wasn’t the warmest, but it was so pretty and it smelled like earth and static. They were made of these granny squares. I wonder if they will feel the same when I make them.";
    button.classList.add("fade-in-button");
    let next = document.createElement("button");
    next.innerText = "I'm done";
    next.id = "next"
    next.addEventListener("click", function(){
      location.href = "\ grannysquare.html"});
    button.appendChild(next);
  }