"use client";
import { useState } from "react";
import Link from "next/link";
import { Brand } from "@/components/Brand";
import { exams } from "@/data/exams";

export default function Onboarding() {
  const [selected, setSelected] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const visible = exams.filter(exam => `${exam.name} ${exam.category}`.toLowerCase().includes(query.toLowerCase())).slice(0, 8);
  const toggle = (slug:string) => setSelected(current => current.includes(slug) ? current.filter(item => item !== slug) : [...current, slug]);
  return <main id="main-content" className="onboarding-page">
    <header className="onboarding-header"><Brand /><span>Step 1 of 3</span><Link href="/dashboard">Skip for now</Link></header>
    <div className="onboarding-progress"><i /></div>
    <section className="onboarding-content">
      <span className="section-index">CHOOSE YOUR FOCUS</span><h1>What do you want<br />to prepare for?</h1><p>Select one or more exams. Nothing is selected for you.</p>
      <label className="onboarding-search"><span>⌕</span><input aria-label="Search exams" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search SAT, AP Biology, AMC 10…" /></label>
      <div className="onboarding-options">{visible.map(exam => <button aria-pressed={selected.includes(exam.slug)} className={selected.includes(exam.slug)?"selected":""} onClick={()=>toggle(exam.slug)} key={exam.slug}><span className={`mini-mark ${exam.accent}`}>{exam.name.slice(0,2).toUpperCase()}</span><span><b>{exam.name}</b><small>{exam.category}</small></span><i>{selected.includes(exam.slug)?"✓":"+"}</i></button>)}</div>
      <div className="onboarding-bottom"><span>{selected.length === 0 ? "Choose at least one exam to continue" : `${selected.length} exam${selected.length>1?"s":""} selected`}</span><Link aria-disabled={selected.length===0} className={`button ${selected.length===0?"disabled":""}`} href={selected.length?`/onboarding/preferences?exams=${selected.join(",")}`:"/onboarding"}>Continue to goals <span>→</span></Link></div>
    </section>
  </main>;
}
