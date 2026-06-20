# AI Code Review

A modern Next.js application that demonstrates a full-stack TypeScript setup with Postgres and Drizzle ORM. The app renders a simple database-backed user list and includes a database migration workflow for local development.

## Key Features

- Next.js 16 app router with React 19
- Drizzle ORM for type-safe Postgres queries
- Database migrations managed by `drizzle-kit`
- Environment validation with `@t3-oss/env-nextjs` and `zod`
- Tailwind CSS v4 for styling

## Tech Stack

- `next` 16
- `react` 19
- `typescript` 5
- `drizzle-orm` and `drizzle-kit`
- `pg` for PostgreSQL connectivity
- `tailwindcss` v4
- `eslint` for static linting

## Prerequisites

- Node.js 20+ installed
- `pnpm` package manager recommended
- PostgreSQL database available

## Local Setup

1. Install dependencies

```bash
pnpm install
```

2. Create a `.env` file in the repository root with the required environment variables:

```env
DATABASE_URL=postgres://user:password@localhost:5432/database_name
NODE_ENV=development
```

3. Run database migrations:

```bash
pnpm db:migrate
```

4. Start the development server:

```bash
pnpm dev
```

5. Open http://localhost:3000 in your browser.

## Database

This project uses PostgreSQL as its relational database and Drizzle ORM for schema definitions and queries.

Schema file:

- `src/db/schema.ts`

Drizzle config:

- `drizzle.config.ts`

Database access is initialized in:

- `src/db/index.ts`

The sample page reads from the `users` table and renders the names and email addresses.

## Available Scripts

- `pnpm dev` — start the Next.js development server
- `pnpm build` — build the production application
- `pnpm start` — run the production server
- `pnpm lint` — run `eslint` across the codebase
- `pnpm db:generate` — generate Drizzle schema artifacts
- `pnpm db:migrate` — apply pending database migrations
- `pnpm db:studio` — open Drizzle Studio for database browsing

## Project Structure

- `src/app` — Next.js App Router pages and UI
- `src/db` — database connection, schema definitions, and migrations
- `src/env.ts` — typed environment variable validation
- `public` — static assets
- `drizzle.config.ts` — Drizzle CLI configuration

## Contribution Guidelines

To contribute:

1. Fork the repository
2. Create a feature branch
3. Install dependencies and run migrations locally
4. Add or update tests where appropriate
5. Submit a pull request with a clear summary and relevant details

When updating database schema or migrations, keep migration files in `src/db/migrations` and verify the app starts successfully after migration.

## Notes

- The current home page at `app/page.tsx` performs a server-side query for users.
- If the database query fails, the app falls back to a friendly message.

## License

This repository is currently unlicensed. Add a license file if you want to make reuse and contribution terms explicit.
