using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using CRUDelicious.Models;
using Microsoft.AspNetCore.Mvc;

namespace CRUDelicious.Controllers
{
    public class HomeController : Controller
    {
        private MyContext dbContext;
        public HomeController(MyContext context)
        {
            dbContext = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.AllDishes = dbContext.Dishes.ToList();
            return View();
        }

        [HttpGet("new")]
        public IActionResult New()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Dish newDish)
        {
            if (ModelState.IsValid)
            {
                dbContext.Dishes.Add(newDish);
                dbContext.SaveChanges();
                return RedirectToAction("Index");
            }
            return RedirectToAction("new");
        }
    }
}