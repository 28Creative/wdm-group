import { useState } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Check, MapPin, Phone, Mail, Linkedin, Globe, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  projectType: string;
  sector: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  projectType: "",
  sector: "",
  message: "",
};

const PROJECT_TYPES = [
  "Please select",
  "New Build",
  "Extension or Remodel",
  "Refurbishment",
  "Feasibility Study",
  "Planning Application",
  "Other",
];

const SECTORS = [
  "Please select",
  "Education",
  "Commercial & Workplace",
  "Residential",
  "Hospitality",
  "Mixed Use",
  "Not Sure Yet",
];

const inputClass = "w-full px-4 py-3 border border-[var(--color-graphite)]/20 bg-[var(--color-white)] text-[var(--color-graphite)] placeholder-[var(--color-graphite)]/40 focus:outline-none focus:border-[var(--color-graphite)] transition-colors text-sm";
const labelClass = "block text-sm font-semibold text-[var(--color-graphite)] mb-1.5";
const errorClass = "text-xs text-red-600 mt-1";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* ── Section 1: Contained Hero (stone, not full-height) ────────── */}
        <SectionWrapper background="stone" className="pt-40 pb-16 md:pt-48 md:pb-20">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-6">
                Get In Touch
              </p>
              <h1 className="text-[var(--color-graphite)] mb-6">
                Let's start a conversation.
              </h1>
              <p className="lead text-[var(--color-graphite)]/80">
                Every project begins with a conversation. Tell us what you're working on — we'll listen carefully and let you know how we can help.
              </p>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 2: Form + Studio Details ─────────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Contact Form */}
            <FadeIn>
              {submitted ? (
                <div className="flex flex-col items-start py-12">
                  <div className="w-14 h-14 flex items-center justify-center bg-[var(--color-yellow)] mb-6">
                    <Check className="w-7 h-7 text-[var(--color-graphite)]" />
                  </div>
                  <h2 className="text-[var(--color-graphite)] mb-4">Thank you — we'll be in touch.</h2>
                  <p className="lead text-[var(--color-graphite)]/75">
                    We aim to respond to all enquiries within one working day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelClass}>Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={cn(inputClass, errors.name && "border-red-500")}
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>

                  {/* Organisation */}
                  <div>
                    <label htmlFor="organisation" className={labelClass}>Organisation <span className="font-normal text-[var(--color-graphite)]/50">(optional)</span></label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Company or organisation"
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={cn(inputClass, errors.email && "border-red-500")}
                    />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone <span className="font-normal text-[var(--color-graphite)]/50">(optional)</span></label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className={inputClass}
                    />
                  </div>

                  {/* Project Type + Sector row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className={labelClass}>Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className={cn(inputClass, "cursor-pointer")}
                      >
                        {PROJECT_TYPES.map((opt) => (
                          <option key={opt} value={opt === "Please select" ? "" : opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="sector" className={labelClass}>Sector</label>
                      <select
                        id="sector"
                        name="sector"
                        value={form.sector}
                        onChange={handleChange}
                        className={cn(inputClass, "cursor-pointer")}
                      >
                        {SECTORS.map((opt) => (
                          <option key={opt} value={opt === "Please select" ? "" : opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClass}>Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project…"
                      className={cn(inputClass, "resize-none", errors.message && "border-red-500")}
                    />
                    {errors.message && <p className={errorClass}>{errors.message}</p>}
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </FadeIn>

            {/* Right: Studio Details */}
            <FadeIn delay={100}>
              <div className="space-y-8 pt-2">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
                    Our Studio
                  </p>
                  <div className="space-y-3">
                    <p className="flex items-start gap-3 text-sm text-[var(--color-graphite)]/80">
                      <MapPin className="w-4 h-4 mt-0.5 text-[var(--color-gold)] shrink-0" />
                      Shire House, Birmingham Road, Lichfield, WS14 9BW
                    </p>
                    <p className="flex items-center gap-3 text-sm text-[var(--color-graphite)]/80">
                      <Phone className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                      01543 886175
                    </p>
                    <p className="flex items-center gap-3 text-sm text-[var(--color-graphite)]/80">
                      <Phone className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                      07849 750 978
                    </p>
                    <p className="flex items-center gap-3 text-sm text-[var(--color-graphite)]/80">
                      <Mail className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                      <span className="italic text-[var(--color-graphite)]/50">Email address to be confirmed</span>
                    </p>
                  </div>
                </div>

                <div className="border-t border-[var(--color-graphite)]/10 pt-8">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
                    Connect
                  </p>
                  <div className="space-y-3">
                    {/* Replace with individual LinkedIn URLs when provided */}
                    <a href="#" className="flex items-center gap-3 text-sm text-[var(--color-graphite)] hover:text-[var(--color-gold)] transition-colors">
                      <Linkedin className="w-4 h-4 text-[var(--color-gold)]" />
                      Connect with Martin
                    </a>
                    <a href="#" className="flex items-center gap-3 text-sm text-[var(--color-graphite)] hover:text-[var(--color-gold)] transition-colors">
                      <Linkedin className="w-4 h-4 text-[var(--color-gold)]" />
                      Connect with Simon
                    </a>
                    <a href="#" className="flex items-center gap-3 text-sm text-[var(--color-graphite)] hover:text-[var(--color-gold)] transition-colors">
                      <Linkedin className="w-4 h-4 text-[var(--color-gold)]" />
                      Connect with Parminder
                    </a>
                    <a href="#" className="flex items-center gap-3 text-sm text-[var(--color-graphite)] hover:text-[var(--color-gold)] transition-colors">
                      <Globe className="w-4 h-4 text-[var(--color-gold)]" />
                      Google Business
                    </a>
                  </div>
                </div>

                <div className="border-t border-[var(--color-graphite)]/10 pt-8">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
                    Working Hours
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-[var(--color-graphite)]/80">
                      <Clock className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                      <div>
                        <span className="font-semibold">Monday – Friday</span>
                        <span className="ml-2">9:00am – 5:30pm</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[var(--color-graphite)]/50 pl-7">
                      Saturday – Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </SectionWrapper>

        {/* ── Section 3: Map Placeholder ───────────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            {/* Replace with Google Maps embed using client-provided API key */}
            <div className="w-full aspect-[16/6] bg-[var(--color-graphite)]/10 flex items-center justify-center border border-[var(--color-graphite)]/15">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-[var(--color-graphite)]/30 mx-auto mb-3" />
                <p className="text-sm text-[var(--color-graphite)]/40 font-medium">
                  Studio location — map embed to be added.
                </p>
                <p className="text-xs text-[var(--color-graphite)]/30 mt-1">
                  Shire House, Birmingham Road, Lichfield, WS14 9BW
                </p>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 4: Alternative CTA ───────────────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-[var(--color-graphite)] mb-6">Not ready to get in touch yet?</h2>
              <p className="lead text-[var(--color-graphite)]/80 mb-10">
                Explore our work, read our insights or find out more about how we approach design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="ghost" size="lg" asChild>
                  <Link href="/projects">Explore Our Work</Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link href="/insights">Read Our Insights</Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
