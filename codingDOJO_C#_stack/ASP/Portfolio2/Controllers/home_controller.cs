using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
namespace RazorFun
{
    public class Homecontroller : Controller
    {
        [HttpGet]
        [Route("")]

        public IActionResult Home()
        {
            ViewBag.name = "Sota";
            return View("Home");
        }

        [HttpGet("projects")]


        public IActionResult Projects()
        {
            ViewBag.name = "Sota";
            return View("Projects");
        }
        [HttpGet]
        [Route("contact")]

        public IActionResult contact()
        {
            ViewBag.name = "Sota";
            return View("contact");
        }
    }
}