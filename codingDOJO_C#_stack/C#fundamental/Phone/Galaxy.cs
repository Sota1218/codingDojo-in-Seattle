using System;
namespace myPhone {
    public class Galaxy : Phone, IRingable {
        public Galaxy (string versionNumber, int batteryPercentage, string carrier, string ringTone) : base (versionNumber, batteryPercentage, carrier, ringTone) { }
        public string Ring () {
            // your code here
            return $"... { RingTone } ...";
        }
        public string Unlock () {
            // your code here
            return $"Nokia { VersionNumber } unlocked with passcode";
        }
        public override void DisplayInfo () {
            Console.WriteLine ("$$$$$$$$$$$$$$$$$$$$$$$$$");
            Console.WriteLine ($"Galaxy { VersionNumber }");
            Console.WriteLine ($"Battery Percentage: { BatteryPercentage }");
            Console.WriteLine ($"Carrier: { Carrier }");
            Console.WriteLine ($"Ring Tone: { RingTone }");
            Console.WriteLine ("$$$$$$$$$$$$$$$$$$$$$$$$$");
            Console.WriteLine ("");
            // your code here            
        }
    }
}