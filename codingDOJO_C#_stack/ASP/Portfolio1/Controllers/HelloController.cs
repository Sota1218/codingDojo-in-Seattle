using Microsoft.AspNetCore.Mvc;
namespace First_web_Proj.Controllers //be sure to use your own project's namespace!
{
    public class HelloController : Controller //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet] //type of request
        [Route ("")] //associated route string (exclude the leading /)
        public string Index () {
            return "This is my Index!";
        }
        // Other code
        [HttpGet]
        [Route ("projects")]
        public string Projects () {
            return "These are my projects";
        }

        [HttpGet]
        [Route ("contact")]
        public string Contacts () {
            return "This is my Contact";
        }

        // [HttpGet]
        // [Route ("user/{name}/{location}/{age}")]
        // public string UserInfo (string name, string location, int age) {
        //     return $"{name}, aged {age}, is from {location}";
        // }

    }
}