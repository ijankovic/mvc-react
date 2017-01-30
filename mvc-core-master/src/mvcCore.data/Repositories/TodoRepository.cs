﻿using System;
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

        public IEnumerable<Todo> GetAll()
        {
            var todos = _ctx.Todos.ToList();
            return todos;
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

        public void Update(Todo todo)
        {
            _ctx.Attach(todo);
            _ctx.Entry(todo).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }

        public void Save()
        {
            _ctx.SaveChanges();
        }
    }
}