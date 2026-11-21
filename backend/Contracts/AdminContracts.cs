namespace PortfolioApi.Contracts;

// Singleton content — GET/PUT only, no id.
public record HeroRequest(string Eyebrow, string Title, string Subtitle, List<string> TechBadges);
public record ContactRequest(string Email, string Phone, string Location, string LinkedinUrl, string GithubUrl);
public record AboutParagraphRequest(string Paragraph);
public record WorkIntroRequest(string IntroParagraph);

// List entities — admin views include Id/SortOrder so the UI can edit/delete/reorder.
public record AdminSkillGroupDto(int Id, string Label, string Icon, int SortOrder, List<string> Items);
public record SkillGroupRequest(string Label, string Icon, int SortOrder, List<string> Items);

public record AdminEducationDto(int Id, string School, string Degree, string Period, string Details, int SortOrder);
public record EducationRequest(string School, string Degree, string Period, string Details, int SortOrder);

public record AdminCertificationDto(int Id, string Name, string Date, int SortOrder);
public record CertificationRequest(string Name, string Date, int SortOrder);

public record AdminExperienceDto(int Id, string Role, string Company, string Period, bool Current, string Location, string Icon, List<string> Points, int SortOrder);
public record ExperienceRequest(string Role, string Company, string Period, bool Current, string Location, string Icon, List<string> Points, int SortOrder);

public record AdminProjectDto(int Id, string Title, string Description, List<string> Tags, string Link, int SortOrder);
public record ProjectRequest(string Title, string Description, List<string> Tags, string Link, int SortOrder);
