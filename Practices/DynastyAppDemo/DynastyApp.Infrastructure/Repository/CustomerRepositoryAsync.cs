using DynastyApp.Core.Contract.Repository;
using DynastyApp.Core.Entity;
using DynastyApp.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Infrastructure.Repository
{
    public class CustomerRepositoryAsync : BaseRepository<Customer>, ICustomerRepositoryAsync
    {
        public CustomerRepositoryAsync(DADbContext _dbContext) : base(_dbContext)
        {
        }
    }
}
