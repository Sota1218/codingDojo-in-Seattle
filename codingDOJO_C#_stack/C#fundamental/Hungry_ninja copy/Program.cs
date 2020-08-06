using System.Runtime.CompilerServices;
using System;
using System.Collections.Generic;

namespace Hungry_ninja
{

  class Food
  {
    public string Name;
    public int Calories;
    // Foods can be Spicy and/or Sweet
    public bool IsSpicy;
    public bool IsSweet;
    public Food(string name, int calories, bool isSpicy, bool isSweet)
    {
      this.Name = name;
      this.Calories = calories;
      this.IsSpicy = isSpicy;
      this.IsSweet = isSweet;
    }
  }

  class Buffet
  {
    public List<Food> Menu;
    //constructor
    public Buffet()
    {
      Menu = new List<Food>() {
                new Food ("rice", 1000, false, false),
                new Food ("cakes", 100, false, true),
                new Food ("bread", 1000, true, false),
                new Food ("pasta", 1000, false, false),
                new Food ("sushi", 1000, false, false),
                new Food ("Miso soup", 1000, false, false),
                new Food ("egg", 1080, false, false)


    };
    }
    public Food Serve()
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
    class Ninja
    {
      private int calorieIntake;
      public List<Food> FoodHistory;

      // add a constructor
      public Ninja()
      {
        calorieIntake = 0;
        this.FoodHistory = new List<Food>();
      }
      public bool isFull
      {
        get
        {
          if (this.calorieIntake >= 1200)
          {
            return true;
          }
          else
          {
            return false;
          }
        }
      }
      // add a public "getter" property called "IsFull"

      // build out the Eat method
      public void Eat(Food item)
      {
        if (!isFull)
        {
          calorieIntake += item.Calories;
          FoodHistory.Add(item);
          Console.WriteLine(item.Name);
          Console.WriteLine(item.IsSpicy);
          Console.WriteLine(item.IsSweet);

        }
        else
        {
          Console.WriteLine("Ninja is already full. He is dying.");

        }
      }
    }

  }



  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine();
    }
  }
}