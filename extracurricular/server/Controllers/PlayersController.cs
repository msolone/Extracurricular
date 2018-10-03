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
        [HttpGet("{id}")]
        public IEnumerable<Player> Get (int id) 
        {
            var players = this.db.Players.Where(w => w.TeamId == id)
                .OrderBy(o => o.LastName);
            return players;
        }

        // Get Data on One Player based on ID
        [HttpGet("player/{id}")]
        public IEnumerable<Player> GetPlayer (int id) 
        {
            var player = this.db.Players.Where(w => w.Id == id);
            return player;
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
        [HttpPatch("{id}")]
        public Player Patch([FromBody] Player _player, int id)
        {
            // Find the Player in the Database with matching id
            var player = this.db.Players.FirstOrDefault(a => a.Id == id);
            // Change First Name
            player.FirstName = _player.FirstName;
            // Change Last Name
            player.LastName = _player.LastName;
            // Saves Changes to DB
            this.db.SaveChanges();
            // Returns the New Question
            return player;

        } // END HttpPatch



        // Delete Data in Players Table
   

    }

}