namespace PortfolioApi.Models;

public class Project
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public List<string> Tags { get; set; } = [];
    public required string Link { get; set; }
    public int SortOrder { get; set; }
}
