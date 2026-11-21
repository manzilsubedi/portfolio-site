namespace PortfolioApi.Auth;

public class JwtOptions
{
    public required string Secret { get; set; }
    public string Issuer { get; set; } = "PortfolioApi";
    public string Audience { get; set; } = "PortfolioApiAdmin";
    public int ExpiryMinutes { get; set; } = 120;
}
