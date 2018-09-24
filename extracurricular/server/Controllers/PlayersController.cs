using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Extracurricular;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase {
        private Extracurricular_DatabaseContext db { get; set; }

        public PlayersController () {
            this.db = new Extracurricular_DatabaseContext ();
        }

        // api/players 

        // Pulls all data from the Players Table
        [HttpGet]
        public ActionResult<IEnumerable<Player>> Get () 
        {
            return this.db.Players;
        }

        // Post data to the Players Table
        [HttpPost]
        public Player Post([FromBody] Player PlayerName)
        {
        
            this.db.Players.Add(PlayerName);
            this.db.SaveChanges();
            //var rv = this.db.Players.Include(i => i.Team).FirstOrDefault(p => p.Id == PlayerName.Id);
            this.db.Entry(PlayerName).Reference(p => p.Team).Load();
            return PlayerName;
        }

        // Update Data in Players Table

        // Delete Data in Players Table
   

    }

}