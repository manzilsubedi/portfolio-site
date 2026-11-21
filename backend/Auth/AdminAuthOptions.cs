namespace PortfolioApi.Auth;

// Single hardcoded admin user — this is a personal site with one editor,
// not a multi-user system, so a full user table would be overkill.
public class AdminAuthOptions
{
    public required string Username { get; set; }
    public required string PasswordHash { get; set; }
}
