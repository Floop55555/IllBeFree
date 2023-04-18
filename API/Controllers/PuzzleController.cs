using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PuzzleController : ControllerBase
    {
        // GET: api/Puzzle
        [HttpGet]
        public IEnumerable<string> Get()
        {
            Response.Headers.Append("Access-Control-Allow-Origin", "*");
            return new string[] { "value1", "value2" };
        }

        // GET: api/Puzzle/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            Response.Headers.Append("Access-Control-Allow-Origin", "*");
            System.Console.WriteLine("made it");
            return "value";
        }

        // POST: api/Puzzle
        [HttpPost]
        public void Post([FromBody] string value)
        {
            Response.Headers.Append("Access-Control-Allow-Origin", "*");

        }

        // PUT: api/Puzzle/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            Response.Headers.Append("Access-Control-Allow-Origin", "*");

        }

        // DELETE: api/Puzzle/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Response.Headers.Append("Access-Control-Allow-Origin", "*");

        }
    }
}
