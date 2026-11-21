namespace PortfolioApi.Models;

// Singleton row (Id = 1) — the About section's intro paragraph.
// Skills, education, and certifications are their own tables below.
public class AboutContent
{
    public int Id { get; set; }
    public required string Paragraph { get; set; }
}
