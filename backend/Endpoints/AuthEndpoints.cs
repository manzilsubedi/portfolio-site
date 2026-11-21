using Microsoft.Extensions.Options;
using PortfolioApi.Auth;
using PortfolioApi.Contracts;

namespace PortfolioApi.Endpoints;

public static class AuthEndpoints
{
    public static void MapAuthEndpoints(this WebApplication app)
    {
        app.MapPost("/api/auth/login", (LoginRequest request, IOptions<AdminAuthOptions> adminOptions, JwtTokenService jwt) =>
        {
            var admin = adminOptions.Value;

            if (request.Username != admin.Username || !PasswordHasher.Verify(request.Password, admin.PasswordHash))
            {
                return Results.Unauthorized();
            }

            var (token, expiresAt) = jwt.CreateToken(request.Username);
            return Results.Ok(new LoginResponse(token, expiresAt));
        })
        .RequireCors("Frontend");
    }
}
