using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace Time_display
{
    public class HomeController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Home()
        {
            return View("Index");
        }

    }
}