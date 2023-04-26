let puzzleInputList = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const puzzleSolutionList = [0,1,0,0,0,0,0,0,0,0,
                            1,1,1,0,0,0,0,0,0,0,
                            0,1,1,1,1,1,0,0,0,0,
                            0,0,0,0,1,1,1,1,0,0,
                            0,0,0,1,1,1,1,1,0,0,
                            0,0,0,1,1,1,1,1,1,0,
                            0,0,1,1,1,1,1,1,1,1,
                            0,0,1,1,1,1,1,1,1,1,
                            0,0,1,0,0,0,0,0,0,1,
                            0,0,0,1,1,1,1,1,1,0]
const puzzleKeyList = [1,-1,3,-1,2,3,-1,1,4,1,-1,6,1,-1,6,1,-1,5,1,-1,5,1,-1,3,1,-1,3,-1,1,-1,3,-1,5,-1,4,-1,5,-1,6,-1,8,-1,8,-1,1,1,-1,6,-1]
let puzzle1= new Puzzle(3,10,10,puzzleSolutionList,puzzleKeyList);
function onLoad(){
setUpPuzzle();
// startTimer();
};
function setUpPuzzle()
{
    console.log(puzzle1.puzzleSize)
    //instantiate variables
    let puzzle= document.getElementById("page");
    puzzle.classList.add("fullscreen")
    let table = document.createElement("table");
    table.classList.add("center");
    table.classList.add("fade-in-text");
    let list=0;
    let i=0
    let div = document.createElement("td");
    //cell0.classList.add("square")
    //div.style.width="25px";
    let tr= document.createElement("tr");
    let stop=0;
    let count = 0;
    //blank cell
    let td = document.createElement("td");
    //td.style.width="25px";
    tr.appendChild(td);
    //add top puzzle key
    puzzle1.puzzleKey.forEach(key => {

            if (stop<puzzle1.puzzleWidth)
            {
                if(key==-1)
                {
                    tr.appendChild(div);
                    div = document.createElement("td");
                    //div.style.width="25px";
                    count++;
                    stop++;
                }
                else
                {
                    let text= `${key}`;
                    text += '\n';
                let br = document.createElement("br");
                div.appendChild(document.createTextNode(text));
                div.appendChild(br);
                //tr0.appendChild(cell0);
                count++
            };
        };

    });
    //let tr = document.createElement("tr");
    table.appendChild(tr);
    //add puzzle key and puzzle
    while(i<puzzle1.puzzleHeight)
    {
        
        while(puzzle1.puzzleKey[count]>-1)
            {
                //let cell = document.createElement("td");
                let text= `${puzzle1.puzzleKey[count]}`;
                text += '\n';
                //let br = document.createElement("br");
                div.appendChild(document.createTextNode(text));
                count++;
            }
            table.appendChild(div);
            div = document.createElement("td");
            count++
        let j=0;
        while(j<puzzle1.puzzleWidth)
        {
            let cell = document.createElement("td");
            cell.classList.add("square")
            // let box=document.createElement("input");
            // box.type= "checkbox";
            //let box=document.createElement("button");
            cell.id = list;
            // cell.style.height="25px";
            // cell.style.width="25px";
            function onClick(){clickButton(cell)};
            cell.addEventListener("click", onClick);
            //box.classList.add("btn"); 
            //cell.appendChild(box);
            table.appendChild(cell);
            list++;
            j++;
        };
        let tr = document.createElement("tr");
        table.appendChild(tr);
        i++;
    };
    puzzle.appendChild(table);
};
//function for a clicked box in the puzzle
function clickButton(cell){
    console.log(cell);
    let temp = cell.id;
    console.log(temp)
    console.log(puzzleInputList[temp])
    if(puzzleInputList[temp]==1)
    {
        puzzleInputList[temp]=0;
        cell.classList.remove("clicksquare");
        cell.classList.add("square");
    }
    else
    {
        puzzleInputList[temp]=1;
        cell.className = "clicksquare"
        //cell.classList.add("clicksquare")
    };
    checkPuzzle()
};
function checkPuzzle(){
    let done = true;
    //console.log(puzzleInputList.length);
    let i = 0;
    while(i<puzzleSolutionList.length)
    {
        //console.log("in loop")
        if(puzzleSolutionList[i] != puzzleInputList[i])
        {
            //console.log("Hit")
            done = false;
        }
        i++;
    }
    //console.log(done);
    if (done== true)
    {
        finishedPuzzle()
    }
    else
    {
        document.getElementById("continue").innerHTML = "";
    }
};
function finishedPuzzle()
{
    //console.log(puzzleInputList)
    let puzzle= document.getElementById("continue");
    let message = document.createElement("button");
    message.textContent= "Continue";
    message.addEventListener("click", function(){
    location.href = "\journal_4.html"});
    puzzle.appendChild(message);
    let i=0;
}
// function startTimer(){

// };