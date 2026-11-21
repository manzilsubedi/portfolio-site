namespace PortfolioApi.Models;

// Singleton row (Id = 1) — the hero section's copy.
public class HeroContent
{
    public int Id { get; set; }
    public required string Eyebrow { get; set; }
    public required string Title { get; set; }
    public required string Subtitle { get; set; }
    public List<string> TechBadges { get; set; } = [];
}
