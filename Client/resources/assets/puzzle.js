 class Puzzle {
    constructor(puzzleID, puzzleWidth, puzzleHeight, puzzleSolution, puzzleKey, puzzleSize)
    {
        this.puzzleID=puzzleID;
        this.puzzleWidth=puzzleWidth;
        this.puzzleHeight=puzzleHeight;
        this.puzzleSolution=puzzleSolution;
        this.puzzleKey=puzzleKey;
        this.puzzleSize=(puzzleWidth*puzzleHeight-1);
    }
    
 }