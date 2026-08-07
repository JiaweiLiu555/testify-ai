# Testify AI

Production-oriented MVP for focused standardized-test and academic-competition practice. The app includes a polished public catalog, student dashboard, interactive practice, Testify Alarm setup, content review operations, PWA shell, original reviewed seed content, and a scalable Supabase schema.

Live demo: [testify-ai.netlify.app](https://testify-ai.netlify.app)

Testify AI is open source under the [MIT License](LICENSE). Contributions are welcome; please read [CONTRIBUTING.md](CONTRIBUTING.md), especially the rules for original and licensed practice content.

## Local setup

Requirements: Node.js 22.13+ and npm 10+.

```bash
cp .env.example .env.local
npm ci
npm run dev
```

Open `http://localhost:3000`. The product UI uses safe demonstration data when Supabase variables are absent.

Quality commands:

```bash
npm run typecheck
npm run lint
npm test
npm run questions:validate
npm run questions:deduplicate
npm run questions:review-report
npm run build
```

## Supabase setup

1. Create a Supabase project and save the project URL, anon key, and server-only service role key.
2. In the SQL editor, run `supabase/migrations/202608050001_core.sql`, or link the Supabase CLI and run `supabase db push`.
3. In Authentication, enable email/password, require email verification, and add local and deployed callback URLs. Optionally enable Google after configuring its OAuth credentials.
4. Create private Storage buckets named `question-assets`, `offline-sets`, and `exports`; add owner/reviewer policies before uploads are enabled.
5. Copy `.env.example` to `.env.local`. Add the public URL/anon key and keep `SUPABASE_SERVICE_ROLE_KEY` server-side only.
6. Assign reviewer/admin roles only through a server-side operation. Never allow clients to mutate `user_roles`.
7. Before launch, configure SMTP, CAPTCHA/rate limits, log retention, backups, and privacy/deletion policies.

## Netlify deployment

1. Push this repository to a private Git provider repository.
2. In Netlify, choose **Add new site → Import an existing project** and select it.
3. Netlify reads `netlify.toml`; build command is `npm run build`.
4. Add all required values from `.env.example` under **Site configuration → Environment variables**. Mark server keys secret.
5. Deploy, then add the final `https://…netlify.app` URL to Supabase Authentication redirect URLs and set `NEXT_PUBLIC_APP_URL` to it.
6. Confirm the Next.js runtime/plugin detected successfully, then run a smoke test for auth redirects, PWA install, and unpublished-question denial.

## Question operations

Input is staged—never published—by default.

```bash
npm run questions:import -- path/to/batch.json
npm run questions:generate -- path/to/generation-spec.json
npm run questions:validate -- path/to/batch.json
npm run questions:deduplicate -- path/to/batch.json
npm run questions:review-report
npm run questions:publish-approved
```

The final publish command is deliberately a dry-run until a service-role connection and signed operational approval are configured. See `docs/QUESTION_PIPELINE.md`.

## Architecture

- `app/`, `components/`, `data/`: Next-compatible product routes and accessible React UI.
- `supabase/migrations/`: normalized PostgreSQL schema, indexes, role and ownership policies.
- `scripts/questions/`: deterministic validation, deduplication, import, generation-job, review, and publication gates.
- `public/manifest.webmanifest`, `public/sw.js`: installable PWA shell and push-ready notification handlers.
- `netlify.toml`: deployment and baseline security headers.
- `.openai/hosting.json`: Sites preview/hosting capability for the current workspace; Supabase remains the intended production system of record.

This repository is an MVP foundation, not a claim that every requested product area or 300,000 reviewed questions already exists. Authentication screens and Supabase integration boundaries are present; real account writes require the external setup above.
