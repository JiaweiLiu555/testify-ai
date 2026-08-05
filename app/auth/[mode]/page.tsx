import { Brand } from "@/components/Brand";
import Link from "next/link";

export default async function Auth({ params }: { params: Promise<{ mode: string }> }) {
  const { mode } = await params;
  const signup = mode === "sign-up";
  const reset = mode === "reset";

  return <main id="main-content" className="entry-page">
    <header className="entry-header"><Brand /><Link href="/exams">Explore exams</Link></header>
    <section className="entry-card">
      <div className="entry-mark"><span className="brand-mark"><span /></span></div>
      <span className="section-index">{reset ? "ACCOUNT RECOVERY" : signup ? "CREATE YOUR ACCOUNT" : "WELCOME TO TESTIFY"}</span>
      <h1>{reset ? "Reset your password" : signup ? "Start from a clean slate." : "Sign in to begin."}</h1>
      <p>{reset ? "Enter your email and we’ll send a secure reset link." : signup ? "Choose what you want to learn after creating your account." : "Your exams, goals, and progress will appear only after you choose them."}</p>
      <form>
        {signup && <><label htmlFor="name">Name</label><input id="name" autoComplete="name" placeholder="Your name" /></>}
        <label htmlFor="email">Email</label><input id="email" type="email" autoComplete="email" placeholder="you@example.com" />
        {!reset && <><div className="label-row"><label htmlFor="password">Password</label>{!signup && <Link href="/auth/reset">Forgot password?</Link>}</div><input id="password" type="password" autoComplete={signup ? "new-password" : "current-password"} placeholder="••••••••" /></>}
        {reset ? <button className="button" type="button">Send reset link</button> : <Link className="button" href="/onboarding">{signup ? "Create account" : "Continue"} <span>→</span></Link>}
      </form>
      <div className="entry-divider"><span>or</span></div>
      <Link className="google-button" href="/onboarding"><span>G</span> Continue with Google</Link>
      <p className="entry-switch">{reset ? <Link href="/auth/sign-in">← Back to sign in</Link> : signup ? <>Already have an account? <Link href="/auth/sign-in">Sign in</Link></> : <>New to Testify? <Link href="/auth/sign-up">Create an account</Link></>}</p>
      {!reset && <Link className="entry-explore" href="/exams">Explore the exam catalog without an account</Link>}
    </section>
    <footer className="entry-footer"><span>© 2026 Testify AI</span><span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/help">Help</Link></span></footer>
  </main>;
}
