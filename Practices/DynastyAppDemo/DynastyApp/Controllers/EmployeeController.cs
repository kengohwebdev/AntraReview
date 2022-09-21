using DynastyApp.Core.Contract.Service;
using DynastyApp.Core.Model;
using DynastyApp.Infrastructure.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace DynastyApp.WebMVC.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly IEmployeeServiceAsync _employeeServiceAsync;
        public EmployeeController(IEmployeeServiceAsync employeeServiceAsync)
        {
            _employeeServiceAsync = employeeServiceAsync;
        }

        public async Task<IActionResult> Index()
        {
            var empCollection = await _employeeServiceAsync.GetAllAsync();
            if (empCollection != null)
                return View(empCollection);

            List<EmployeeResponseModel> model = new List<EmployeeResponseModel>();
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
    
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(EmployeeRequestModel model)
        {
            if (ModelState.IsValid)
            {
                await _employeeServiceAsync.AddEmployeeAsync(model);
                return RedirectToAction("Index");
            }
     
            return View(model);
        }


        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            ViewBag.IsEdit = false;
            var empModel = await _employeeServiceAsync.GetEmployeeForEditAsync(id);
          
            return View(empModel);
        }
        [HttpPost]
        public async Task<IActionResult> Edit(EmployeeRequestModel model)
        {
            ViewBag.IsEdit = false;
        
            if (ModelState.IsValid)
            {
                await _employeeServiceAsync.UpdateEmployeeAsync(model);
                ViewBag.IsEdit = true;

            }

            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            await _employeeServiceAsync.DeleteEmployeeAsync(id);
            return RedirectToAction("Index");
        }

        [NonAction]
        public void Demo()
        {
        }


        public async Task<IActionResult> Detail()
        {
            var empCollection = await _employeeServiceAsync.GetAllAsync();
            if (empCollection != null)
                return View(empCollection);

            List<EmployeeResponseModel> model = new List<EmployeeResponseModel>();
            return View(model);
        }
    }
}
