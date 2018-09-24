using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Extracurricular;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase {
        private Extracurricular_DatabaseContext db { get; set; }

        public TeamsController () {
            this.db = new Extracurricular_DatabaseContext ();
        }

        // api/teams
        
        // pulls all data from the Teams Table
        [HttpGet]
        public ActionResult<IEnumerable<Team>> Get () 
        {
            return this.db.Teams;
        }

        // Post data to the Teams Table
        [HttpPost]
        public Team Post([FromBody] Team TeamName)
        {
        
            this.db.Teams.Add(TeamName);
            this.db.SaveChanges();
            return TeamName;
        }

        // Update Data in Teams Table

        // Delete Data in Teams Table
   

    }

}