using Microsoft.EntityFrameworkCore;
using PortfolioApi.Contracts;
using PortfolioApi.Data;
using PortfolioApi.Models;

namespace PortfolioApi.Endpoints;

public static class AdminEndpoints
{
    public static void MapAdminEndpoints(this WebApplication app)
    {
        var admin = app.MapGroup("/api/admin").RequireAuthorization().RequireCors("Frontend");

        MapHero(admin);
        MapContact(admin);
        MapAboutParagraph(admin);
        MapWorkIntro(admin);
        MapSkillGroups(admin);
        MapEducation(admin);
        MapCertifications(admin);
        MapExperience(admin);
        MapProjects(admin);
    }

    private static void MapHero(RouteGroupBuilder admin)
    {
        admin.MapGet("/hero", async (AppDbContext db) =>
            Results.Ok(await db.HeroContent.AsNoTracking().FirstAsync()));

        admin.MapPut("/hero", async (HeroRequest request, AppDbContext db) =>
        {
            var hero = await db.HeroContent.FirstAsync();
            hero.Eyebrow = request.Eyebrow;
            hero.Title = request.Title;
            hero.Subtitle = request.Subtitle;
            hero.TechBadges = request.TechBadges;
            await db.SaveChangesAsync();
            return Results.Ok(hero);
        });
    }

    private static void MapContact(RouteGroupBuilder admin)
    {
        admin.MapGet("/contact", async (AppDbContext db) =>
            Results.Ok(await db.ContactInfo.AsNoTracking().FirstAsync()));

        admin.MapPut("/contact", async (ContactRequest request, AppDbContext db) =>
        {
            var contact = await db.ContactInfo.FirstAsync();
            contact.Email = request.Email;
            contact.Phone = request.Phone;
            contact.Location = request.Location;
            contact.LinkedinUrl = request.LinkedinUrl;
            contact.GithubUrl = request.GithubUrl;
            await db.SaveChangesAsync();
            return Results.Ok(contact);
        });
    }

    private static void MapAboutParagraph(RouteGroupBuilder admin)
    {
        admin.MapGet("/about-paragraph", async (AppDbContext db) =>
            Results.Ok(await db.AboutContent.AsNoTracking().FirstAsync()));

        admin.MapPut("/about-paragraph", async (AboutParagraphRequest request, AppDbContext db) =>
        {
            var about = await db.AboutContent.FirstAsync();
            about.Paragraph = request.Paragraph;
            await db.SaveChangesAsync();
            return Results.Ok(about);
        });
    }

    private static void MapWorkIntro(RouteGroupBuilder admin)
    {
        admin.MapGet("/work-intro", async (AppDbContext db) =>
            Results.Ok(await db.WorkContent.AsNoTracking().FirstAsync()));

        admin.MapPut("/work-intro", async (WorkIntroRequest request, AppDbContext db) =>
        {
            var work = await db.WorkContent.FirstAsync();
            work.IntroParagraph = request.IntroParagraph;
            await db.SaveChangesAsync();
            return Results.Ok(work);
        });
    }

    private static void MapSkillGroups(RouteGroupBuilder admin)
    {
        admin.MapGet("/skill-groups", async (AppDbContext db) =>
            Results.Ok(await db.SkillGroups.AsNoTracking().OrderBy(s => s.SortOrder)
                .Select(s => new AdminSkillGroupDto(s.Id, s.Label, s.Icon, s.SortOrder, s.Items))
                .ToListAsync()));

        admin.MapPost("/skill-groups", async (SkillGroupRequest request, AppDbContext db) =>
        {
            var group = new SkillGroup { Label = request.Label, Icon = request.Icon, SortOrder = request.SortOrder, Items = request.Items };
            db.SkillGroups.Add(group);
            await db.SaveChangesAsync();
            return Results.Ok(new AdminSkillGroupDto(group.Id, group.Label, group.Icon, group.SortOrder, group.Items));
        });

        admin.MapPut("/skill-groups/{id:int}", async (int id, SkillGroupRequest request, AppDbContext db) =>
        {
            var group = await db.SkillGroups.FindAsync(id);
            if (group is null) return Results.NotFound();

            group.Label = request.Label;
            group.Icon = request.Icon;
            group.SortOrder = request.SortOrder;
            group.Items = request.Items;
            await db.SaveChangesAsync();
            return Results.Ok(new AdminSkillGroupDto(group.Id, group.Label, group.Icon, group.SortOrder, group.Items));
        });

        admin.MapDelete("/skill-groups/{id:int}", async (int id, AppDbContext db) =>
        {
            var group = await db.SkillGroups.FindAsync(id);
            if (group is null) return Results.NotFound();
            db.SkillGroups.Remove(group);
            await db.SaveChangesAsync();
            return Results.NoContent();
        });
    }

    private static void MapEducation(RouteGroupBuilder admin)
    {
        admin.MapGet("/education", async (AppDbContext db) =>
            Results.Ok(await db.EducationEntries.AsNoTracking().OrderBy(e => e.SortOrder)
                .Select(e => new AdminEducationDto(e.Id, e.School, e.Degree, e.Period, e.Details, e.SortOrder))
                .ToListAsync()));

        admin.MapPost("/education", async (EducationRequest request, AppDbContext db) =>
        {
            var entry = new EducationEntry { School = request.School, Degree = request.Degree, Period = request.Period, Details = request.Details, SortOrder = request.SortOrder };
            db.EducationEntries.Add(entry);
            await db.SaveChangesAsync();
            return Results.Ok(new AdminEducationDto(entry.Id, entry.School, entry.Degree, entry.Period, entry.Details, entry.SortOrder));
        });

        admin.MapPut("/education/{id:int}", async (int id, EducationRequest request, AppDbContext db) =>
        {
            var entry = await db.EducationEntries.FindAsync(id);
            if (entry is null) return Results.NotFound();

            entry.School = request.School;
            entry.Degree = request.Degree;
            entry.Period = request.Period;
            entry.Details = request.Details;
            entry.SortOrder = request.SortOrder;
            await db.SaveChangesAsync();
            return Results.Ok(new AdminEducationDto(entry.Id, entry.School, entry.Degree, entry.Period, entry.Details, entry.SortOrder));
        });

        admin.MapDelete("/education/{id:int}", async (int id, AppDbContext db) =>
        {
            var entry = await db.EducationEntries.FindAsync(id);
            if (entry is null) return Results.NotFound();
            db.EducationEntries.Remove(entry);
            await db.SaveChangesAsync();
            return Results.NoContent();
        });
    }

    private static void MapCertifications(RouteGroupBuilder admin)
    {
        admin.MapGet("/certifications", async (AppDbContext db) =>
            Results.Ok(await db.Certifications.AsNoTracking().OrderBy(c => c.SortOrder)
                .Select(c => new AdminCertificationDto(c.Id, c.Name, c.Date, c.SortOrder))
                .ToListAsync()));

        admin.MapPost("/certifications", async (CertificationRequest request, AppDbContext db) =>
        {
            var cert = new Certification { Name = request.Name, Date = request.Date, SortOrder = request.SortOrder };
            db.Certifications.Add(cert);
            await db.SaveChangesAsync();
            return Results.Ok(new AdminCertificationDto(cert.Id, cert.Name, cert.Date, cert.SortOrder));
        });

        admin.MapPut("/certifications/{id:int}", async (int id, CertificationRequest request, AppDbContext db) =>
        {
            var cert = await db.Certifications.FindAsync(id);
            if (cert is null) return Results.NotFound();

            cert.Name = request.Name;
            cert.Date = request.Date;
            cert.SortOrder = request.SortOrder;
            await db.SaveChangesAsync();
            return Results.Ok(new AdminCertificationDto(cert.Id, cert.Name, cert.Date, cert.SortOrder));
        });

        admin.MapDelete("/certifications/{id:int}", async (int id, AppDbContext db) =>
        {
            var cert = await db.Certifications.FindAsync(id);
            if (cert is null) return Results.NotFound();
            db.Certifications.Remove(cert);
            await db.SaveChangesAsync();
            return Results.NoContent();
        });
    }

    private static void MapExperience(RouteGroupBuilder admin)
    {
        admin.MapGet("/experience", async (AppDbContext db) =>
            Results.Ok(await db.ExperienceEntries.AsNoTracking().OrderBy(e => e.SortOrder)
                .Select(e => new AdminExperienceDto(e.Id, e.Role, e.Company, e.Period, e.Current, e.Location, e.Icon, e.Points, e.SortOrder))
                .ToListAsync()));

        admin.MapPost("/experience", async (ExperienceRequest request, AppDbContext db) =>
        {
            var entry = new ExperienceEntry
            {
                Role = request.Role,
                Company = request.Company,
                Period = request.Period,
                Current = request.Current,
                Location = request.Location,
                Icon = request.Icon,
                Points = request.Points,
                SortOrder = request.SortOrder,
            };
            db.ExperienceEntries.Add(entry);
            await db.SaveChangesAsync();
            return Results.Ok(new AdminExperienceDto(entry.Id, entry.Role, entry.Company, entry.Period, entry.Current, entry.Location, entry.Icon, entry.Points, entry.SortOrder));
        });

        admin.MapPut("/experience/{id:int}", async (int id, ExperienceRequest request, AppDbContext db) =>
        {
            var entry = await db.ExperienceEntries.FindAsync(id);
            if (entry is null) return Results.NotFound();

            entry.Role = request.Role;
            entry.Company = request.Company;
            entry.Period = request.Period;
            entry.Current = request.Current;
            entry.Location = request.Location;
            entry.Icon = request.Icon;
            entry.Points = request.Points;
            entry.SortOrder = request.SortOrder;
            await db.SaveChangesAsync();
            return Results.Ok(new AdminExperienceDto(entry.Id, entry.Role, entry.Company, entry.Period, entry.Current, entry.Location, entry.Icon, entry.Points, entry.SortOrder));
        });

        admin.MapDelete("/experience/{id:int}", async (int id, AppDbContext db) =>
        {
            var entry = await db.ExperienceEntries.FindAsync(id);
            if (entry is null) return Results.NotFound();
            db.ExperienceEntries.Remove(entry);
            await db.SaveChangesAsync();
            return Results.NoContent();
        });
    }

    private static void MapProjects(RouteGroupBuilder admin)
    {
        admin.MapGet("/projects", async (AppDbContext db) =>
            Results.Ok(await db.Projects.AsNoTracking().OrderBy(p => p.SortOrder)
                .Select(p => new AdminProjectDto(p.Id, p.Title, p.Description, p.Tags, p.Link, p.SortOrder))
                .ToListAsync()));

        admin.MapPost("/projects", async (ProjectRequest request, AppDbContext db) =>
        {
            var project = new Project { Title = request.Title, Description = request.Description, Tags = request.Tags, Link = request.Link, SortOrder = request.SortOrder };
            db.Projects.Add(project);
            await db.SaveChangesAsync();
            return Results.Ok(new AdminProjectDto(project.Id, project.Title, project.Description, project.Tags, project.Link, project.SortOrder));
        });

        admin.MapPut("/projects/{id:int}", async (int id, ProjectRequest request, AppDbContext db) =>
        {
            var project = await db.Projects.FindAsync(id);
            if (project is null) return Results.NotFound();

            project.Title = request.Title;
            project.Description = request.Description;
            project.Tags = request.Tags;
            project.Link = request.Link;
            project.SortOrder = request.SortOrder;
            await db.SaveChangesAsync();
            return Results.Ok(new AdminProjectDto(project.Id, project.Title, project.Description, project.Tags, project.Link, project.SortOrder));
        });

        admin.MapDelete("/projects/{id:int}", async (int id, AppDbContext db) =>
        {
            var project = await db.Projects.FindAsync(id);
            if (project is null) return Results.NotFound();
            db.Projects.Remove(project);
            await db.SaveChangesAsync();
            return Results.NoContent();
        });
    }
}
