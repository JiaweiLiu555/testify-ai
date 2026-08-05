# Question pipeline to 300,000 reviewed items

The target is reached through reviewed batches, not synthetic multiplication.

1. Editors create a coverage plan by exam version, topic, skill, difficulty, type, required reasoning steps, misconception, timing, and allowed formulas.
2. Authors or AI workers create original drafts without references to individual official questions. AI output is tagged `generated`.
3. Import validates schema, answer presence, choice cardinality, explanations, asset checksums, units, source, and license. A batch is atomic and stores rollback data.
4. Exact normalized hashes block duplicates. Vector similarity sends likely near-duplicates to a reviewer; it never auto-approves.
5. Subject reviewers verify correctness, difficulty, format, ambiguity, and solutions. Editorial reviewers verify language, accessibility, and source/licensing metadata.
6. Approval requires two completed stages and zero blocking validation/copyright flags. A privileged publication transaction advances approved versions and writes an audit log.
7. Reports can flag a published item immediately. Retirement preserves attempts and version history.

A plausible coverage program is 60,000 questions/year for five years: 250 trained contributors averaging five reviewed questions per week over 48 weeks. Throughput dashboards must track first-pass acceptance, review time, duplicate rate, flag rate, and post-publication error rate—not just raw count.

No production batch should exceed 2,000 records. Use resumable import jobs, checksum every source file, retain failed-row reports, and canary-publish a small approved slice before a full batch.
