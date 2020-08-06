using FormSubmission.Models;
using Microsoft.AspNetCore.Mvc;
namespace FormSubmission.Controllers {

    public class HomeController : Controller {
        [Route ("")]
        [HttpGet]
        public IActionResult Index () {
            return View ();
        }

        [HttpPost ("Create")]
        public IActionResult Create (User newUser) {
            if (ModelState.IsValid) {
                return RedirectToAction ("Success");
            }
            return View ("Index");
        }

        [HttpGet ("Success")]
        public IActionResult Success () {
            return View ();
        }

    }
}