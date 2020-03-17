using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace IPDSWebAPI.Models
{
    public class IPDSContext : DbContext
    {
        // This is where you pass in connection details for stuff like MySQL
        public IPDSContext(DbContextOptions<IPDSContext> options) : base(options)
        {

        }

        public DbSet<Property> Properties { get; set; }
        public DbSet<Property> Purchases { get; set; }
    }
}
