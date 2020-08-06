using System;
namespace Hungry_ninja
{
    class SpiceHound : Ninja
    {
        public override bool IsFull
        {
            get
            {
                if (calorieIntake >= 1200)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        public override void Consume(IConsumable item)
        {
            // provide override for Consumecopy
            if (!IsFull)
            {
                if (!item.IsSpicy)
                {
                    calorieIntake += item.Calories;
                }
                else
                {
                    calorieIntake -= item.Calories + 5;
                }
                ConsumptionHistory.Add(item);
                item.GetInfo();
            }
            else
            {
                Console.WriteLine("You hate spicy foods ,don't you?");
            }
        }

    }
}