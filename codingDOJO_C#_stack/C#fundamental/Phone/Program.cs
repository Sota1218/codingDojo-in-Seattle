using System;

namespace myPhone {
    class Program {
        static void Main (string[] args) {
            Galaxy s8 = new Galaxy ("s8", 100, "T-mobile", "Go go go go");
            Nokia eleven = new Nokia ("11", 689, "Metro PCS", "Back back back");

            s8.DisplayInfo ();
            Console.WriteLine (s8.Ring ());
            Console.WriteLine (s8.Unlock ());
            Console.WriteLine ("");

            eleven.DisplayInfo ();
            Console.WriteLine (eleven.Ring ());
            Console.WriteLine (eleven.Unlock ());
            Console.WriteLine ("");
        }
    }
}