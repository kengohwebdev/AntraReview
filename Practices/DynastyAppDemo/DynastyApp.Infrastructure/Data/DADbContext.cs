using DynastyApp.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace DynastyApp.Infrastructure.Data
{
    public class DADbContext:IdentityDbContext<ApplicationUser>
    {
        public DADbContext(DbContextOptions<DADbContext> option) :base(option)
        {
            
        }

        public DbSet<Employee> Employee { get; set; }
        public DbSet<Region> Region { get; set; }
        public DbSet<Customer> Customer { get; set; }
     
    }
}
