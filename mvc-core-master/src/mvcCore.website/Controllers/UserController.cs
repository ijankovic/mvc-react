using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mvcCore.data.Repositories;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace mvcCore.website.Controllers
{
	[Route("api/[controller]")]
	public class UserController : Controller
	{
		private readonly IUserRepository _userRepository;

		public UserController(IUserRepository userRepository)
		{
			_userRepository = userRepository;
		}
		public IActionResult GetUsers()
		{
			var users = _userRepository.GetUsersAll();
			return new ObjectResult(users);
		}
		// GET: /<controller>/
		public IActionResult Index()
		{
			return View();
		}
	}
}
