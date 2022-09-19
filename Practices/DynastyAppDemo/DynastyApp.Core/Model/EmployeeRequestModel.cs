using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;

namespace DynastyApp.Core.Model
{
    public class EmployeeRequestModel
    {
        public int Id { get; set; }

        [Required, Column(TypeName = "varchar")]
        [MaxLength(20)]
        public string FirstName { get; set; }

        [Required, Column(TypeName = "varchar")]
        [MaxLength(20)]
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string StreetAddress { get; set; }

        [Required, Column(TypeName = "varchar")]
        [MaxLength(20)]
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
    }
}
