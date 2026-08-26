import { useEffect } from "react";
import { Linkedin } from "lucide-react";
import { DocumentMeta } from "@/components/layout/DocumentMeta";

export const COMING_SOON_DESCRIPTION =
  "Why Design Matters is preparing a new digital space. Our full site is launching soon.";

export const COMING_SOON_SOCIAL_LINKS = [
  {
    name: "Simon",
    href: "https://www.linkedin.com/in/simon-jesson-623b5024/",
    label: "Connect with Simon on LinkedIn",
  },
  {
    name: "Martin",
    href: "https://www.linkedin.com/in/martin-beaumont-4216a24b/",
    label: "Connect with Martin on LinkedIn",
  },
  {
    name: "Parminder",
    href: "https://www.linkedin.com/in/parminder-degan-1b3bbb16/",
    label: "Connect with Parminder on LinkedIn",
  },
  {
    name: "WDM",
    href: "https://uk.linkedin.com/company/wdm-group-ltd",
    label: "Follow WDM on LinkedIn",
  },
] as const;

function HoldingLogo() {
  return (
    <div className="flex flex-col items-center" role="img" aria-label="Why Design Matters">
      <div className="w-44" aria-hidden="true">
        <img
          src="/images/wdm-mark-charcoal.svg"
          alt=""
          className="h-auto w-full"
          loading="eager"
          decoding="async"
        />
      </div>
      <span className="-mt-0.5 font-heading text-[11px] font-semibold tracking-[-0.03em] text-[var(--color-graphite)]">
        Why Design Matters
      </span>
    </div>
  );
}

export default function ComingSoon() {
  useEffect(() => {
    let robots = document.querySelector('meta[name="robots"]');
    const originalRobots = robots?.getAttribute("content");
    let created = false;

    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
      created = true;
    }
    robots.setAttribute("content", "noindex, nofollow");

    return () => {
      if (created) {
        robots?.remove();
      } else if (robots && originalRobots) {
        robots.setAttribute("content", originalRobots);
      } else {
        robots?.removeAttribute("content");
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-stone)] text-[var(--color-graphite)]">
      <DocumentMeta title="Welcome" description={COMING_SOON_DESCRIPTION} />

      <main className="flex flex-1 flex-col items-center px-6 pb-16 pt-14 text-center sm:pt-16 md:pt-20">
        <HoldingLogo />

        <div
          className="mt-14 h-0.5 w-22 bg-[var(--color-yellow)] sm:mt-16"
          aria-hidden="true"
        />

        <div className="mt-11 max-w-[39rem] sm:mt-12">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-[var(--color-graphite)] sm:text-[2.65rem]">
            Welcome.
          </h1>
          <p className="mt-7 text-base leading-[1.55] text-[var(--color-graphite)]/85 sm:text-lg">
            We&apos;re designing this digital space with the same intent we bring to every
            project <span aria-hidden="true">—</span>{" "}
            <span className="sr-only">,</span>
            purposeful architecture, intelligent development and meaningful impact.
          </p>
          <p className="mt-6 text-base leading-[1.55] text-[var(--color-graphite)]/85 sm:text-lg">
            Our full site is launching soon. Until then, connect with us on social and
            follow the journey.
          </p>
        </div>

        <nav
          className="mt-11 grid w-full max-w-[50rem] grid-cols-1 gap-7 sm:grid-cols-4 sm:gap-6"
          aria-label="Social links"
        >
          {COMING_SOON_SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group flex items-center justify-center gap-3 text-[var(--color-graphite)] transition-colors hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)] sm:items-start"
            >
              <Linkedin
                className="mt-0.5 h-4 w-4 shrink-0 stroke-[1.8]"
                aria-hidden="true"
              />
              <span className="font-heading text-[10px] font-medium uppercase leading-[1.55] tracking-[0.15em]">
                {link.name === "WDM" ? "Follow" : "Connect with"}
                <span className="block">{link.name}</span>
              </span>
            </a>
          ))}
        </nav>
      </main>

      <footer className="px-6 pb-10 text-center text-[11px] tracking-[0.04em] text-[var(--color-graphite)]/75 sm:pb-12">
        © 2026 Why Design Matters
      </footer>
    </div>
  );
}