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

        // Post data to the Attendance Table
        [HttpPost]
        public Attendance Post([FromBody] Attendance status)
        {
        
            this.db.Attendance.Add(status);
            this.db.SaveChanges();
            // //var rv = this.db.Players.Include(i => i.Team).FirstOrDefault(p => p.Id == PlayerName.Id);
            // this.db.Entry(PlayerName).Reference(p => p.Team).Load();
            return status;
        }
    }
}
    