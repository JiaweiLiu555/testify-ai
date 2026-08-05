import { readFile } from "node:fs/promises"; import { validateQuestion } from "../../lib/questions.mjs";
const file=process.argv[2]||new URL("../../data/seed-questions.json",import.meta.url);const questions=JSON.parse(await readFile(file,"utf8"));let failures=0;
for(const q of questions){const result=validateQuestion(q);if(!result.ok){failures++;console.error(`${q.stable_id}: ${result.errors.join("; ")}`)}}
console.log(`Validated ${questions.length} questions: ${questions.length-failures} passed, ${failures} require attention.`);process.exitCode=failures?1:0;
