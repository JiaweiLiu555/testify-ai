import Link from "next/link";
import { Header } from "@/components/Header";

export default function Dashboard() {
  return <div className="app-bg"><Header /><main id="main-content" className="empty-home">
    <div className="empty-illustration" aria-hidden><span className="brand-mark"><span /></span><i /><i /><i /></div>
    <span className="section-index">YOUR TESTIFY HOME</span>
    <h1>What do you want<br />to learn?</h1>
    <p>Your home is empty until you choose an exam. We won’t invent progress, plans, or streaks for you.</p>
    <div className="empty-actions"><Link className="button button-large" href="/onboarding">Choose an exam <span>→</span></Link><Link className="button button-large button-ghost" href="/exams">Browse the catalog</Link></div>
    <div className="empty-guide"><div><b>1</b><span><strong>Choose a goal</strong><small>Select an exam or subject.</small></span></div><i /><div><b>2</b><span><strong>Set your pace</strong><small>Pick a realistic daily target.</small></span></div><i /><div><b>3</b><span><strong>Start practicing</strong><small>Your plan grows from real work.</small></span></div></div>
  </main></div>;
}
