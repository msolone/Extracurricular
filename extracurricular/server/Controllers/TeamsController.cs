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
    public class TeamsController : ControllerBase {
        private Extracurricular_DatabaseContext db { get; set; }

        public TeamsController () {
            this.db = new Extracurricular_DatabaseContext ();
        }

        // api/teams

        // pulls all data from the Teams Table
        [HttpGet]
        public ActionResult<IEnumerable<Team>> Get () {
            return this.db.Teams;
        }

        [HttpGet ("history/{TeamId}")]
        public ActionResult GetTeamHistory (int TeamId, [FromQuery] DateTime d) {
            var history = this.db.Players
                // Inner Join: SELECT * FROM Players JOIN ON Attendance
                .Include (i => i.Attendance)  
                 // WHERE (TeamId = id)
                .Where (w => w.TeamId == TeamId)
                // Create new object array that includes player info and attendance info
                .Select (s => new { 
                    s.Id,
                        s.FirstName,
                        s.LastName,
                        s.TeamId,
                        Attendance = s.Attendance
                        .Where (w => w.Date >= d && w.Date <= DateTime.Now)
                }); 
            // .SelectMany (s => s.Attendance);
            return Ok (history);
        }
        // Get all attendance based on month
        [HttpGet ("monthly/{TeamId}")]
        public ActionResult GetTeamHistory (int TeamId, [FromQuery] DateTime b, [FromQuery] DateTime e) {
            var history = this.db.Players
                // Inner Join: SELECT * FROM Players JOIN ON Attendance
                .Include (i => i.Attendance)
                 // WHERE (TeamId = id)
                .Where (w => w.TeamId == TeamId)
                // Create new object array that includes player info and attendance info
                .Select (s => new {
                    s.Id,
                        s.FirstName,
                        s.LastName,
                        s.TeamId,
                        Attendance = s.Attendance
                        .Where (w => w.Date >= b && w.Date <= e)
                });
            return Ok (history);
        }

        // Post data to the Teams Table
        [HttpPost]
        public Team Post ([FromBody] Team TeamName) {

            this.db.Teams.Add (TeamName);
            this.db.SaveChanges ();
            return TeamName;
        }

        // Update Data in Teams Table
        [HttpPatch ("{id}")]
        public Team Patch ([FromBody] Team _Team, int id) {
            // Find the Player in the Database with matching id
            var team = this.db.Teams.FirstOrDefault (a => a.Id == id);
            // Change Team Name
            team.Name = _Team.Name;
            // Saves Changes to DB
            this.db.SaveChanges ();
            // Returns the New Question
            return team;

        } 

        // Delete Data in Teams Table
        [HttpDelete ("{id}")]
        public ActionResult<Team> Delete (int id) {
            // Get player based on ID
            var teamToDelete = this.db.Teams.FirstOrDefault (f => f.Id == id);
            this.db.Remove (teamToDelete);
            this.db.SaveChanges ();

            return Ok (new { message = "Team Deleted" });
        }

    }

}