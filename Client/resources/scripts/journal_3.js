function onLoad() {
    // let count = Number(sessionStorage.getItem("completed"))
    // if(count<1)
    // {
      sessionStorage.setItem("completed", "1")
    // };
    // sessionStorage.setItem("completed", count);
    let date = document.getElementById("one");
    let entry = document.getElementById("two");
    let button = document.getElementById("three");
    date.innerText = "January 13";
    setTimeout(entry.classList.add("fade-in-text"), 2000);
    entry.innerText = "Clear, with a slosh of snow from yesterday. Mom found the crochet hooks under my bed. She got really excited and started talking about how much she loved it and kept talking about patterns and wanting to do this together.";
    entry.appendChild(document.createElement("br"));
    entry.appendChild(document.createElement("br"));
    entry.innerText += "I’m not sure if crochet is for me.";
    button.classList.add("fade-in-button");
    let next = document.createElement("button");
    next.innerText = "I'm done";
    next.id = "next"
    next.addEventListener("click", function(){
      location.href = "\menu.html"});
    button.appendChild(next);
  }