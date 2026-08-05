import { createHash } from "node:crypto";

export const allowedTypes = new Set(["multiple_choice","multiple_select","numeric","short_answer","free_response","proof","essay","coding","diagram","matching","ordering","passage_set","multi_part"]);
export const publicStatuses = new Set(["published"]);

export function normalizePrompt(prompt){return prompt.toLowerCase().replace(/\\[a-z]+/g," ").replace(/[^a-z0-9]+/g," ").trim()}
export function similarityHash(prompt){return createHash("sha256").update(normalizePrompt(prompt)).digest("hex")}
export function validateQuestion(q){
  const errors=[];
  for(const field of ["stable_id","exam_slug","type","prompt","source","license","status"]) if(!q[field]) errors.push(`Missing ${field}`);
  if(!allowedTypes.has(q.type)) errors.push(`Unsupported type: ${q.type}`);
  if(q.type==="multiple_choice"){
    if(!Array.isArray(q.choices)||q.choices.length<2) errors.push("Multiple-choice question needs at least two choices");
    const correct=(q.choices||[]).filter(c=>c.correct); if(correct.length!==1) errors.push("Single-choice question must have exactly one correct choice");
  }
  if(!q.explanation || q.explanation.length<30) errors.push("Explanation must be substantive");
  if(q.source?.type==="official" && !q.license?.commercial_use) errors.push("Official content requires explicit commercial-use permission");
  if(q.status==="published" && q.review?.decision!=="approved") errors.push("Published content requires an approved review");
  if(q.ai_generated && q.source?.type==="official") errors.push("Generated content cannot be labeled official");
  if(!q.license?.copyright_owner) errors.push("Copyright owner is required");
  return {ok:errors.length===0,errors,hash:similarityHash(q.prompt||"")};
}
