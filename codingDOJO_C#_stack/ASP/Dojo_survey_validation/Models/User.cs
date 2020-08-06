using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models
{

    public class User
    {
        [Required]
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters")]
        [Display(Name = "Your Name")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Dojo Location")]
        public string Loc { get; set; }

        [Required]
        [Display(Name = "Favorite Language")]
        public string Lang { get; set; }

        [MinLength(20, ErrorMessage = "Comment must be at least 20 characters if provided")]
        public string Comment { get; set; }
    }
}