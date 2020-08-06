using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dojodachi.Models;
using Microsoft.AspNetCore.Http;

namespace Dojodachi.Controllers
{
    public class HomeController : Controller
    {
        private int? SessionFullness
        {
            get { return HttpContext.Session.GetInt32("fullness"); }
            set { HttpContext.Session.SetInt32("fullness", (int)value); }
        }
        private int? SessionHappiness
        {
            get { return HttpContext.Session.GetInt32("happiness"); }
            set { HttpContext.Session.SetInt32("happiness", (int)value); }
        }
        private int? SessionMeals
        {
            get { return HttpContext.Session.GetInt32("meals"); }
            set { HttpContext.Session.SetInt32("meals", (int)value); }
        }
        private int? SessionEnergy
        {
            get { return HttpContext.Session.GetInt32("energy"); }
            set { HttpContext.Session.SetInt32("energy", (int)value); }
        }
        private string SessionMessage
        {
            get { return HttpContext.Session.GetString("message"); }
            set { HttpContext.Session.SetString("message", value); }
        }
        private int create_random()
        {
            Random rand = new Random();
            int num = rand.Next(5, 11);
            return num;
        }
        private bool isLike()
        {
            Random rand = new Random();
            if (rand.Next(4) == 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        public IActionResult Index()
        {
            if (SessionFullness == null)
            {
                SessionFullness = 20;
            }
            if (SessionHappiness == null)
            {
                SessionHappiness = 20;
            }
            if (SessionEnergy == null)
            {
                SessionEnergy = 50;
            }
            if (SessionMeals == null)
            {
                SessionMeals = 5;
            }

            ViewBag.full = SessionFullness;
            ViewBag.happy = SessionHappiness;
            ViewBag.meals = SessionMeals;
            ViewBag.energy = SessionEnergy;
            ViewBag.message = SessionMessage;
            if (SessionEnergy >= 100 && SessionFullness >= 100 && SessionHappiness >= 100)
            {
                SessionMessage = "You won";
                ViewBag.message = SessionMessage;
                return View("Win");
            }
            else if (SessionFullness <= 0 || SessionHappiness <= 0)
            {
                SessionMessage = "You lost";
                ViewBag.message = SessionMessage;
                return View("lose");
            }
            return View();
        }
        public IActionResult Feed()
        {
            if (SessionMeals == 0)
            {
                SessionMessage = "You have no meal.";
                return RedirectToAction("Index");
            }
            else
            {
                SessionMeals -= 1;
                if (isLike())
                {
                    SessionFullness += create_random();
                    SessionMessage = "You feeded your dojodachi. Fullness +" + SessionFullness + "Meals -1";
                }
                else
                {
                    SessionMessage = "Dojodachi doesn't like it. Meals -1";
                }
                return RedirectToAction("Index");


            }
        }
        public IActionResult Play()
        {
            SessionEnergy -= 5;
            if (isLike())
            {
                SessionHappiness += create_random();
                SessionMessage = "You played with your Dojodachi. Happiness+" + SessionHappiness + " Energy -5";
            }
            else
            {
                SessionMessage = "Your Dojodachi was bored.Energy -5";
            }
            return RedirectToAction("Index");
        }
        public IActionResult Work()
        {
            Random rand = new Random();
            SessionEnergy -= 5;
            SessionMeals += rand.Next(1, 4);
            SessionMessage = "You worked with your Dojodachi. Energy -5 Meals " + SessionMeals;
            return RedirectToAction("Index");
        }
        public IActionResult Sleep()
        {
            SessionEnergy += 15;
            SessionFullness -= 5;
            SessionHappiness -= 5;
            SessionMessage = "Your Dojodachi slept. Energy +15 Fullness -5 Happiness -5";
            return RedirectToAction("Index");
        }
        public IActionResult Restart()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

    }
}
