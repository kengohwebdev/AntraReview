using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Core.Model
{
    public class RegionModel
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is required")]
        [Display(Name = "Enter Name")]
        public string Name { get; set; }
    }
}
