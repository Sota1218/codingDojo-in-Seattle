using System;

namespace Wizard
{

    class Program
    {
        static void Main(string[] args)
        {
            Human Sota = new Human("Sota");
            Wizard guy = new Wizard("guy");
            Ninja girl = new Ninja("girl");
            Samurai boy = new Samurai("boy");
            Console.WriteLine(guy.Health);
            boy.Attack(Sota);
            boy.Attack(Sota);
            boy.Attack(Sota);
            boy.Attack(Sota);
            Console.WriteLine(Sota.Health);
            guy.Attack(Sota);
            guy.Heal(Sota);
            guy.Heal(Sota);
            guy.Heal(Sota);
            Console.WriteLine(Sota.Health);
        }
    }
}
