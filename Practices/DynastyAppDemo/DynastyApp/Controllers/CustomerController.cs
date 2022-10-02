using DynastyApp.Core.Contract.Service;
using DynastyApp.Core.Model;
using DynastyApp.Infrastructure.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace DynastyApp.WebAPI.Controllers
{
    public class CustomerController : Controller
    {
        private readonly ICustomerServiceAsync _customerServiceAsync;
        private readonly IRegionServiceAsync _regionServiceAsync;

        public CustomerController(ICustomerServiceAsync customerServiceAsync, IRegionServiceAsync regionServiceAsync)
        {
            _customerServiceAsync = customerServiceAsync;
            _regionServiceAsync = regionServiceAsync;
        }

        public async Task<IActionResult> Index()
        {
            var collection = await _customerServiceAsync.GetAllAsync();
            if (collection != null)
                return View(collection);

            List<CustomerResponseModel> model = new List<CustomerResponseModel>();
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            var collection = await _regionServiceAsync.GetAllAsync();
            ViewBag.Regions = new SelectList(collection, "Id", "Name");

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(CustomerRequestModel model)
        {
            if (ModelState.IsValid)
            {
                await _customerServiceAsync.AddCustomerAsync(model);
                return RedirectToAction("Index");
            }

            var collection = await _regionServiceAsync.GetAllAsync();
            ViewBag.Regions = new SelectList(collection, "Id", "Name");
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            ViewBag.IsEdit = false;
            var custModel = await _customerServiceAsync.GetCustomerForEditAsync(id);
            var regCollection = await _regionServiceAsync.GetAllAsync();
            ViewBag.Regions = new SelectList(regCollection, "Id", "Name");

            return View(custModel);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(CustomerRequestModel model)
        {
            ViewBag.IsEdit = false;
            var collection = await _regionServiceAsync.GetAllAsync();
            ViewBag.Regions = new SelectList(collection, "Id", "Name");
            if (ModelState.IsValid)
            {
                await _customerServiceAsync.UpdateCustomerAsync(model);
                ViewBag.IsEdit = true;
            }

            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            await _customerServiceAsync.DeleteCustomerAsync(id);
            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Detail()
        {
            var collection = await _customerServiceAsync.GetAllAsync();
            if (collection != null)
                return View(collection);

            List<CustomerResponseModel> model = new List<CustomerResponseModel>();
            return View(model);
        }

    }

}
