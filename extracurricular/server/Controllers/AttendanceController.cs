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
        public ActionResult<IEnumerable<Attendance>> Get () {
            return this.db.Attendance;
        }

        // Pulls all Attendance Data on a specific player
        [HttpGet ("{id}")]
        public IEnumerable<Attendance> GetPlayerAttendance (int id, [FromQuery] DateTime d) {
            var playerAttendance = this.db.Attendance.Where (w => w.PlayerId == id)
                .Where (w => w.Date >= d && w.Date <= DateTime.Now)
                .OrderBy (o => o.Date);
            return playerAttendance;
        }


        [HttpPost]
        public ActionResult Post ([FromBody] IEnumerable<Attendance> teamData) {
            this.db.Attendance.AddRange (teamData);
            // foreach (var att in teamData)
            // {   
            //     var a = this.db.Attendance.FirstOrDefault( f=> f.PlayerId == att.PlayerId)
            //     //check if att exists for that player + team + date
            //     // If exists, update
            //     // else add
            // }

            this.db.SaveChanges ();

            return Ok (teamData);
        }

        // Patches already posted attendance
        [HttpPut]
        public ActionResult Put ([FromBody] IEnumerable<Attendance> teamData, DateTime? d) {
            foreach (var att in teamData) {
                var patchedAttendance = this.db.Attendance.FirstOrDefault (w => w.Date.Month == d.Value.Month &&
                    w.Date.Year == d.Value.Year &&
                    w.Date.Day == d.Value.Day &&
                    w.PlayerId == att.PlayerId);
                    if (patchedAttendance == null){
                        this.db.Attendance.Add(att);
                    } else {
                        patchedAttendance.Status = att.Status;
                    }

            }

            this.db.SaveChanges();
            return Ok();
        }

        [HttpDelete ("{id}")]
        public ActionResult Delete (int id) {
            var deletedPlayer = this.db.Attendance.FirstOrDefault (w => w.Id == id);
            this.db.Attendance.Remove (deletedPlayer);
            this.db.SaveChanges ();
            return Ok (new { success = true });
        }
    }
}