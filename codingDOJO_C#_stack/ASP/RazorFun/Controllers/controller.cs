using Microsoft.AspNetCore.Mvc;
namespace RazorFun
{
    public class Indexcontroller : Controller
    {
        [HttpGet]
        [Route("")]

        public ViewResult Index()
        {
            return View();
        }
    }
}