﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using droppinmono;

namespace sdgreacttemplate.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20191015154634_AddedDBContext")]
    partial class AddedDBContext
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("DropPinMono.Models.FavoritedPhoto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("PhotosId");

                    b.Property<string>("UID");

                    b.HasKey("Id");

                    b.HasIndex("PhotosId");

                    b.ToTable("FavoritedPhotos");
                });

            modelBuilder.Entity("DropPinMono.Models.Photos", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateCreated");

                    b.Property<int>("Hearts");

                    b.Property<double?>("Latitude");

                    b.Property<string>("Location");

                    b.Property<double?>("Longitude");

                    b.Property<string>("Name");

                    b.Property<bool>("Pinned");

                    b.Property<string>("Tag");

                    b.Property<string>("Url");

                    b.Property<int?>("UsersId");

                    b.HasKey("Id");

                    b.HasIndex("UsersId");

                    b.ToTable("Photo");
                });

            modelBuilder.Entity("DropPinMono.Models.Users", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<string>("PinnedPhotos");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("DropPinMono.Models.FavoritedPhoto", b =>
                {
                    b.HasOne("DropPinMono.Models.Photos", "Photos")
                        .WithMany()
                        .HasForeignKey("PhotosId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DropPinMono.Models.Photos", b =>
                {
                    b.HasOne("DropPinMono.Models.Users")
                        .WithMany("Photos")
                        .HasForeignKey("UsersId");
                });
#pragma warning restore 612, 618
        }
    }
}
