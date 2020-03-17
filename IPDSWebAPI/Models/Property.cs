using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace IPDSWebAPI.Models
{
    public class Property
    {
        // Client Data
        [Key]
        public int PropertyID { get; set; }
        [Required]
        [Index(IsUnique=true)] // TODO test this uniqueness
        [Column(TypeName = "nvarchar(20)")]
        public string PropertyCode { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Address { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(25)")]
        public string City { get; set; }
        [Required]
        [Column(TypeName = "varchar(2)")]
        public string State { get; set; }
        [Required]
        [Column(TypeName = "varchar(10)")]
        public string ZipCode { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string County { get; set; }
        public string FullAddress
        {
            get
            {
                return String.Format("{0}, {1}, {2} {3}", Address, City, State, ZipCode);
            }
        }

        // WAP Data
        [Column(TypeName = "varchar(10)")]
        public string DealType { get; set; }

        // Children
        public Purchase Purchase { get; set; }
    }

    public enum DealType
    {
        Sec = 0,
        Term = 1, 
        Warehouse = 2,
        Misc = 3
    }
}
