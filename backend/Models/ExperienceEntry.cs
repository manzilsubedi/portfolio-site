namespace PortfolioApi.Models;

public class ExperienceEntry
{
    public int Id { get; set; }
    public required string Role { get; set; }
    public required string Company { get; set; }
    public required string Period { get; set; }
    public bool Current { get; set; }
    public required string Location { get; set; }
    public required string Icon { get; set; }
    public List<string> Points { get; set; } = [];
    public int SortOrder { get; set; }
}
