using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Core.Entity
{
    public class Employee
    {
        public int Id { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(20)]
        public string FirstName { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(20)]
        public string LastName { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(50)]
        public string Title { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(5)]
        public string TitleOfCourtesy { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime HireDate { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(80)]
        public string Address { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(20)]
        public string City { get; set; }
        public int RegionId { get; set; }
        public int PostalCode { get; set; }


        public string Country { get; set; }

        public string Phone { get; set; }
        public int? ReportsTo { get; set; }
        [Required, Column(TypeName = "varchar(max)")]
        public string PhotoPath { get; set; }

        public Region Region { get; set; }
    }
}
