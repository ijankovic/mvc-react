using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using mvcCore.data.Entities;
using mvcCore.data.Context;

namespace mvcCore.data.Repositories
{
	public class TodoRepository : ITodoRepository
	{
		private TodoContext _ctx;

		public TodoRepository(TodoContext ctx)
		{
			_ctx = ctx;
		}

		public void Add(Todo todo)
		{
			_ctx.Todos.Add(todo);
		}

		public IQueryable<Todo> GetAll()
		{
			return _ctx.Todos;
		}

		public Todo GetById(int id)
		{
			return _ctx.Todos.SingleOrDefault(x => x.Id == id);
		}

		public void Remove(int id)
		{
			var todo = GetById(id);
			_ctx.Todos.Remove(todo);
		}

		public void RemoveRange(int[] ids)
		{
			var todos = _ctx.Todos.Where(x => ids.Contains(x.Id)).ToList();
			_ctx.Todos.RemoveRange(todos);
		}

		public void Update(Todo todo)
		{
			_ctx.Attach(todo);
			_ctx.Entry(todo).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
		}

		public void UpdateRange(IEnumerable<Todo> todos)
		{
			_ctx.AttachRange(todos);
			todos.ToList().ForEach(x => { _ctx.Entry(x).State = Microsoft.EntityFrameworkCore.EntityState.Modified; });
		}

		public void Save()
		{
			_ctx.SaveChanges();
		}

		public Tuple<int, IEnumerable<Todo>> GetByUserId(int? userId, int rangeFrom, int pageSize)
		{
			var query = _ctx.Todos.Where(x => !userId.HasValue || (x.UserId.HasValue && x.UserId == userId));
			var total = query.Count();
			var result = query.Skip(rangeFrom).Take(pageSize).ToList();
			return new Tuple<int, IEnumerable<Todo>>(total, result);
		}
	}
}
