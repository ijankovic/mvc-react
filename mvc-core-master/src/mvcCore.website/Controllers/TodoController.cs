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

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace mvcCore.website.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        private readonly ITodoRepository _todoRepo;
        
        public TodoController(ITodoRepository todoRepo)
        {
            _todoRepo = todoRepo;
        }

        [HttpGet]
        public IActionResult GetTodos()
        {
            var todos = _todoRepo.GetAll();
            _todoRepo.Save();
            return new ObjectResult(todos);
        }

        [HttpPost]
        public IActionResult CreateTodo([FromBody] Todo todo)
        {
            _todoRepo.Add(todo);
            _todoRepo.Save();
            return new ObjectResult(todo);
        }

        [HttpPut]
        public IActionResult UpdateTodo([FromBody] Todo todo)
        {
            _todoRepo.Update(todo);
            _todoRepo.Save();
            return new ObjectResult(todo);
        }

        [HttpDelete]
        public void DeleteTodo([FromBody] int id)
        {
            _todoRepo.Remove(id);
            _todoRepo.Save();
        }

    }
}
