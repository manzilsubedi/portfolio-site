namespace PortfolioApi.Models;

// Singleton row (Id = 1) — displayed contact details. The contact form
// itself still submits through Netlify Forms; this is just the on-page info.
public class ContactInfo
{
    public int Id { get; set; }
    public required string Email { get; set; }
    public string Phone { get; set; } = "";
    public required string Location { get; set; }
    public required string LinkedinUrl { get; set; }
    public required string GithubUrl { get; set; }
}
