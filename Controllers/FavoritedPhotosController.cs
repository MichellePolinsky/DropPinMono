using System.Collections.Generic;
using System.Linq;
using droppinmono;
using DropPinMono.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
    public ActionResult<FavoritedPhoto> SavePins([FromBody]FavoritedPhoto entry)
    {
      context.FavoritedPhotos.Add(entry);
      context.SaveChanges();
      return entry;
    }

    // Get Pins


    [HttpGet("{id}")]
    public ActionResult<FavoritedPhoto> GetPin(int id)
    {
      var findPin = context.FavoritedPhotos.FirstOrDefault(q => q.Id == id);
      if (findPin == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(findPin);
      }
    }

    // Get all photos

    [HttpGet]
    public ActionResult<IEnumerable<FavoritedPhoto>> GetAllPins()
    {
      var gallery = context.FavoritedPhotos.Include(i => i.Photos).OrderByDescending(p => p.Id);
      return gallery.ToList();
    }
  }
}









