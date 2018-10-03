using System;
using Extracurricular;

namespace server.ViewModels
{
    public class PlayerAttendance{
       public string FullName { get; set; }

       public string Status { get; set; }

       public int PlayerId { get; set; }

       public DateTime Date { get; set; }

       public PlayerAttendance(Attendance att)
       {
           this.FullName = att.Player.FirstName + " " + att.Player.LastName;
           this.Status = att.Status;
           this.PlayerId = att.PlayerId;
           this.Date = att.Date;
       }
    }
}