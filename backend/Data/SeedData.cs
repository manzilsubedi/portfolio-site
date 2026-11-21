using PortfolioApi.Models;

namespace PortfolioApi.Data;

// Seeds an empty database with placeholder content so the site renders on
// first run. Replace it from the admin UI at /admin (or edit this file before
// your first run). Each section is only seeded when its table is empty, so
// your own edits are never overwritten.
public static class SeedData
{
    public static async Task SeedAsync(AppDbContext db)
    {
        if (!db.HeroContent.Any())
        {
            db.HeroContent.Add(new HeroContent
            {
                Eyebrow = "Your Name — Software Engineer, Your City",
                Title = "I build reliable software and enjoy solving real problems.",
                Subtitle = "A short introduction about who you are, what you work on, and what you're looking for. Edit this text from the admin dashboard.",
                TechBadges = [".NET / C#", "SQL", "React", "Cloud"],
            });
        }

        if (!db.ContactInfo.Any())
        {
            db.ContactInfo.Add(new ContactInfo
            {
                Email = "you@example.com",
                Phone = "",
                Location = "Your City, Country",
                LinkedinUrl = "https://www.linkedin.com/in/your-profile",
                GithubUrl = "https://github.com/your-username",
            });
        }

        if (!db.AboutContent.Any())
        {
            db.AboutContent.Add(new AboutContent
            {
                Paragraph = "Write a paragraph about your background, education, and the kind of work you enjoy. This content is stored in the database and can be edited from the admin dashboard.",
            });
        }

        if (!db.SkillGroups.Any())
        {
            db.SkillGroups.AddRange(
                new SkillGroup { Label = "Languages", Icon = "uil-brackets-curly", SortOrder = 1, Items = ["C#", "SQL", "JavaScript", "TypeScript"] },
                new SkillGroup { Label = "Frameworks & Tools", Icon = "uil-window", SortOrder = 2, Items = ["ASP.NET Core", "EF Core", "React", "Docker"] },
                new SkillGroup { Label = "Cloud & Data", Icon = "uil-desktop-cloud-alt", SortOrder = 3, Items = ["Azure", "CI/CD", "PostgreSQL"] },
                new SkillGroup { Label = "Practices", Icon = "uil-process", SortOrder = 4, Items = ["Agile/Scrum", "Unit Testing", "Git", "Code Review"] }
            );
        }

        if (!db.EducationEntries.Any())
        {
            db.EducationEntries.AddRange(
                new EducationEntry
                {
                    School = "Example University",
                    Degree = "MSc Computer Science",
                    Period = "2022 — 2023",
                    Details = "Key modules, dissertation topic, or achievements.",
                    SortOrder = 1,
                },
                new EducationEntry
                {
                    School = "Example College",
                    Degree = "BSc Software Engineering",
                    Period = "2018 — 2022",
                    Details = "Key modules, dissertation topic, or achievements.",
                    SortOrder = 2,
                }
            );
        }

        if (!db.Certifications.Any())
        {
            db.Certifications.AddRange(
                new Certification { Name = "Example Certification", Date = "Jan 2024", SortOrder = 1 },
                new Certification { Name = "Another Certification", Date = "Jun 2023", SortOrder = 2 }
            );
        }

        if (!db.ExperienceEntries.Any())
        {
            db.ExperienceEntries.AddRange(
                new ExperienceEntry
                {
                    Role = "Software Engineer",
                    Company = "Example Company Ltd",
                    Period = "2024 — Present",
                    Current = true,
                    Location = "Your City, Country",
                    Icon = "uil-briefcase-alt",
                    Points =
                    [
                        "Describe a responsibility or achievement in this role.",
                        "Quantify impact where you can (e.g. improved performance by 20%).",
                        "Mention the main technologies you used.",
                    ],
                    SortOrder = 1,
                },
                new ExperienceEntry
                {
                    Role = "Junior Developer",
                    Company = "Previous Company",
                    Period = "2022 — 2024",
                    Current = false,
                    Location = "Your City, Country",
                    Icon = "uil-briefcase-alt",
                    Points =
                    [
                        "Describe a responsibility or achievement in this role.",
                        "Describe another project you contributed to.",
                    ],
                    SortOrder = 2,
                }
            );
        }

        if (!db.WorkContent.Any())
        {
            db.WorkContent.Add(new WorkContent
            {
                IntroParagraph = "A selection of projects I've built or contributed to.",
            });
        }

        if (!db.Projects.Any())
        {
            db.Projects.AddRange(
                new Project
                {
                    Title = "Sample Project One",
                    Description = "A short description of the project, the problem it solves, and your role.",
                    Tags = ["Web", "Side project"],
                    Link = "https://example.com/",
                    SortOrder = 1,
                },
                new Project
                {
                    Title = "Sample Project Two",
                    Description = "A short description of the project, the problem it solves, and your role.",
                    Tags = ["API", "Open source"],
                    Link = "https://example.com/",
                    SortOrder = 2,
                }
            );
        }

        await db.SaveChangesAsync();
    }
}
