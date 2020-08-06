using System;
namespace Hungry_ninja
{
    class SweetTooth : Ninja
    {
        public override bool IsFull
        {
            get
            {
                if (calorieIntake >= 1500)
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
                if (!item.IsSweet)
                {
                    calorieIntake += item.Calories;
                }
                else
                {
                    calorieIntake += item.Calories + 10;
                }
                ConsumptionHistory.Add(item);
                item.GetInfo();
            }
            else
            {
                Console.WriteLine("You hate sweets ,don't you?");
            }
        }
    }
}