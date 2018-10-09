using System;
using Extracurricular;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace server
{
    public partial class Extracurricular_DatabaseContext : DbContext
    {
        public Extracurricular_DatabaseContext()
        {
        }

        public Extracurricular_DatabaseContext(DbContextOptions<Extracurricular_DatabaseContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var conn = Environment.GetEnvironmentVariable("CONNECTION_STRING") ?? "server=localhost;database=Extracurricular_Database";
                optionsBuilder.UseNpgsql(conn);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}
        public DbSet<Team> Teams {get; set;}
        public DbSet<Player> Players {get; set;}
        public DbSet<Attendance> Attendance {get; set;}

        
    }
}
