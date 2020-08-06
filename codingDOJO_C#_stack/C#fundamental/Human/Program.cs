using System;

namespace Human {
    class Human1 {
        // Fields for Human
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health; 
        public int Health {
            get { return health; }
        }
        public Human1 () {
            this.Name = "";
            this.Strength = 1;
            this.Intelligence = 1;
            this.Dexterity = 3;
            this.health = 100;
        }
        public Human1 (string name, int strength, int intelligence, int dexterity, int health) {
            this.Name = name;
            this.Strength = strength;
            this.Intelligence = intelligence;
            this.Dexterity = dexterity;
            this.health = health;
        }
        public int Attack (Human1 target) {
            target.health -= this.Strength * 5;
            return target.health;
        }
        // public static void Main () {
        //     
        // }
    }

    class Program {
        static void Main (string[] args) {
            Human1 h = new Human1 ();
            Human1 a = new Human1 ();
            Console.WriteLine (a.Attack (h));
        }
    }
}