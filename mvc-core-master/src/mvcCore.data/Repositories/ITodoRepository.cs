using mvcCore.data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mvcCore.data.Repositories
{
	public interface ITodoRepository
	{
		Todo GetById(int id);
		IQueryable<Todo> GetAll();
		Tuple<int, IEnumerable<Todo>> GetByUserId(int? userId, int rangeFrom, int pageSize);
		void UpdateRange(IEnumerable<Todo> todos);
		void RemoveRange(int[] ids);
		void Add(Todo todo);
		void Remove(int id);
		void Update(Todo todo);
		void Save();
	}
}
