using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IPDSWebAPI.Models
{
    public class Purchase
    {
        // Client Data
        [Key]
        public int PurchaseID { get; set; }
        [Column(TypeName = "money")]
        public decimal GrossPurchasePrice { get; set; }
        [Column(TypeName = "money")]
        public decimal NetPurchasePrice { get; set; }
        [Column(TypeName = "Date")]
        public DateTime PurchaseDate { get; set; }

        // Parent
        public int PropertyID { get; set; }
        public Property Property { get; set; }

    }
}
