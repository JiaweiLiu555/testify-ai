# Architecture

## Runtime boundaries

The browser receives only the Supabase anonymous key. Authentication, RLS-protected user records, public published questions, and device-local PWA preferences are separated. Service-role, model, push, and signing keys exist only in server routes or background workers.

Supabase PostgreSQL is the production system of record. The schema separates stable questions from immutable versions; practice attempts point to the exact version shown. A question is public only when its status is `published`, and the public version policy exposes only `current_version_id`. That makes retirement and correction auditable without rewriting history.

## Scale path

The hot public query is `(exam_id, difficulty, published_at)` with status filtered to published. Topic and skill junctions support adaptive selection without denormalizing authoring data. Full-text and vector indexes support search and near-duplicate review. All lists use cursor pagination in production; the client never loads the complete bank.

Generation and import jobs produce staging records. Automated validation, exact and semantic duplicate checks, license checks, subject review, editorial review, and approval are separate gates. Publication is a privileged server-side transaction that records an audit event.

## Product services

- Practice selection combines mastery state, recency, prior outcomes, response time, confidence, hints, and question quality. The UI should explain the dominant selection reason.
- Alarm schedules and sessions are durable, while notification delivery is best-effort. Native wrappers can later consume the same alarm session API.
- AI tutor calls run server-side against approved question context. Generated follow-up content remains explicitly original and unreviewed until normal review completes.
- Parent/educator relationships require explicit consent records before any aggregate data is exposed; those tables are the next migration before these dashboards become live.

## Security checklist

Use RLS plus server authorization; validate every write; rate-limit auth, tutor, import, and reporting endpoints; sanitize rich text; restrict Storage MIME types and size; hash IPs in audit metadata; rotate service keys; and perform a policy test before each release. Minors receive private defaults and no targeted advertising.
