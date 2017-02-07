using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mvcCore.data.Entities
{
	public class Todo
	{
		public int Id { get; set; }
		public string Text { get; set; }
		public bool IsCompleted { get; set; }
		public int? UserId { get; set; }
		public virtual User Owner { get; set; }
	}
}
