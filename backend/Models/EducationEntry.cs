namespace PortfolioApi.Models;

public class EducationEntry
{
    public int Id { get; set; }
    public required string School { get; set; }
    public required string Degree { get; set; }
    public required string Period { get; set; }
    public string Details { get; set; } = "";
    public int SortOrder { get; set; }
}
