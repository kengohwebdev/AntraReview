using DynastyApp.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Core.Contract.Service
{
    public interface ICustomerServiceAsync
    {
        Task<IEnumerable<CustomerResponseModel>> GetAllAsync();
        Task<int> AddCustomerAsync(CustomerRequestModel model);
        Task<CustomerResponseModel> GetByIdAsync(int id);
        Task<CustomerRequestModel> GetCustomerForEditAsync(int id);
        Task<int> UpdateCustomerAsync(CustomerRequestModel customer);
        Task<int> DeleteCustomerAsync(int id);
    }
}
