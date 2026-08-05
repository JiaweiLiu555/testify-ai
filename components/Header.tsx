"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "./Brand";

const nav = [["/exams", "Exams"], ["/practice", "Practice"], ["/dashboard", "Progress"], ["/alarm", "Alarm"]];
export function Header({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  return <header className={`site-header ${dark ? "header-dark" : ""}`}><Brand inverse={dark} /><nav aria-label="Main navigation">{nav.map(([href, label]) => <Link className={pathname.startsWith(href) ? "active" : ""} key={href} href={href}>{label}</Link>)}</nav><div className="header-actions"><Link className="text-link" href="/auth/sign-in">Sign in</Link><Link className="button button-small" href="/onboarding">Get started</Link></div></header>;
}
