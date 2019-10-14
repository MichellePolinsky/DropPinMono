using System.Linq;
using droppinmono;
using DropPinMono.Models;
using Microsoft.AspNetCore.Mvc;

namespace DropPinMono.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FavoritedPhotosController : ControllerBase
  {
    private DatabaseContext context;
    public FavoritedPhotosController(DatabaseContext _context)
    {
      this.context = _context;
    }

    // Save Users Pinned Photos


    [HttpPost]
    public ActionResult<Users> SavePins([FromBody]Users entry)
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


    }



  }
}