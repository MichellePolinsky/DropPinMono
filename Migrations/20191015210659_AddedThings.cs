using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class AddedThings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FavoritedPhotoId",
                table: "Photo",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Photo_FavoritedPhotoId",
                table: "Photo",
                column: "FavoritedPhotoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Photo_FavoritedPhotos_FavoritedPhotoId",
                table: "Photo",
                column: "FavoritedPhotoId",
                principalTable: "FavoritedPhotos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photo_FavoritedPhotos_FavoritedPhotoId",
                table: "Photo");

            migrationBuilder.DropIndex(
                name: "IX_Photo_FavoritedPhotoId",
                table: "Photo");

            migrationBuilder.DropColumn(
                name: "FavoritedPhotoId",
                table: "Photo");
        }
    }
}
