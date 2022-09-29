using DynastyApp.Core.Contract.Service;
using DynastyApp.Core.Model;
using DynastyApp.Infrastructure.Service;
using Microsoft.AspNetCore.Mvc;

namespace DynastyApp.WebMVC.Controllers
{
    public class RegionController : Controller
    {
        private readonly IRegionServiceAsync _regionServiceAsync;
        public RegionController(IRegionServiceAsync regionServiceAsync)
        {
            _regionServiceAsync = regionServiceAsync;
        }

        public async Task<IActionResult> Index()
        {
           var result = await _regionServiceAsync.GetAllAsync();
            if( result != null)
                return View(result);

            List<RegionModel> lmodel = new List<RegionModel>();
            return View(lmodel);
            
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(RegionModel regionModel)
        {
            if (ModelState.IsValid)
            {
                await _regionServiceAsync.AddRegionAsync(regionModel);
                return RedirectToAction("Index");
            }
            return View(regionModel);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            ViewBag.IsEdit = false;
            var result = await _regionServiceAsync.GetRegionForEditAsync(id);
            return View(result);
        }
        [HttpPost]
        public async Task<IActionResult> Edit(RegionModel regionModel)
        {
            ViewBag.IsEdit = false;
            if (ModelState.IsValid)
            {
                await _regionServiceAsync.UpdateRegionAsync(regionModel);
                ViewBag.IsEdit = true;
            }
            return View(regionModel);
        }

        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            await _regionServiceAsync.DeleteRegionAsync(id);
            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Detail()
        {
            var collection = await _regionServiceAsync.GetAllAsync();
            if (collection != null)
                return View(collection);

            List<RegionModel> lmodel = new List<RegionModel>();
            return View(lmodel);
        }


    }
}
