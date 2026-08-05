import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="Testify AI home"><span className="brand-mark"><span /></span><span>Testify <b>AI</b></span></Link>;
}
