using DynastyApp.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Core.Contract.Service
{
    public interface IEmployeeServiceAsync
    {
        Task<int> AddEmployeeAsync(EmployeeRequestModel employee);
        Task<IEnumerable<EmployeeResponseModel>> GetAllAsync();
        Task<EmployeeResponseModel> GetByIdAsync(int id);
        Task<int> UpdateEmployeeAsync(EmployeeRequestModel employee);
        Task<EmployeeRequestModel> GetEmployeeForEditAsync(int id);
        Task<int> DeleteEmployeeAsync(int id);
    }
}
