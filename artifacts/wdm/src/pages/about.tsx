import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TeamCard } from "@/components/ui/team-card";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bioExcerpt: string;
  imageSrc: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Elena Marchetti",
    role: "Principal Architect",
    bioExcerpt:
      "Elena leads the studio's design vision with over two decades of experience shaping civic and cultural spaces across Europe and North America.",
    imageSrc: "/images/team/elena-marchetti.jpg",
  },
  {
    id: "2",
    name: "James Okafor",
    role: "Design Director",
    bioExcerpt:
      "James brings a rigorous material sensibility to every project, guiding teams from concept through construction documentation.",
    imageSrc: "/images/team/james-okafor.jpg",
  },
  {
    id: "3",
    name: "Yuki Tanaka",
    role: "Senior Associate",
    bioExcerpt:
      "Yuki specialises in adaptive reuse and heritage conservation, finding new life in structures that carry the memory of place.",
    imageSrc: "/images/team/yuki-tanaka.jpg",
  },
  {
    id: "4",
    name: "Priya Sharma",
    role: "Associate Architect",
    bioExcerpt:
      "Priya focuses on sustainable systems and passive-design strategies that reduce a building's environmental footprint without compromise.",
    imageSrc: "/images/team/priya-sharma.jpg",
  },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-24">
        <SectionWrapper className="min-h-[60vh] flex items-center">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-[var(--color-graphite)]">About Us</h1>
            <p className="lead text-[var(--color-graphite)]/80">
              We believe architecture is the clearest argument that design
              matters. Every project we undertake is an opportunity to prove
              that rigour, craft, and empathy for place can produce buildings
              that change how people feel.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <h2 className="mb-12 text-[var(--color-graphite)]">The Team</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            data-testid="team-grid"
          >
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard
                key={member.id}
                imageSrc={member.imageSrc}
                name={member.name}
                role={member.role}
                bioExcerpt={member.bioExcerpt}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
