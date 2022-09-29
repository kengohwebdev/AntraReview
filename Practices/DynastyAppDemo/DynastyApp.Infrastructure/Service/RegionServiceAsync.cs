using DynastyApp.Core.Contract.Repository;
using DynastyApp.Core.Contract.Service;
using DynastyApp.Core.Entity;
using DynastyApp.Core.Model;
using DynastyApp.Infrastructure.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Infrastructure.Service
{
    public class RegionServiceAsync : IRegionServiceAsync
    {
        private readonly IRegionRepositoryAsync _regionRepositoryAsync;
        public RegionServiceAsync(IRegionRepositoryAsync regionRepositoryAsync)
        {
            _regionRepositoryAsync = regionRepositoryAsync;
        }

        public async Task<int> AddRegionAsync(RegionModel regionModel)
        {
            Region region = new Region();
            region.Name = regionModel.Name;

            return await _regionRepositoryAsync.InsertAsync(region);
        }

        public async Task<int> DeleteRegionAsync(int id)
        {
            return await _regionRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<RegionModel>> GetAllAsync()
        {
           var collection = await _regionRepositoryAsync.GetAllAsync();
            if (collection != null)
            {
                List<RegionModel> lregion = new List<RegionModel>();
                foreach( var item in collection)
                {
                    RegionModel model = new RegionModel();
                    model.Name = item.Name;
                    model.Id = item.Id;
                    lregion.Add(model);
                }
                return lregion;
            }
            return null;
        }

        public async Task<RegionModel> GetByIdAsync(int id)
        {
            var item = await _regionRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                RegionModel model = new RegionModel();
                model.Id = item.Id;
                model.Name = item.Name;
                return model;
            }
            return null;
        }

        public async Task<RegionModel> GetRegionForEditAsync(int id)
        {
            var item = await _regionRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                RegionModel model = new RegionModel();
                model.Id = item.Id;
                model.Name = item.Name;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateRegionAsync(RegionModel regionModel)
        {
            Region region = new Region();
            region.Id = regionModel.Id;
            region.Name = regionModel.Name;
            return await _regionRepositoryAsync.UpdateAsync(region);
        }
    }
}
