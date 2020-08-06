using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("user")]
        public IActionResult User()
        {
            User newUser = new User()
            {
                FirstName = "Sota",
                LastName = "Yoshihiro"
            };
            return View("oneUser", newUser);
        }
        [HttpGet("")]
        public IActionResult Message()
        {
            Message newContent = new Message()
            {
                Content = "jfjfieiejfjfiiejfjfieiejfjfieiejfiejfiejfiejfiejfiejfiej"
            };
            return View("Message", newContent);
        }
        [HttpGet("numbers")]
        public IActionResult Number()
        {
            int[] numbers = new int[]{
                4,3,14,235,62,2,5,23,12,2
            };
            return View("Numbers", numbers);
        }
        [HttpGet("users")]
        public IActionResult Users()
        {
            User newUser = new User()
            {
                FirstName = "Bob",
                LastName = "Belcher"
            };

            User otherUser = new User()
            {
                FirstName = "Master",
                LastName = "Chief"
            };

            User thirdUser = new User()
            {
                FirstName = "Mega",
                LastName = "Man"
            };

            List<User> users = new List<User>
            {
                newUser,
                otherUser,
                thirdUser
            };
            return View("Users", users);

        }

    }
}