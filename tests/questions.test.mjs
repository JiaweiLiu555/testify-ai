import test from "node:test";import assert from "node:assert/strict";import { validateQuestion,similarityHash } from "../lib/questions.mjs";
const good={stable_id:"TST-X-1",exam_slug:"sat",type:"multiple_choice",prompt:"What is two plus two?",choices:[{text:"3",correct:false},{text:"4",correct:true}],explanation:"Adding two units to two units produces a total of four units.",source:{type:"original"},license:{copyright_owner:"Testify AI",commercial_use:true},status:"published",review:{decision:"approved"}};
test("approved original question passes",()=>assert.equal(validateQuestion(good).ok,true));
test("unreviewed public question is rejected",()=>assert.match(validateQuestion({...good,review:{decision:"pending"}}).errors.join(" "),/approved review/));
test("official content without permission is rejected",()=>assert.match(validateQuestion({...good,source:{type:"official"},license:{copyright_owner:"Third party",commercial_use:false}}).errors.join(" "),/commercial-use/));
test("normalized duplicates receive the same hash",()=>assert.equal(similarityHash("What is 2 + 2?"),similarityHash("WHAT is 2--2")));
