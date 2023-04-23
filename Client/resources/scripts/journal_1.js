function onLoad() {
    let date = document.getElementById("one");
    let entry = document.getElementById("two");
    let button = document.getElementById("three");
    date.innerText = "January 11";
    setTimeout(entry.classList.add("fade-in-text"), 2000);
    entry.innerText = "Cloudy, with a light breeze. It is days like these where I am glad for the fireplace. After putting it off for a while, I finally want to give crochet a try. I found mom’s old supplies in a closet. The handles feel well-worn and simple in my palms. Maybe I’ll make a scarf!"
    button.classList.add("fade-in-button");
    let next = document.createElement("button");
    next.innerText = "I'm done";
    next.id = "next"
    next.addEventListener("click", function(){
      location.href = "\ firstpass.html"});
    button.appendChild(next);
  }