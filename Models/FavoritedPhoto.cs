using System.Collections.Generic;
using DropPinMono.Models;

namespace DropPinMono.Models
{
  public class FavoritedPhoto
  {
    public int Id { get; set; }
    public string UID { get; set; }
    public int PhotosId { get; set; }
    public Photos Photos { get; set; }
    public List<Photos> Pins { get; set; } = new List<Photos>();
  }
}


