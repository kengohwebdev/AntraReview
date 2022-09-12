using IntrepidHeroesConsole.UI;
using System;

namespace IntrepidHeroesConsole
{
    class Program
    {
        public static void Main(string[] args)
        {
           MyCharacter newCharacter = new MyCharacter();
            newCharacter.CreateCharacter();
            newCharacter.ViewCharacter();

            MyCharacter newCharacter2 = new MyCharacter("Mydude");
        }
    }
}
