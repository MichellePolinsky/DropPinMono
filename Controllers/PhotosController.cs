using droppinmono;
using DropPinMono.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace DropPinMono.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PhotosController : ControllerBase
  {
    private DatabaseContext context;
    public PhotosController(DatabaseContext _context)

    {
      this.context = _context;
    }

    // Create a Photo

    [HttpPost]
    public ActionResult<Photos> CreatePhotos([FromBody]Photos entry)
    {
      context.Photo.Add(entry);
      context.SaveChanges();
      return entry;
    }

    // Get all photos

    [HttpGet]
    public ActionResult<IEnumerable<Photos>> GetAllPhotos()
    {
      var gallery = context.Photo.OrderByDescending(p => p.DateCreated);
      return gallery.ToList();
    }

    // Get photos by location

    // [HttpGet("{Lat}/{Long}")]
    // public ActionResult<Photos> GetPhotoLoca(double Latitude, double Longitude)
    // {
    //   var photoLoca = context.Photo.Where(p => p.Latitude );
    //   if (photoLoca == null)
    //   {
    //     return NotFound();
    //   }
    //   else
    //   {
    //     return Ok(photoLoca);
    //   }
    // }

    [HttpGet("{searchTerm}")]
    public ActionResult SearchPhotos(string searchTerm)
    {
      var photos = context.Photo.Where(p => p.Location.Contains(searchTerm));

      return Ok(photos);

    }


    // Update Hearts Count

    [HttpPatch("{id}/Hearts")]
    public ActionResult<Photos> updateHeartsCount(int id)
    {
      var photos = context.Photo.FirstOrDefault(p => p.Id == id);
      if (photos == null)
      {
        return NotFound();
      }
      else
      {
        photos.Hearts += 1;
        context.SaveChanges();
        return photos;
      }


    }
  }
}