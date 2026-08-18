import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[var(--color-graphite)] text-[var(--color-stone)] pt-20 pb-10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/images/logo-white.svg"
                alt="Why Design Matters"
                className="h-16 w-auto"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Because architecture is fundamentally about the human impact of the spaces we inhabit. Why design matters, above all else.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6 text-lg">Practice</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-[var(--color-yellow)] transition-colors">About Us</Link></li>
              <li><Link href="/what-we-do" className="hover:text-[var(--color-yellow)] transition-colors">What We Do</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--color-yellow)] transition-colors">Projects</Link></li>
              <li><Link href="/sector-expertise" className="hover:text-[var(--color-yellow)] transition-colors">Sector Expertise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6 text-lg">Thinking</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/insights" className="hover:text-[var(--color-yellow)] transition-colors">Insights</Link></li>
              <li><Link href="/podcasts" className="hover:text-[var(--color-yellow)] transition-colors">Podcasts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                Shire House<br />
                Birmingham Road<br />
                Lichfield, WS14 9BW
              </li>
              <li>
                <a href="tel:01543886175" className="hover:text-[var(--color-yellow)] transition-colors">
                  01543 886175
                </a>
              </li>
              <li>
                <a href="tel:07849750978" className="hover:text-[var(--color-yellow)] transition-colors">
                  07849 750 978
                </a>
              </li>
              <li>
                <a href="mailto:hello@wdm-architects.com" className="hover:text-[var(--color-yellow)] transition-colors">
                  hello@wdm-architects.com
                </a>
              </li>
              <li className="text-xs text-[var(--color-stone)]/60 pt-1">
                Company No. 16337075 (England &amp; Wales)
              </li>
              <li className="text-xs text-[var(--color-stone)]/60">
                VAT No. 490295766
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditations */}
        <div className="border-t border-[var(--color-stone)]/20 pt-8 pb-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-stone)]/60 mb-4">
            Accreditations
          </p>
          <div className="flex flex-wrap gap-3">
            {/* Replace with RIBA Chartered Practice logo when provided by client */}
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold tracking-wider uppercase border border-[var(--color-yellow)] text-[var(--color-stone)]">
              RIBA Chartered Practice
            </span>
            {/* Replace with ARB Registered logo when provided by client */}
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold tracking-wider uppercase border border-[var(--color-yellow)] text-[var(--color-stone)]">
              ARB Registered
            </span>
          </div>
        </div>

        <div className="border-t border-[var(--color-stone)]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-80">
          <p>&copy; {new Date().getFullYear()} Why Design Matters. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
