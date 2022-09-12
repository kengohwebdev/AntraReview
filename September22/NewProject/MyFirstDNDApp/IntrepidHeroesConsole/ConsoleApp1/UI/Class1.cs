using System;
using ConsoleApp1.Entities;

namespace IntrepidHeroesConsole.UI
{
    class MyCharacter
    {
        private string _name;

        Character character;
        Character character2;
        public MyCharacter()
        {
            character = new Character();
            character2 = new Character();
        }

        public void CreateCharacter()
        {
            character.Id = 1;
            character.Name = "Spiderman";

            character2.Id = 2;
            character2.Name = "Ironman";
        }

        public void ViewCharacter()
        {
            Console.WriteLine($"{character.Id} \t {character.Name}");
            Console.WriteLine($"{character2.Id} \t {character2.Name}");
        }

        public MyCharacter(string name):this()
        {
            this._name = name;
            Console.WriteLine($"Next upcoming hero movies :  {this._name}");
        }
    }

}
