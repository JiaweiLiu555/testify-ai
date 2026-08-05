"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, exams } from "@/data/exams";

export function Catalog() {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("All exams");
  const filtered = useMemo(() => exams.filter(e => (category === "All exams" || e.category === category) && `${e.name} ${e.organization} ${e.skills.join(" ")}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return <><div className="catalog-tools"><label className="search-input"><span aria-hidden>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} aria-label="Search exam catalog" placeholder="Search exams, organizations, or skills"/></label><select className="filter-select" aria-label="Filter by level"><option>All levels</option><option>Middle school</option><option>High school</option><option>Graduate</option></select></div><div className="catalog-layout"><aside className="filter-list" aria-label="Exam categories">{categories.map(c=><button key={c} className={c===category?"active":""} onClick={()=>setCategory(c)}>{c}</button>)}</aside><div><p className="panel-sub">{filtered.length} exams in the demonstration catalog</p><div className="catalog-grid">{filtered.map(e=><Link className="catalog-card" href={`/exams/${e.slug}`} key={e.slug}><span className="tag">{e.category}</span><h2>{e.name}</h2><p>{e.description}</p><span>{e.level} · {e.region} →</span></Link>)}</div></div></div></>;
}
