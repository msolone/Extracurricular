using System.Collections.Generic;

namespace Extracurricular
{
    public class Player 
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int TeamId { get; set; }
        public Team Team  { get; set; }

        public List<Attendance> Attendance {get;set;} = new List<Attendance>();
    }
}