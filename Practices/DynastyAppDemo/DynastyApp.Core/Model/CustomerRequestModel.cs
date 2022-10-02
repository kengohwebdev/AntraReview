﻿using DynastyApp.Core.Entity;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynastyApp.Core.Model
{
    public class CustomerRequestModel
    {
        public int Id { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(30)]
        public string Name { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(30)]
        public string Title { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(80)]
        public string Address { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(20)]
        public string City { get; set; }
        [Display(Name = "Region")]
        public int RegionId { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(15)]
        public string PostalCode { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(15)]
        public string Country { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(15)]
        public string Phone { get; set; }
    }
}
