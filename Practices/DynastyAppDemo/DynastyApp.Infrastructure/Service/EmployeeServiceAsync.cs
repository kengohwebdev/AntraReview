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
    public class EmployeeServiceAsync : IEmployeeServiceAsync
    {
        private readonly IEmployeeRepositoryAsync _employeeRepositoryAsync;

        public EmployeeServiceAsync(IEmployeeRepositoryAsync employeeRepositoryAsync)
        {
            _employeeRepositoryAsync = employeeRepositoryAsync;
        }

        public Task<int> AddEmployeeAsync(EmployeeRequestModel employee)
        {
            throw new NotImplementedException();
        }

        public async Task<int> DeleteEmployeeAsync(int id)
        {
            return await _employeeRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<EmployeeResponseModel>> GetAllAsync()
        {
            var collection = await _employeeRepositoryAsync.GetAllAsync();

            if (collection != null)
            {
                List<EmployeeResponseModel> result = new List<EmployeeResponseModel>();
                foreach (var item in collection)
                {

                    EmployeeResponseModel model = new EmployeeResponseModel();
                    model.Id = item.Id;
                    model.FirstName = item.FirstName;
                    model.LastName = item.LastName;
                    model.StreetAddress = item.StreetAddress;
                    model.City = item.City;
                    model.State = item.State;
                    model.ZipCode = item.ZipCode;
                    model.DateOfBirth = item.DateOfBirth;
                    result.Add(model);

                }
                return result;
            }
            return null;
        }

        public async Task<EmployeeResponseModel> GetByIdAsync(int id)
        {
            var item = await _employeeRepositoryAsync.GetByIdAsync(id);
            if(item != null)
            {
                EmployeeResponseModel model = new EmployeeResponseModel();
                model.Id = item.Id;
                model.FirstName = item.FirstName;
                model.LastName = item.LastName;
                model.StreetAddress = item.StreetAddress;
                model.City = item.City;
                model.State = item.State;
                model.ZipCode = item.ZipCode;
                model.DateOfBirth = item.DateOfBirth;
                return model;
            }
            return null;
        }

        public async Task<EmployeeRequestModel> GetEmployeeForEditAsync(int id)
        {
            var item = await _employeeRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                EmployeeRequestModel model = new EmployeeRequestModel();
                model.Id = item.Id;
                model.FirstName = item.FirstName;
                model.LastName = item.LastName;
                model.StreetAddress = item.StreetAddress;
                model.City = item.City;
                model.State = item.State;
                model.ZipCode = item.ZipCode;
                model.DateOfBirth = item.DateOfBirth;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateEmployeeAsync(EmployeeRequestModel employee)
        {
            Employee emp = new Employee();
            emp.Id = employee.Id;
            emp.FirstName = employee.FirstName;
            emp.LastName = employee.LastName;
            emp.StreetAddress = employee.StreetAddress;
            emp.City = employee.City;
            emp.State = employee.State;
            emp.ZipCode = employee.ZipCode;
            emp.DateOfBirth = employee.DateOfBirth;

            return await _employeeRepositoryAsync.UpdateAsync(emp);
        }
    }
}
