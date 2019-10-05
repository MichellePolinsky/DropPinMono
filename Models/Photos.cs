using System;

namespace DropPinMono.Models
{
  public class Photos
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Url { get; set; }
    public string Location { get; set; }

    // public int LatLong { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public string Tag { get; set; }

    public bool Pinned { get; set; }

    public DateTime DateCreated { get; set; } = DateTime.Now;
    public int Hearts { get; set; }
  }
}