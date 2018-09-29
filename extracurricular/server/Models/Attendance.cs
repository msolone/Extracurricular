using System;

namespace Extracurricular
{
    public class Attendance
    {
        public int Id { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        public string Status { get; set; }
        public int PlayerId { get; set; }
        public Player Player { get; set; }

    }
}