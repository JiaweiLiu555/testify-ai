"use client";
import { useState } from "react";
import Link from "next/link";
import { exams } from "@/data/exams";

export function PreferencesSetup({ selectedSlugs }: { selectedSlugs: string[] }) {
  const [level,setLevel]=useState("starting");
  const [target,setTarget]=useState(10);
  const [alarm,setAlarm]=useState(false);
  const selectedNames=selectedSlugs.map(slug=>exams.find(exam=>exam.slug===slug)?.name).filter(Boolean);
  const destination=`/dashboard?setup=complete&exams=${selectedSlugs.join(",")}&target=${target}`;
  return <section className="preferences-content">
    <span className="section-index">SET YOUR PACE</span><h1>Make the plan<br/>fit your day.</h1><p>Start small. You can change any of these choices later.</p>
    <div className="selected-summary"><span>Preparing for</span><div>{selectedNames.map(name=><b key={name}>{name}</b>)}</div><Link href="/onboarding">Change</Link></div>
    <div className="preference-group"><h2>Where are you starting?</h2><p>This helps choose an appropriate first set.</p><div className="preference-options">{[["starting","Just starting"],["familiar","Some experience"],["advanced","Advanced"]].map(([value,label])=><button className={level===value?"selected":""} onClick={()=>setLevel(value)} key={value}>{label}<span>{level===value?"✓":""}</span></button>)}</div></div>
    <div className="preference-group"><h2>Daily question goal</h2><p>A focused target, not a punishment.</p><div className="target-options">{[5,10,20,30].map(value=><button className={target===value?"selected":""} onClick={()=>setTarget(value)} key={value}><b>{value}</b><small>questions</small></button>)}</div></div>
    <div className="alarm-choice"><div><h2>Try Testify Alarm?</h2><p>Optional. Set a practice alarm after setup.</p></div><button aria-pressed={alarm} onClick={()=>setAlarm(!alarm)} className={alarm?"on":""}><i/></button></div>
    <div className="onboarding-bottom"><Link className="text-link" href="/onboarding">← Back</Link><Link className="button" href={destination}>Finish setup <span>→</span></Link></div>
  </section>;
}
