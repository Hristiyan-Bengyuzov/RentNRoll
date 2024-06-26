﻿using RentNRoll.Data.Common.Models;
using static RentNRoll.Common.GlobalConstants;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentNRoll.Data.Models
{
	public class Car : BaseDeletableModel<int>
	{
		[Required]
		[MaxLength(CarModelNameMaxLength)]
		public string Model { get; set; } = null!;

		[ForeignKey(nameof(Brand))]
		public int BrandId { get; set; }

		[Required]
		public virtual Brand Brand { get; set; } = null!;

		[ForeignKey(nameof(Category))]
		public int CategoryId { get; set; }

		[Required]
		public virtual Category Category { get; set; } = null!;

		public int Year { get; set; }

		[Required]
		[MaxLength(CarLicensePlateMaxLength)]
		public string LicensePlate { get; set; } = null!;

		public decimal PricePerDay { get; set; }

		public bool IsAvailable { get; set; }

		[MaxLength(CarDescriptionMaxLength)]
		public string? Description { get; set; }

		public int Seats { get; set; }

        public string? ImageUrl { get; set; }

        public virtual ICollection<Rental> Rentals { get; set; } = new HashSet<Rental>();
	}
}
