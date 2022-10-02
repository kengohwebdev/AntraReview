using DynastyApp.Core.Contract.Repository;
using DynastyApp.Core.Contract.Service;
using DynastyApp.Core.Entity;
using DynastyApp.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Infrastructure.Service
{
    public class CustomerServiceAsync : ICustomerServiceAsync
    {
        private readonly ICustomerRepositoryAsync _customerRepositoryAsync;
        private readonly IRegionRepositoryAsync _regionRepositoryAsync;
        public CustomerServiceAsync(ICustomerRepositoryAsync customerRepositoryAsync, IRegionRepositoryAsync regionRepositoryAsync)
        {
            _customerRepositoryAsync = customerRepositoryAsync;
            _regionRepositoryAsync = regionRepositoryAsync;
        }

        public async Task<int> AddCustomerAsync(CustomerRequestModel model)
        {
            Customer cust = new Customer();
            cust.Name = model.Name;
            cust.Title = model.Title;
            cust.Address = model.Address;
            cust.City = model.City;
            cust.PostalCode = model.PostalCode;
            cust.Country = model.Country;
            cust.Phone = model.Phone;
            cust.RegionId = model.RegionId;

            return await _customerRepositoryAsync.InsertAsync(cust);
        }

        public async Task<int> DeleteCustomerAsync(int id)
        {
            return await _customerRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<CustomerResponseModel>> GetAllAsync()
        {
            var collection = await _customerRepositoryAsync.GetAllAsync();

            if (collection != null)
            {
                List<CustomerResponseModel> result = new List<CustomerResponseModel>();
                foreach (var item in collection)
                {
                    CustomerResponseModel model = new CustomerResponseModel();
                    model.Id = item.Id;
                    model.Name = item.Name;
                    model.Title = item.Title;
                    model.Address = item.Address;
                    model.City = item.City;
                    model.PostalCode = item.PostalCode;
                    model.Country = item.Country;
                    model.Phone = item.Phone;

                    var c = await _regionRepositoryAsync.GetByIdAsync(item.RegionId);
                    model.Region = new RegionModel() { Name = c.Name };
                    model.RegionName = c.Name;

                    result.Add(model);
                }
                return result;
            }
            return null;
        }

        public async Task<CustomerResponseModel> GetByIdAsync(int id)
        {
            var item = await _customerRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                CustomerResponseModel model = new CustomerResponseModel();
                model.Id = item.Id;
                model.Name = item.Name;
                model.Title = item.Title;
                model.Address = item.Address;
                model.City = item.City;
                model.PostalCode = item.PostalCode;
                model.Country= item.Country;
                model.Phone = item.Phone;

                return model;
            }
            return null;
        }

        public async Task<CustomerRequestModel> GetCustomerForEditAsync(int id)
        {
            var item = await _customerRepositoryAsync.GetByIdAsync(id);
            if(item != null)
            {
                CustomerRequestModel model = new CustomerRequestModel();
                model.Id = item.Id;
                model.Name = item.Name;
                model.Title = item.Title;
                model.Address = item.Address;
                model.City = item.City;
                model.PostalCode = item.PostalCode;
                model.Country = item.Country;
                model.Phone = item.Phone;
                model.RegionId = item.RegionId;

                return model;
            }
            return null;
        }

        public async Task<int> UpdateCustomerAsync(CustomerRequestModel customer)
        {
            Customer cust = new Customer();
            cust.Id = customer.Id;
            cust.Name = customer.Name;
            cust.Title = customer.Title;
            cust.Address = customer.Address;
            cust.City = customer.City;
            cust.RegionId = customer.RegionId;
            cust.PostalCode = customer.PostalCode;
            cust.Country = customer.Country;
            cust.Phone = customer.Phone;

            return await _customerRepositoryAsync.UpdateAsync(cust);
        }
    }
}
