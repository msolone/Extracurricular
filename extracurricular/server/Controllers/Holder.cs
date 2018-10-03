        // [HttpGet ("history/{TeamId}")]
        // public ActionResult GetTeamHistory (int TeamId, [FromQuery] DateTime d) {
        //     var history = this.db.Players
        //         .OrderBy (o => o.LastName)
        //         .Include (i => i.Attendance)
        //         .Where (w => w.TeamId == TeamId)
        //         .SelectMany (s => s.Attendance)
        //         .Include (i => i.Player)
        //         .Where (w => w.Date >= d && w.Date <= DateTime.Now)
        //         .Select (s => new PlayerAttendance (s));

        //     return Ok (history);
        // }
