using System;
using System.Collections.Generic;

namespace Puzzles {
    class Program {
        static void Main (string[] args) {
            Console.WriteLine (Names ());
        }
        public static int[] RandomArray () {
            Random rand = new Random ();
            int[] random = new int[10];
            int max = 5;
            int min = 25;
            int sum = 0;
            for (int val = 0; val < 10; val++) {

                random[val] = rand.Next (5, 25);
                if (random[val] > max) {
                    max = random[val];
                }
                if (random[val] < min) {
                    min = random[val];
                }
                sum += random[val];

            }
            Console.WriteLine (max);
            Console.WriteLine (min);
            Console.WriteLine (sum);
            return random;

        }
        public static string TossCoin () {
            Console.WriteLine ("Tossing a Coin!");
            Random rand = new Random ();
            int num = rand.Next (2);
            if (num == 0) {
                Console.WriteLine ("Heads");
                return "Heads";
            } else {
                Console.WriteLine ("Tails");
                return "Tails";
            }

        }
        public static Double TossMultipleCoins (int num) {
            int cnt = 0;
            int heads_count = 0;
            while (cnt <= num) {
                if (TossCoin () == "Heads") {
                    heads_count += 1;
                }
                cnt += 1;
            }
            return heads_count / num;
        }
        //Why does this not work.?

        public static List<string> Names () {
            List<string> names = new List<string> ();
            names.Add ("Todd");
            names.Add ("Tiffany");
            names.Add ("Charlie");
            names.Add ("Geneva");
            names.Add ("Sydney");

            Random rand = new Random ();
            int n = names.Count;
            while (n > 1) {
                n--;
                int k = rand.Next (n + 1);
                string tmp = names[k];
                names[k] = names[n];
                names[n] = tmp;
            }
            foreach (string i in names) {
                Console.WriteLine (i);
                if (i.Length <= 5) {
                    names.Remove (i);
                }
            }
            return names;

        }

    }
}