using Dojo_Survey_copy.Models;
using Microsoft.AspNetCore.Mvc;
namespace Dojo_Survey.controllers {
    public class HomeController : Controller {
        [HttpGet ("")]
        public IActionResult Home () {
            return View ("Index");
        }

        [HttpPost]
        [Route ("results")]
        public IActionResult results (User student) {
            User newUser = student;

            return View (newUser);
        }

        // [HttpGet]
        // [Route ("results")]
        // public IActionResult Results (User user) {
        //     User newUser = user;
        //     return View ("results", newUser);
        // }
    }
}