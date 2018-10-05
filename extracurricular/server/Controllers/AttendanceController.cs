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
    public class AttendanceController : ControllerBase {
        private Extracurricular_DatabaseContext db { get; set; }

        public AttendanceController () {
            this.db = new Extracurricular_DatabaseContext ();
        }

        // api/attendance

        // Pulls all data from the Attendance Table
        [HttpGet]
        public ActionResult<IEnumerable<Attendance>> Get () 
        {
            return this.db.Attendance;
        }

        // Pulls all Attendance Data on a specific player
        [HttpGet("{id}")]
        public IEnumerable<Attendance> GetPlayerAttendance(int id,[FromQuery] DateTime d)
        {
            var playerAttendance = this.db.Attendance.Where(w => w.PlayerId == id)
                                                        .Where(w => w.Date >= d && w.Date <= DateTime.Now)
                                                            .OrderBy(o => o.Date);
            return playerAttendance;
        }

        // Pulls all Attendance Data on a specific player from a specific month
        // [HttpGet("monthly/{id}")]
        // public IEnumerable<Attendance> GetMonthlyAttendance(int id,[FromQuery] DateTime s,[FromQuery] DateTime e)
        // {
        //     var playerAttendance = this.db.Attendance.Where(w => w.PlayerId == id)
        //                                                 .Where(w => w.Date >= s && w.Date <= e)
        //                                                     .OrderBy(o => o.Date);
        //     return playerAttendance;
        // }


        [HttpPost]
        public ActionResult Post([FromBody] IEnumerable<Attendance> teamData)
        {
            this.db.Attendance.AddRange(teamData);
    
            this.db.SaveChanges();

            return Ok(teamData);
        }

        // // Patches all the current attendance at once
        // [HttpPut]
        // public ActionResult Put(int i, DateTime d)
        // {
        //     this.db.Attendance.Where(w => w.Date)
    
        // }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var deletedPlayer = this.db.Attendance.FirstOrDefault(w => w.Id == id);
            this.db.Attendance.Remove(deletedPlayer);
            this.db.SaveChanges();
            return Ok(new { success = true }); 
        }
    }
}
    