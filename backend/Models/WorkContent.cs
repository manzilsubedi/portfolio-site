namespace PortfolioApi.Models;

// Singleton row (Id = 1) — the Work section's intro paragraph.
// Individual freelance projects are their own table below.
public class WorkContent
{
    public int Id { get; set; }
    public required string IntroParagraph { get; set; }
}
