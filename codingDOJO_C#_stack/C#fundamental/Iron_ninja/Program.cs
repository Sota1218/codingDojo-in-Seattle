using System.Runtime.CompilerServices;
using System;
using System.Collections.Generic;

namespace Hungry_ninja
{
    class Program
    {
        static void Main(string[] args)
        {
            Buffet boy = new Buffet();
            SweetTooth girl = new SweetTooth();
            SpiceHound guy = new SpiceHound();
            girl.Consume(boy.Serve());
            guy.Consume(boy.Serve());
            girl.Consume(boy.Serve());
            guy.Consume(boy.Serve());
            girl.Consume(boy.Serve());
            guy.Consume(boy.Serve());
            girl.Consume(boy.Serve());
            guy.Consume(boy.Serve());
            girl.Consume(boy.Serve());
            guy.Consume(boy.Serve());
            girl.Consume(boy.Serve());
            guy.Consume(boy.Serve());
            guy.Consume(boy.Serve());
            guy.Consume(boy.Serve());
            guy.Consume(boy.Serve());
            guy.Consume(boy.Serve());
            int count_consume = 0;

            foreach (var i in boy.Menu)
            {
                Console.WriteLine(i.Name);
                count_consume += 1;

            }
            Console.WriteLine(count_consume);


        }
    }
}