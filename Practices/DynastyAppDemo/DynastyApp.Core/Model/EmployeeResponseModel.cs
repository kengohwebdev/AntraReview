using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Core.Model
{
    public class EmployeeResponseModel
    {
        public int Id { get; set; }
        public string FullName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string Title { get; set; }
        public string TitleOfCourtesy { get; set; }
        public DateTime BirthDate { get; set; }
        public string PhotoPath { get; set; }
        public string Phone { get; set; }
        public string RegionName { get; set; }

        public RegionModel Region { get; set; }
    }
}
