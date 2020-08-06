using System;
using System.Collections.Generic;
namespace Hungry_ninja
{
    public class Buffet
    {

        public List<IConsumable> Menu;
        //constructor
        public Buffet()
        {
            Menu = new List<IConsumable>() {
                new Food ("rice", 1000, false, false),
                new Food ("cakes", 100, false, true),
                new Food ("bread", 1000, true, false),
                new Food ("pasta", 1000, false, false),
                new Food ("sushi", 1000, false, false),
                new Drink ("Miso soup", 1000, false),
                new Drink ("Cola", 1080, false)


    };
        }
        public IConsumable Serve()
        {
            int n = Menu.Count;
            Random rand = new Random();
            while (n > 1)
            {
                n--;
                int k = rand.Next(n + 1);
                var tmp = Menu[k];
                Menu[k] = Menu[n];
                Menu[n] = tmp;
            }
            return Menu[0];
        }
    }
}