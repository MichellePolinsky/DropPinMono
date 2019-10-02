using System.Linq;
using droppinmono;
using DropPinMono.Models;
using Microsoft.AspNetCore.Mvc;

namespace DropPinMono.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    private DatabaseContext context;
    public UsersController(DatabaseContext _context)
    {
      this.context = _context;
    }

    // Create User


    [HttpPost]
    public ActionResult<Users> CreateUsers([FromBody]Users entry)
    {
      context.User.Add(entry);
      context.SaveChanges();
      return entry;
    }

    // Get User


    [HttpGet("{id}")]
    public ActionResult<Users> GetUser(int id)
    {
      var findUser = context.User.FirstOrDefault(q => q.Id == id);
      if (findUser == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(findUser);
      }

      // Create Users Pins- Post
      // Get User Pins- Get
      // Delete User Pins- Delete

      // Update User Hearts- Patch????
    }



  }
}