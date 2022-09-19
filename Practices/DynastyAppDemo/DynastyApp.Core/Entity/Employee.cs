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
        [MaxLength(80)]
        public string StreetAddress { get; set; }

        [Required, Column(TypeName = "varchar")]
        [MaxLength(20)]
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}
