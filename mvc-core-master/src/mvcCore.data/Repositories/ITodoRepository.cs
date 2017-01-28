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
        IEnumerable<Todo> GetAll();
        void Add(Todo todo);
        void Remove(int id);
        void Update(Todo todo);
        void Save();
    }
}
