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
    public class RegionRepositoryAsync : BaseRepository<Region>, IRegionRepositoryAsync
    {
        public RegionRepositoryAsync(DADbContext _dbContext) : base(_dbContext)
        {
        }
    }
}
