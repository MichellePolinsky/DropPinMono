using System.Collections.Generic;

namespace DropPinMono.Models
{
  public class Users
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string PinnedPhotos { get; set; }

    public List<Photos> Photos { get; set; } = new List<Photos>();


  }
}