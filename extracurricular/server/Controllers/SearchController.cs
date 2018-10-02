using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Extracurricular;
using Microsoft.AspNetCore.Mvc;
using server.ViewModels;

namespace server.Controllers {

    [Route ("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase {
        private Extracurricular_DatabaseContext db { get; set; }

        public SearchController () {
            this.db = new Extracurricular_DatabaseContext ();
        }

        [HttpGet]
        // [FromQuery] string q = the letters you put after api/search/...
        public IEnumerable<Player> Get ([FromQuery] string q) {

            // Searches the Players Table for what ever is typed after api/search?q=...
            var searchResults = this.db
                // Accessing Players Table
                .Players
                // Filtering the data to only include FirstName and LastName with the q value
                .Where (w => w.FirstName.ToLower ().Contains (q.ToLower()) || w.LastName.ToLower ().Contains (q.ToLower()))
                // Orders the remaining array by the LastName 
                .OrderBy (o => o.LastName)
                .Take(5);
                // Creates a new array to fit the SearchResults View Model
                // .Select(s => new SearchResults {
                //         Id = s.Id,
                //         FirstName = s.FirstName,
                //         LastName = s.LastName,
                //         TeamId = s.TeamId
                // });

            return searchResults;
        }
    }
}

// api/search

// pulls player data based on first or last name