import { readFile, writeFile, mkdir } from "node:fs/promises";
const specPath=process.argv[2];if(!specPath)throw new Error("Usage: npm run questions:generate -- generation-spec.json");const spec=JSON.parse(await readFile(specPath,"utf8"));
const job={id:`gen-${Date.now()}`,status:"queued",spec,guardrails:["Create original content only","Do not imitate or rewrite a specific official question","Include complete reasoning and distractor rationales","Label output as unreviewed draft","Never publish automatically"],created_at:new Date().toISOString()};
await mkdir("work/generation",{recursive:true});await writeFile(`work/generation/${job.id}.json`,JSON.stringify(job,null,2));console.log(`Queued ${job.id}. A configured server worker may process it; output remains draft until review.`);
