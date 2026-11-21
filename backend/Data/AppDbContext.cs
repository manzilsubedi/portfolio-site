using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using PortfolioApi.Models;

namespace PortfolioApi.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<HeroContent> HeroContent => Set<HeroContent>();
    public DbSet<ContactInfo> ContactInfo => Set<ContactInfo>();
    public DbSet<AboutContent> AboutContent => Set<AboutContent>();
    public DbSet<SkillGroup> SkillGroups => Set<SkillGroup>();
    public DbSet<EducationEntry> EducationEntries => Set<EducationEntry>();
    public DbSet<Certification> Certifications => Set<Certification>();
    public DbSet<ExperienceEntry> ExperienceEntries => Set<ExperienceEntry>();
    public DbSet<WorkContent> WorkContent => Set<WorkContent>();
    public DbSet<Project> Projects => Set<Project>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // List<string> columns are stored as jsonb; EF needs a value comparer
        // so it can detect changes to the list contents, not just references.
        var stringListComparer = new ValueComparer<List<string>>(
            (a, b) => (a ?? new()).SequenceEqual(b ?? new()),
            v => v.Aggregate(0, (hash, s) => HashCode.Combine(hash, s.GetHashCode())),
            v => v.ToList());

        modelBuilder.Entity<HeroContent>()
            .Property(e => e.TechBadges)
            .HasColumnType("jsonb")
            .Metadata.SetValueComparer(stringListComparer);

        modelBuilder.Entity<SkillGroup>()
            .Property(e => e.Items)
            .HasColumnType("jsonb")
            .Metadata.SetValueComparer(stringListComparer);

        modelBuilder.Entity<ExperienceEntry>()
            .Property(e => e.Points)
            .HasColumnType("jsonb")
            .Metadata.SetValueComparer(stringListComparer);

        modelBuilder.Entity<Project>()
            .Property(e => e.Tags)
            .HasColumnType("jsonb")
            .Metadata.SetValueComparer(stringListComparer);
    }
}
