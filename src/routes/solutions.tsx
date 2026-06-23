import { createFileRoute } from "@tanstack/react-router";
import {
  Package, Settings, Building2, Wrench, Sun, Factory, Warehouse, Truck,
  HardHat, Network, Users, Award, ClipboardList, Headphones, Check, X,
  ArrowRight, Box, Handshake, Phone, Mail, Globe, Linkedin, Facebook,
  Instagram, Youtube, MessageCircle, MapPin, FileText, ShieldCheck,
  Search, ClipboardCheck, PackageCheck, Layers,
} from "lucide-react";

import hero from "@/assets/hero-warehouse.jpg";
import solPackaging from "@/assets/sol-packaging.jpg";
import solComponents from "@/assets/sol-components.jpg";
import solConstruction from "@/assets/sol-construction.jpg";
import solPeb from "@/assets/sol-peb.jpg";
import solMep from "@/assets/sol-mep.jpg";
import solSolar from "@/assets/sol-solar.jpg";
import pBubble from "@/assets/p-bubble.jpg";
import pBearings from "@/assets/p-bearings.jpg";
import pBoxes from "@/assets/p-boxes.jpg";
import pPipes from "@/assets/p-pipes.jpg";
import projManufacturing from "@/assets/proj-manufacturing.jpg";
import projWarehouse from "@/assets/proj-warehouse.jpg";
import projSolar from "@/assets/proj-solar.jpg";
import { BrandLogo } from "@/components/brand-logo";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — RR Enterprises" },
      { name: "description", content: "Industrial solutions that drive business growth — packaging, components, construction, PEB, MEP and solar." },
      { property: "og:title", content: "Industrial Solutions — RR Enterprises" },
      { property: "og:description", content: "End-to-end procurement, infrastructure and engineering solutions for modern industries." },
    ],
  }),
  component: SolutionsPage,
});

const heroSolutions = [
  { icon: Package, label: "Packaging Materials" },
  { icon: Settings, label: "Industrial Components" },
  { icon: Building2, label: "Construction Materials" },
  { icon: Layers, label: "PEB Structures" },
  { icon: Wrench, label: "MEP Services" },
  { icon: Sun, label: "Solar Solutions" },
];

const solutions = [
  { img: solPackaging, icon: Package, title: "Packaging Materials", desc: "High-quality packaging solutions that ensure safety and durability." },
  { img: solComponents, icon: Settings, title: "Industrial Components", desc: "Wide range of components and consumables for industrial operations." },
  { img: solConstruction, icon: Building2, title: "Construction Materials", desc: "Reliable construction materials for stronger and safer infrastructure." },
  { img: solPeb, icon: Layers, title: "PEB Structures", desc: "Pre-engineered buildings for factories, warehouses and industrial sheds." },
  { img: solMep, icon: Wrench, title: "MEP Services", desc: "Mechanical, Electrical & Plumbing services for industrial projects." },
  { img: solSolar, icon: Sun, title: "Solar Solutions", desc: "Efficient solar solutions for sustainable energy and cost savings." },
];

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Warehouse, label: "Warehousing" },
  { icon: Truck, label: "Logistics" },
  { icon: HardHat, label: "Construction" },
  { icon: Network, label: "Infrastructure" },
  { icon: Users, label: "EPC Contractors" },
];

const process = [
  { icon: ClipboardList, title: "Requirement", desc: "Understanding your needs" },
  { icon: MessageCircle, title: "Consultation", desc: "Expert analysis & recommendation" },
  { icon: Box, title: "Procurement", desc: "Sourcing from trusted manufacturers" },
  { icon: ShieldCheck, title: "Quality Check", desc: "Multi-level quality assurance" },
  { icon: Truck, title: "Logistics", desc: "Safe & timely delivery" },
  { icon: MapPin, title: "Delivery", desc: "On-site delivery across India" },
  { icon: Headphones, title: "Support", desc: "Post-delivery support" },
];

const cases = [
  { img: projManufacturing, title: "Manufacturing Plant", location: "Maharashtra", challenge: "High packaging damage and procurement delays", solution: "Custom packaging + inventory management system", outcome: "30% reduction in transit loss" },
  { img: projWarehouse, title: "Logistics Warehouse", location: "Gujarat", challenge: "High operational cost and inefficient material handling", solution: "Optimized packaging + industrial components", outcome: "25% improvement in operational efficiency" },
  { img: projSolar, title: "Solar Project", location: "Rajasthan", challenge: "Need reliable solar EPC partner for large project", solution: "End-to-end solar solution with quality assurance", outcome: "40% energy cost saved" },
];

function GoldBtn({ children, outline = false }: { children: React.ReactNode; outline?: boolean }) {
  if (outline) {
    return (
      <button className="inline-flex items-center gap-2 rounded-md border border-white/80 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
        {children} <ArrowRight className="h-4 w-4" />
      </button>
    );
  }
  return (
    <button className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-sm transition hover:bg-gold-soft">
      {children} <ArrowRight className="h-4 w-4" />
    </button>
  );
}

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <header className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/40" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <BrandLogo />
          <SiteNav active="Solutions" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pt-8 pb-20 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] text-gold">OUR SOLUTIONS</div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Industrial Solutions<br />That Drive <span className="text-gold">Business Growth</span>
            </h1>
            <p className="mt-5 max-w-md text-sm text-white/80">
              End-to-end procurement, infrastructure and engineering solutions for modern industries.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GoldBtn outline>Explore Solutions</GoldBtn>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {[
                { icon: Box, n: "500+", l: "Products" },
                { icon: Building2, n: "100+", l: "Projects Delivered" },
                { icon: Handshake, n: "50+", l: "Supply Partners" },
                { icon: MapPin, n: "Pan India", l: "Service Network" },
                { icon: Headphones, n: "24/7", l: "Support" },
              ].map((s) => (
                <div key={s.l} className="flex items-center gap-3">
                  <s.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                  <div>
                    <div className="font-display text-lg font-bold">{s.n}</div>
                    <div className="text-[11px] text-white/70">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* solutions list with connector */}
          <div className="relative hidden lg:block">
            <div className="space-y-3">
              {heroSolutions.map((s) => (
                <div key={s.label} className="flex items-center gap-3 rounded-md bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-gold/50 text-gold">
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-white/90">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* OUR SOLUTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center font-display text-2xl font-bold tracking-wide text-navy">OUR SOLUTIONS</h2>
        <div className="mx-auto mt-2 h-0.5 w-16 bg-gold" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border transition hover:shadow-md">
              <img src={s.img} alt={s.title} loading="lazy" className="h-40 w-full object-cover" />
              <div className="relative p-5">
                <div className="absolute -top-7 left-5 flex h-12 w-12 items-center justify-center rounded-md bg-navy text-gold shadow-md">
                  <s.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div className="pl-16">
                  <h3 className="font-display text-base font-bold text-navy">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  <a className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline">View Solution <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INDUSTRY APPLICATIONS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-center font-display text-2xl font-bold tracking-wide text-navy">INDUSTRY APPLICATIONS</h2>
        <div className="mx-auto mt-2 h-0.5 w-16 bg-gold" />

        <div className="mt-8 grid grid-cols-3 gap-2 rounded-md bg-white p-2 shadow-sm ring-1 ring-border md:grid-cols-6">
          {industries.map((i, idx) => (
            <button key={i.label} className={`flex flex-col items-center gap-2 rounded-md px-3 py-4 text-xs font-semibold transition ${idx === 0 ? "bg-gold/10 text-navy ring-1 ring-gold" : "text-navy hover:bg-muted"}`}>
              <i.icon className="h-7 w-7 text-navy" strokeWidth={1.4} />
              {i.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 rounded-md bg-white p-5 shadow-sm ring-1 ring-border md:grid-cols-4">
          <img src={projManufacturing} alt="Manufacturing" className="h-48 w-full rounded object-cover md:h-full" />
          <div>
            <h4 className="font-display text-sm font-bold text-gold">Challenges</h4>
            <ul className="mt-2 space-y-1.5 text-sm text-navy">
              {["Procurement Delays","Quality Inconsistency","High Packaging Damage","Inventory Management"].map(x => (
                <li key={x} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gold" />{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-gold">RR Solutions</h4>
            <ul className="mt-2 space-y-1.5 text-sm text-navy">
              {["End-to-end Procurement","Quality Assured Products","Robust Packaging Solutions","Timely Delivery"].map(x => (
                <li key={x} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-gold" />{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-gold">Recommended Products</h4>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {[pBubble, pBearings, pBoxes, pPipes].map((p, i) => (
                <img key={i} src={p} alt="" className="aspect-square w-full rounded object-cover" />
              ))}
            </div>
            <button className="mt-4 inline-flex items-center gap-2 rounded-md border border-gold px-4 py-2 text-xs font-semibold text-gold hover:bg-gold hover:text-navy-deep">
              View Case Studies <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </section>

      {/* PROCUREMENT PROCESS */}
      <section className="bg-navy-deep py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-2xl font-bold tracking-wide">OUR PROCUREMENT PROCESS</h2>
          <div className="mx-auto mt-2 h-0.5 w-16 bg-gold" />
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">
            {process.map((p, i) => (
              <div key={p.title} className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-white/5">
                  <p.icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                </div>
                <h3 className="mt-3 text-sm font-bold">{p.title}</h3>
                <p className="mt-1 text-[11px] text-white/70">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="absolute right-[-50%] top-8 hidden h-px w-full border-t border-dashed border-gold/40 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <h2 className="font-display text-2xl font-bold tracking-wide text-navy">CASE STUDIES</h2>
            <div className="mx-auto mt-2 h-0.5 w-16 bg-gold" />
          </div>
          <button className="inline-flex items-center gap-2 rounded-md border border-navy px-4 py-2 text-xs font-semibold text-navy hover:bg-navy hover:text-white">
            View All Projects <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-lg">
              <img src={c.img} alt={c.title} loading="lazy" className="h-96 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/10" />
              <div className="absolute inset-0 flex flex-col p-5 text-white">
                <div>
                  <h3 className="font-display text-lg font-bold text-gold">{c.title}</h3>
                  <div className="text-xs text-white/80">{c.location}</div>
                </div>
                <div className="mt-auto space-y-3 text-xs">
                  <div><div className="font-bold text-gold">Challenge</div><div className="text-white/85">{c.challenge}</div></div>
                  <div><div className="font-bold text-gold">Solution</div><div className="text-white/85">{c.solution}</div></div>
                  <div><div className="font-bold text-gold">Outcome</div><div className="text-white/85">{c.outcome}</div></div>
                  <a className="inline-flex items-center gap-1 pt-1 font-semibold text-gold hover:underline">Read Case Study <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-deep py-12 text-white">
        <div className="absolute inset-0 opacity-20"><img src={hero} alt="" className="h-full w-full object-cover" /></div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 md:flex-row">
          <div>
            <h3 className="font-display text-2xl font-bold">Ready to Build Smarter Industrial Operations?</h3>
            <p className="mt-1 text-sm text-white/80">Let's discuss how we can support your business growth.</p>
          </div>
          <div className="flex gap-3">
            <GoldBtn outline>Talk To Our Experts</GoldBtn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a1428] py-12 text-white/80">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <BrandLogo className="h-16" />
            <p className="mt-4 max-w-xs text-xs">Your trusted partner for industrial procurement, infrastructure solutions and sustainable growth.</p>
            <div className="mt-4 flex gap-2">
              {[Linkedin, Facebook, Instagram, Youtube].map((I, i) => (
                <a key={i} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-navy-deep"><I className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          {[
            { t: "SOLUTIONS", items: ["Packaging Materials","Industrial Components","Construction Materials","PEB Structures","MEP Services","Solar Solutions"] },
            { t: "INDUSTRIES", items: ["Manufacturing","Warehousing","Logistics","Construction","Infrastructure","EPC Contractors"] },
            { t: "QUICK LINKS", items: ["About Us","Projects","Resources","Careers","Contact Us"] },
          ].map(col => (
            <div key={col.t}>
              <h4 className="mb-3 text-xs font-bold tracking-wider text-white">{col.t}</h4>
              <ul className="space-y-2 text-xs">{col.items.map(i => <li key={i}><a className="hover:text-gold">{i}</a></li>)}</ul>
            </div>
          ))}
          <div>
            <h4 className="mb-3 text-xs font-bold tracking-wider text-white">CONTACT INFO</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex gap-2"><MapPin className="h-3 w-3 text-gold" />123, Industrial Area, Pune, Maharashtra, India - 411001</li>
              <li className="flex gap-2"><Phone className="h-3 w-3 text-gold" />+91 98765 43210</li>
              <li className="flex gap-2"><Mail className="h-3 w-3 text-gold" />info@rrenterprises.com</li>
              <li className="flex gap-2"><Globe className="h-3 w-3 text-gold" />www.rrenterprises.com</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-white/10 px-6 pt-5 text-[11px] md:flex-row">
          <div>© 2024 RR Enterprises. All Rights Reserved.</div>
          <div className="flex gap-5"><a>Privacy Policy</a><a>Terms & Conditions</a></div>
        </div>
      </footer>

      <a className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
