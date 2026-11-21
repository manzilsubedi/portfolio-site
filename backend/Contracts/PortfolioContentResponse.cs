namespace PortfolioApi.Contracts;

public record PortfolioContentResponse(
    HeroDto Hero,
    ContactDto Contact,
    AboutDto About,
    List<ExperienceDto> Experience,
    WorkDto Work
);

public record HeroDto(string Eyebrow, string Title, string Subtitle, List<string> TechBadges);

public record ContactDto(string Email, string Phone, string Location, string LinkedinUrl, string GithubUrl);

public record AboutDto(
    string Paragraph,
    List<SkillGroupDto> SkillGroups,
    List<EducationDto> Education,
    List<CertificationDto> Certifications
);

public record SkillGroupDto(string Label, string Icon, List<string> Items);

public record EducationDto(string School, string Degree, string Period, string Details);

public record CertificationDto(string Name, string Date);

public record ExperienceDto(
    string Role,
    string Company,
    string Period,
    bool Current,
    string Location,
    string Icon,
    List<string> Points
);

public record WorkDto(string IntroParagraph, List<ProjectDto> Projects);

public record ProjectDto(string Title, string Description, List<string> Tags, string Link);
