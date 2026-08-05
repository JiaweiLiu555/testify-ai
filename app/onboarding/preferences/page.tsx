import Link from "next/link";
import { Brand } from "@/components/Brand";
import { PreferencesSetup } from "@/components/PreferencesSetup";

export default async function PreferencesPage({searchParams}:{searchParams:Promise<{exams?:string}>}){
  const {exams=""}=await searchParams; const selected=exams.split(",").filter(Boolean);
  return <main id="main-content" className="onboarding-page"><header className="onboarding-header"><Brand/><span>Step 2 of 3</span><Link href="/dashboard">Save and exit</Link></header><div className="onboarding-progress step-two"><i/></div><PreferencesSetup selectedSlugs={selected}/></main>;
}
