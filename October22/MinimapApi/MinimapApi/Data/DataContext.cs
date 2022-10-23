global using Microsoft.EntityFrameworkCore;

namespace MinimapApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

       public DbSet<WeatherForecast> weatherForecasts { get; set; }
 
    }
}
