using DynastyApp.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DynastyApp.Infrastructure.Data
{
    public class DADbContext:DbContext
    {
        public DADbContext(DbContextOptions<DADbContext> option) :base(option)
        {
            
        }

        public DbSet<Employee> Employees { get; set; }
     
    }
}
