using Microsoft.EntityFrameworkCore;
using PortfolioApi.Contracts;
using PortfolioApi.Data;

namespace PortfolioApi.Endpoints;

public static class PublicEndpoints
{
    public static void MapPublicEndpoints(this WebApplication app)
    {
        app.MapGet("/api/content", async (AppDbContext db) =>
        {
            var hero = await db.HeroContent.AsNoTracking().FirstAsync();
            var contact = await db.ContactInfo.AsNoTracking().FirstAsync();
            var about = await db.AboutContent.AsNoTracking().FirstAsync();
            var work = await db.WorkContent.AsNoTracking().FirstAsync();

            var skillGroups = await db.SkillGroups.AsNoTracking()
                .OrderBy(s => s.SortOrder)
                .Select(s => new SkillGroupDto(s.Label, s.Icon, s.Items))
                .ToListAsync();

            var education = await db.EducationEntries.AsNoTracking()
                .OrderBy(e => e.SortOrder)
                .Select(e => new EducationDto(e.School, e.Degree, e.Period, e.Details))
                .ToListAsync();

            var certifications = await db.Certifications.AsNoTracking()
                .OrderBy(c => c.SortOrder)
                .Select(c => new CertificationDto(c.Name, c.Date))
                .ToListAsync();

            var experience = await db.ExperienceEntries.AsNoTracking()
                .OrderBy(e => e.SortOrder)
                .Select(e => new ExperienceDto(e.Role, e.Company, e.Period, e.Current, e.Location, e.Icon, e.Points))
                .ToListAsync();

            var projects = await db.Projects.AsNoTracking()
                .OrderBy(p => p.SortOrder)
                .Select(p => new ProjectDto(p.Title, p.Description, p.Tags, p.Link))
                .ToListAsync();

            var response = new PortfolioContentResponse(
                new HeroDto(hero.Eyebrow, hero.Title, hero.Subtitle, hero.TechBadges),
                new ContactDto(contact.Email, contact.Phone, contact.Location, contact.LinkedinUrl, contact.GithubUrl),
                new AboutDto(about.Paragraph, skillGroups, education, certifications),
                experience,
                new WorkDto(work.IntroParagraph, projects)
            );

            return Results.Ok(response);
        })
        .WithName("GetPortfolioContent")
        .RequireCors("Frontend");
    }
}
