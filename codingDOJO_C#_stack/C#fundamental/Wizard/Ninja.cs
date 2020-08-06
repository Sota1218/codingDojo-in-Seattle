using System;
namespace Wizard
{
    public class Ninja : Human
    {


        public Ninja(string name) : base(name)
        {
            Dexterity = 175;
        }
        public override int Attack(Human target)
        {
            int dmg = 5 * Dexterity;
            Random rand = new Random();
            if (rand.Next(5) == 1)
            {
                dmg += 10;
            }
            return base.Attack(target, dmg);

        }
        public void Steal(Human target)
        {
            target.Health -= 5;
            Health += 5;

        }


    }
}