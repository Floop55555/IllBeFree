function onLoad() {
    // let count = Number(sessionStorage.getItem("completed"))
    // if(count<1)
    // {
      sessionStorage.setItem("completed", "2")
    // };
    // sessionStorage.setItem("completed", count);
    let date = document.getElementById("one");
    let entry = document.getElementById("two");
    let button = document.getElementById("three");
    date.innerText = "February 10";
    setTimeout(entry.classList.add("fade-in-text"), 2000);
    entry.innerText = "Crisp. The kind of breeze that slices through no matter how many layers you have on. The grey of the sky contrasts the red in my brother's nose when he came inside. It definately reminds me of the day we came here. What I wouldn't give to be able to step outside and let the wind cut me up";
    entry.appendChild(document.createElement("br"));
    entry.appendChild(document.createElement("br"));
    entry.innerText += "Sometimes I wonder what I did to deserve such a sickness. I know dad says that I didn't DO anything, but inside all day, unable to help, I can't help feel guilty. I'm just a burden on all the people who are here to help me. I know someone is watching, and I feel like they are waiting for me to do something. Do something for others? Or do something for myself? I don't know, I'm probably over thinking. But someday I'll go outside again. I know it.";
    entry.appendChild(document.createElement("br"));
    entry.appendChild(document.createElement("br"));
    entry.innerText += "Until then, I'll keep my new hat nearby.";
    button.classList.add("fade-in-button");
    let next = document.createElement("button");
    next.innerText = "I'm done";
    next.id = "next"
    next.addEventListener("click", function(){
      location.href = "\menu.html"});
    button.appendChild(next);
  }