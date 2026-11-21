namespace PortfolioApi.Models;

public class Certification
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Date { get; set; }
    public int SortOrder { get; set; }
}
