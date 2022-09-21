using DynastyApp.Core.Contract.Repository;
using DynastyApp.Core.Entity;
using DynastyApp.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DynastyApp.Infrastructure.Repository
{
    public class EmployeeRepositoryAsync : BaseRepository<Employee>, IEmployeeRepositoryAsync
    {
        private readonly DADbContext _context;
        public EmployeeRepositoryAsync(DADbContext _dbContext) : base(_dbContext)
        {
            _context = _dbContext;
        }

        public async Task<IEnumerable<Employee>> GetByNameAsync(string name)
        {
           return await _context.Employee.Where(x => x.FirstName.Contains(name)).ToListAsync();
        }
    }
}
