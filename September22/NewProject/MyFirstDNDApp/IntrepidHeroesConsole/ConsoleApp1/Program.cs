using IntrepidHeroesConsole.UI;
using Microsoft.Extensions.Hosting;
using System;

namespace IntrepidHeroesConsole
{
    class Program
    {
        public static void Main(string[] args)
        {
           CreateHostBuilder(args).Build().Run();

  

           MyCharacter newCharacter = new MyCharacter();
            newCharacter.CreateCharacter();
            newCharacter.ViewCharacter();

            MyCharacter newCharacter2 = new MyCharacter("Mydude");

        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
        
            Host.CreateDefaultBuilder(args).ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>();
            });

        
    }
}
