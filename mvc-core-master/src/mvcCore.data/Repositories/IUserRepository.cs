using mvcCore.data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mvcCore.data.Repositories
{
	public interface IUserRepository
	{
		IEnumerable<User> GetUsersAll();
	}
}
