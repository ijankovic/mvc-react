using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using mvcCore.data.Entities;
using mvcCore.data.Context;

namespace mvcCore.data.Repositories
{
	public class UserRepository : IUserRepository
	{
		private TodoContext _ctx;
		public UserRepository(TodoContext ctx)
		{
			_ctx = ctx;
		}
		public IEnumerable<User> GetUsersAll()
		{
			return _ctx.Users.ToList();
		}
	}
}
