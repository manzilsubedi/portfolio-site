# Portfolio Template — React + .NET

**Live demo:** [msubedi.com.np](https://msubedi.com.np) (my own portfolio, built with this template)

A personal portfolio website you can make your own. The **React (Vite)** frontend
renders the site; the **ASP.NET Core (.NET 10)** backend stores all content in
**PostgreSQL** and includes a password-protected **admin dashboard** for editing
it — no code changes needed to update your hero text, experience, projects, etc.

```
backend/    ASP.NET Core API + Razor Pages admin UI (/admin) + EF Core migrations
frontend/   React + Vite single-page site
```

## Features

- Sections: Hero, About (skills, education, certifications), Experience, Work/Projects, Contact
- Admin dashboard at `/admin` (JWT login) to edit every section
- Light / dark mode
- Placeholder content is seeded on first run so the site works immediately

## Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- [Node.js 20+](https://nodejs.org/)
- PostgreSQL 14+ (local install, or Docker:
  `docker run -d --name portfolio-db -e POSTGRES_PASSWORD=CHANGE_ME -p 5432:5432 postgres:16`)

## 1. Backend setup

```bash
cd backend
cp appsettings.Development.json.example appsettings.Development.json
```

Then fill in `appsettings.Development.json` (it is gitignored — never commit it):

| Setting | What to put |
|---|---|
| `ConnectionStrings:Default` | Your PostgreSQL connection string |
| `AdminAuth:Username` | The username/email you'll log in to `/admin` with |
| `AdminAuth:PasswordHash` | Output of `dotnet run -- hash-password "your-password"` |
| `Jwt:Secret` | A random string, 32+ characters (e.g. `openssl rand -base64 48`) |
| `Cors:AllowedOrigins` | URLs allowed to call the API (your frontend) |

Prefer not to keep secrets in a file? Use [user-secrets](https://learn.microsoft.com/aspnet/core/security/app-secrets)
locally or environment variables in production, e.g.
`ConnectionStrings__Default`, `AdminAuth__Username`, `AdminAuth__PasswordHash`, `Jwt__Secret`,
`Cors__AllowedOrigins__0`.

Run it:

```bash
dotnet run
```

Migrations are applied and placeholder content is seeded automatically on startup.
The API runs at `http://localhost:5238` (Swagger UI at the root in Development).
Log in at `http://localhost:5238/admin/login` to replace the placeholder content.

## 2. Frontend setup

```bash
cd frontend
cp .env.local.example .env.local   # set VITE_API_URL to your backend URL
npm install
npm run dev
```

Open `http://localhost:5173`.

### Personalise

- **Content** (text, jobs, projects, links): edit in the admin dashboard.
- **Name, logo text, avatar**: `frontend/src/siteConfig.js` or the `VITE_SITE_*` variables in `.env.local`.
- **Avatar image**: replace `frontend/src/assets/avatar-placeholder.svg` or set `VITE_AVATAR_URL`.
- **Browser tab title / favicon**: `frontend/index.html`, `frontend/public/favicon.svg`.
- **Colours**: CSS variables in `frontend/src/index.css`.

### Contact form

The contact form is wired for [Netlify Forms](https://docs.netlify.com/forms/setup/)
(submissions appear in your Netlify dashboard). If you host elsewhere, change
`handleSubmit` in `frontend/src/components/contact.jsx` to post to your own
endpoint or a service like Formspree.

## Deploying

- **Frontend**: any static host (Netlify, Vercel, GitHub Pages, Azure Static Web Apps).
  Build with `npm run build` and set `VITE_API_URL` in the host's environment settings.
- **Backend**: any host that runs .NET (Azure App Service, a VPS, a container).
  Set the secrets as environment variables and add your frontend URL to `Cors:AllowedOrigins`.

## Security checklist before you push

- `appsettings.Development.json`, `.env.local` and `publish/` are gitignored — keep it that way.
- Never put real passwords, connection strings or JWT secrets in `appsettings.json`.
- Use a long random `Jwt:Secret` and a strong admin password in production.

## License

[MIT](LICENSE)
