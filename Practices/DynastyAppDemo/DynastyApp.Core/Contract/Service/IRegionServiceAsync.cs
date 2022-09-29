using DynastyApp.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Core.Contract.Service
{
    public interface IRegionServiceAsync
    {
        Task<IEnumerable<RegionModel>> GetAllAsync();
        Task<int> AddRegionAsync(RegionModel model);
        Task<RegionModel> GetByIdAsync(int id);
        Task<RegionModel> GetRegionForEditAsync(int id);
        Task<int> UpdateRegionAsync(RegionModel regionModel);
        Task<int> DeleteRegionAsync(int id);
    }
}
