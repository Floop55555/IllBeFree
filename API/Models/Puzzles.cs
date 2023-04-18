namespace API.Models
{
    public class Puzzles
    {
     public int puzzleID{get;set;}
     public int puzzleWidth{get;set;}
     public int puzzleHeight{get;set;}
     public List<bool> puzzleSolution {get;set;}
     public List<int> puzzleKey {get;set;} 
    }
}