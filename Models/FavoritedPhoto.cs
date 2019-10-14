namespace DropPinMono.Models
{
  public class FavoritedPhoto
  {
    public int Id { get; set; }
    public string UserIdentiftierThingYouFindInFireBase { get; set; }
    public int PhotosId { get; set; }
    public Photos Photos { get; set; }
  }
}