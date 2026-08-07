# Contributing to Testify AI

Thanks for helping improve Testify AI.

## Before opening a pull request

```bash
npm ci
npm run typecheck
npm run lint
npm test
npm run questions:validate
npm run questions:deduplicate
npm run build:netlify
```

Keep pull requests focused and explain the user-facing reason for each change.

## Practice content

Question contributions must be original or carry documented permission for commercial reuse. Do not copy, closely imitate, or lightly rewrite protected official questions. Every question needs source and license metadata, a correct answer or rubric, a substantive explanation, and human review before publication.

Generated drafts must remain unpublished until automated validation, duplicate review, subject review, and editorial approval are complete. See `docs/AUTHORING_AND_REVIEW.md` and `docs/QUESTION_PIPELINE.md`.

## Privacy and safety

Do not commit credentials, student information, analytics exports, or production data. Features involving minors should use private defaults and collect the minimum necessary information.
