
using System;
using System.Collections.Generic;

namespace CollectionsPractice
{
  class Program
  {
    static void Main(string[] args)
    {
      // ARRAY VALUES
      int[] numArray = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
      string[] strArray = { "Tim", "Martin", "Nikki", "Sarrah" };
      Boolean[] boolArray = { true, false, true, false, true, false, true, false, true, false };

      // // LIST VALUES
      List<string> flavors = new List<string>();
      flavors.Add("Vanilla");
      flavors.Add("Chocolate");
      flavors.Add("Rocky Road");
      flavors.Add("Strawberry");
      flavors.Add("Mint");
      // for(int i = 0; i<=flavors.Count; i++) {
      // Console.WriteLine(flavors[i]);
      // }
      Console.WriteLine(flavors[3]);
      flavors.RemoveAt(3);
      Console.WriteLine(flavors[3]);
      for (int i = 0; i < flavors.Count; i++)
      {
        Console.WriteLine(flavors[i]);
      }
      // DICTIONARY VALUES
      Dictionary<string, string> person = new Dictionary<string, string>();
      person.Add("Name:", strArray[0]);
      person.Add("Name", strArray[1]);
      person.Add("Name -", strArray[2]);
      person.Add("Name =", strArray[3]);
      for (int i = 0; i < person.Count; i++)
      {
        Console.WriteLine("Name" + person["Name:"]);
      }

    }
  }
}