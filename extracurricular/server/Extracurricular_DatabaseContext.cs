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
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("server=localhost;database=Extracurricular_Database");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}
        public DbSet<Team> Teams {get; set;}
        public DbSet<Player> Players {get; set;}
        public DbSet<Attendance> Attendance {get; set;}

        
    }
}
