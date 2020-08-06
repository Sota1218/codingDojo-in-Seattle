using Microsoft.AspNetCore.Mvc;
namespace Dojo_Survey.controllers {
    public class HomeController : Controller {
        [HttpGet ("")]
        public IActionResult Home () {
            return View ("Index");
        }

        [HttpPost]
        [Route ("results")]
        public IActionResult results (string name, string loc, string lang, string comment) {

            return RedirectToAction ("Results", new { name = name, loc = loc, lang = lang, comment = comment });
        }

        [HttpGet]
        [Route ("results")]
        public IActionResult Results (string name, string loc, string lang, string comment) {
            ViewBag.name = name;
            ViewBag.loc = loc;
            ViewBag.lang = lang;
            ViewBag.comment = comment;
            return View ("results");
        }
    }
}