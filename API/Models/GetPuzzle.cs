namespace API.Models;
using API.Models.Interfaces;
using System.IO;
public class GetPuzzle : IGetPuzzle
{
    public Puzzles EstPuzzle(int puzzleID)
    {
        Puzzles current = new Puzzles();
        current = LoadPuzzle(puzzleID);
        return current;
    }
    private Puzzles LoadPuzzle(int puzzleID)
    {
        Puzzles temp = new Puzzles();
        StreamReader open = new StreamReader($"puzzle{puzzleID}.txt");
        string line = open.ReadLine();
        temp.puzzleID= int.Parse(line);
        line= open.ReadLine();
        temp.puzzleWidth= int.Parse(line);
        line = open.ReadLine();
        temp.puzzleHeight = int.Parse(line);
        line=open.ReadLine();
        List<bool> solution = new List<bool>();
        int length = line.Length;
        while (line != null)
        {
            for (int i = 0; i < length; i++)
            {
                if(line[i]==1)
                {
                    solution.Add(true);
                }
                if(line[i]==0)
                {
                    solution.Add(false);
                }
            }
        }
        temp.puzzleSolution=solution;
        line=open.ReadLine();
        while (line != null)
        {
            temp.puzzleKey.Add(int.Parse(line));
            line=open.ReadLine();
        }
        return temp;
    }
}