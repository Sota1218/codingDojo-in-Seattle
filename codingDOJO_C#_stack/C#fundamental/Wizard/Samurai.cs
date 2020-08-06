using System;
namespace Wizard
{
    public class Samurai : Human
    {
        public Samurai(string name) : base(name)
        {
            Health = 200;
        }
        public override int Attack(Human target)
        {
            int remainingHealth = base.Attack(target);
            if (remainingHealth < 50)
            {
                target.Health = 0;
            }
            return base.Attack(target);

        }
        public void Meditate()
        {
            Health = 200;
        }

    }
}