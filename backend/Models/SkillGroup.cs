namespace PortfolioApi.Models;

public class SkillGroup
{
    public int Id { get; set; }
    public required string Label { get; set; }
    public required string Icon { get; set; }
    public int SortOrder { get; set; }
    public List<string> Items { get; set; } = [];
}
