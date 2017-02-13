using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mvcCore.data.Context;
using mvcCore.data.Entities;
using System.Xml.Linq;
using System.Threading;
using mvcCore.data.Repositories;
using System.Collections;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace mvcCore.website.Controllers
{
	[Route("api/[controller]")]
	public class TodoController : Controller
	{
		private readonly ITodoRepository _todoRepo;
		private readonly IUserRepository _userRepository;

		public TodoController(ITodoRepository todoRepository, IUserRepository userRepository)
		{
			_todoRepo = todoRepository;
			_userRepository = userRepository;
		}

		[HttpGet()]
		public IActionResult Get()
		{
			var users = _userRepository.GetUsersAll();
			return new ObjectResult(users);
		}

		[HttpGet("{userId}/{pageSize}/{page}")]
		public IActionResult GetTodos(int? userId, int pageSize, int page = 1)
		{
			var rangeFrom = (page - 1) * pageSize;
			var result = _todoRepo.GetByUserId(userId, rangeFrom, pageSize);
			return new ObjectResult(new { total = result.Item1, todos = result.Item2 });
		}

		[HttpPost]
		public IActionResult CreateTodo([FromBody] Todo todo)
		{
			_todoRepo.Add(todo);
			_todoRepo.Save();
			return new ObjectResult(todo);
		}


		[HttpPut("{todos}")]
		public IActionResult UpdateTodos([FromBody] IEnumerable<Todo> todos)
		{
			_todoRepo.UpdateRange(todos);
			_todoRepo.Save();
			return new ObjectResult(todos);
		}

		[HttpDelete]
		public void DeleteTodo([FromBody] int id)
		{
			_todoRepo.Remove(id);
			_todoRepo.Save();
		}

		[HttpDelete("{ids}")]
		public void DeleteTodos([FromBody] int[] ids)
		{
			_todoRepo.RemoveRange(ids);
			_todoRepo.Save();
		}
	}
}
