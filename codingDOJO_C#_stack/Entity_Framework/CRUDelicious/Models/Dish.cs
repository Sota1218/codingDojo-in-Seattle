using System;
using System.ComponentModel.DataAnnotations;
namespace CRUDelicious.Models {
    public class Dish {
        [Key]
        public int DishId { get; set; }

        [Required]
        [Display (Name = "Chef's name")]
        public string Chef { get; set; }

        [Required]
        [Display (Name = "Dish's name")]
        public string Name { get; set; }

        [Required]
        [Display (Name = "Tastiness")]
        public int Tastiness { get; set; }

        [Required]
        [Display (Name = "Calories")]
        public int Calories { get; set; }

        [Required]
        [Display (Name = "Description")]
        public string Description { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}