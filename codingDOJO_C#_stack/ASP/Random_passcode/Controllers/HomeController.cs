using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Random_passcode.Models;

namespace Random_passcode.Controllers
{
    public class HomeController : Controller
    {
        private string SessionPasscode
        {
            get { return HttpContext.Session.GetString("passcode"); }
            set { HttpContext.Session.SetString("passcode", value); }
        }

        private int? SessionCount
        {
            get { return HttpContext.Session.GetInt32("count"); }
            set { HttpContext.Session.SetInt32("count", (int)value); }
        }

        public string GeneratePasscode()
        {
            string allowedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            string result = "";
            Random rInt = new Random();
            for (var i = 1; i < 15; i++)
                result += allowedCharacters[rInt.Next(allowedCharacters.Length)];
            return result;
        }

        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            if (SessionPasscode == null)
            {
                SessionPasscode = "Generate a passcode";
            }
            if (SessionCount == null)
            {
                SessionCount = 0;
            }

            ViewBag.Passcode = SessionPasscode;
            ViewBag.Count = SessionCount;
            return View();
        }

        [HttpPost("generate")]
        public IActionResult Generate()
        {
            Console.WriteLine("work");
            SessionCount++;
            SessionPasscode = GeneratePasscode();
            return RedirectToAction("Index");
        }
    }
}
