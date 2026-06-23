import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Factory, Warehouse, Truck, HardHat, Network, Users, ArrowRight, Check,
  ChevronLeft, ChevronRight, Box, Award, Clock, Layers, Briefcase, MapPin,
  Phone, Mail, Linkedin, Facebook, Instagram, Youtube, MessageCircle,
  ShieldCheck, Headphones, Handshake, IndianRupee, Wrench, ChevronDown,
} from "lucide-react";

import hero from "@/assets/ind-hero.jpg";
import iManu from "@/assets/ind-manufacturing.jpg";
import iWare from "@/assets/ind-warehousing.jpg";
import iLog from "@/assets/ind-logistics.jpg";
import iCon from "@/assets/ind-construction.jpg";
import iInf from "@/assets/ind-infrastructure.jpg";
import iEpc from "@/assets/ind-epc.jpg";
import chMfg from "@/assets/ind-challenge-mfg.jpg";
import pBubble from "@/assets/p-bubble.jpg";
import pStretch from "@/assets/p-stretch.jpg";
import pBoxes from "@/assets/p-boxes.jpg";
import pBearings from "@/assets/p-bearings.jpg";
import pPipes from "@/assets/p-pipes.jpg";
import projManufacturing from "@/assets/proj-manufacturing.jpg";
import projWarehouse from "@/assets/proj-warehouse.jpg";
import projMep from "@/assets/proj-mep.jpg";
import { BrandLogo } from "@/components/brand-logo";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — RR Enterprises" },
      { name: "description", content: "Industry-specific solutions for manufacturing, warehousing, logistics, construction, infrastructure and EPC contractors." },
      { property: "og:title", content: "Industries We Serve — RR Enterprises" },
      { property: "og:description", content: "Industry-specific solutions that drive performance across India." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { img: iManu, icon: Factory, title: "Manufacturing", desc: "Solutions for production, equipment, maintenance and operational efficiency." },
  { img: iWare, icon: Warehouse, title: "Warehousing", desc: "Smart storage, material handling and packaging solutions." },
  { img: iLog, icon: Truck, title: "Logistics", desc: "Reliable packaging and supply chain support for smooth operations." },
  { img: iCon, icon: HardHat, title: "Construction", desc: "High-quality construction materials for every build." },
  { img: iInf, icon: Network, title: "Infrastructure", desc: "End-to-end solutions for large scale infrastructure projects." },
  { img: iEpc, icon: Users, title: "EPC Contractors", desc: "Integrated supply and engineering support for EPC projects." },
];

const challenges = {
  Manufacturing: [
    "Production downtime due to equipment failure",
    "Inconsistent quality of raw materials",
    "High packaging damage during transit",
    "Inventory management inefficiencies",
    "Delayed procurements and supply disruptions",
  ],
  Warehousing: ["Space optimization", "Inventory tracking", "Material handling delays", "Damage in storage", "Workforce safety"],
  Logistics: ["Transit damage", "Delayed deliveries", "Packaging inefficiency", "Cost overruns", "Last-mile issues"],
  Construction: ["Material shortages", "Quality inconsistency", "Project delays", "Cost escalations", "Compliance issues"],
  Infrastructure: ["Large-scale sourcing", "Logistics complexity", "Quality assurance", "Timeline pressure", "Vendor management"],
  "EPC Contractors": ["Multi-vendor coordination", "Spec compliance", "On-time supply", "Budget control", "Technical support"],
};

const rrSolutions = [
  { icon: Award, text: "High-quality industrial products" },
  { icon: Truck, text: "Reliable supply chain & on-time delivery" },
  { icon: Headphones, text: "Technical support & expert guidance" },
  { icon: Wrench, text: "Custom solutions for complex needs" },
  { icon: IndianRupee, text: "Cost optimization & value engineering" },
];

const recProducts = [
  { img: pBubble, name: "Bubble Roll", tag: "Packaging Materials" },
  { img: pStretch, name: "Stretch Film", tag: "Packaging Materials" },
  { img: pBearings, name: "Bearing", tag: "Industrial Components" },
  { img: pBoxes, name: "Corrugated Boxes", tag: "Packaging Materials" },
  { img: pPipes, name: "PE Foam Roll", tag: "Packaging Materials" },
];

const stories = [
  { img: projManufacturing, title: "Manufacturing Plant", challenge: "High packaging damage causing product returns.", solution: "Implemented premium Bubble Roll & Stretch Film.", outcome: "35% reduction in packaging damage and improved customer satisfaction.", stat: "35%", statLabel: "Damage Reduction" },
  { img: projMep, title: "Logistics Company", challenge: "Inefficient packaging leading to shipment delays.", solution: "Custom packaging materials & timely supply.", outcome: "20% improvement in transit efficiency and on-time deliveries.", stat: "20%", statLabel: "Efficiency Improvement" },
  { img: projWarehouse, title: "Infrastructure Project", challenge: "Disorganized material handling and high wastage.", solution: "End-to-end material supply & inventory management.", outcome: "15% cost savings and streamlined project execution.", stat: "15%", statLabel: "Cost Savings" },
];

const stats = [
  { icon: Box, num: "500+", label: "Products" },
  { icon: Users, num: "1000+", label: "Happy Clients" },
  { icon: Factory, num: "50+", label: "Industries Served" },
  { icon: ShieldCheck, num: "25+", label: "Years of Experience" },
  { icon: Headphones, num: "24/7", label: "Support" },
];

const expertHelp = [
  { icon: Briefcase, text: "Expert Guidance" },
  { icon: Clock, text: "Fast Response" },
  { icon: IndianRupee, text: "Competitive Pricing" },
  { icon: MapPin, text: "Pan India Delivery" },
];

function IndustriesPage() {
  const [tab, setTab] = useState<keyof typeof challenges>("Manufacturing");

  return (
    <div className="bg-white text-[color:var(--navy-deep)]">
      {/* HERO */}
      <section className="relative min-h-[640px] overflow-hidden bg-[color:var(--navy-deep)] text-white">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy-deep)]/95 via-[color:var(--navy-deep)]/70 to-transparent" />
        <div className="relative z-10">
          <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <Link to="/">
              <BrandLogo />
            </Link>
            <SiteNav active="Industries" />
          </header>

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 text-sm font-semibold tracking-[0.2em] text-[color:var(--gold)]">INDUSTRIES WE SERVE</div>
              <h1 className="font-display text-5xl font-bold leading-tight md:text-6xl">
                Industry-Specific<br />Solutions That Drive<br />Performance
              </h1>
              <p className="mt-5 max-w-xl text-white/75">
                We partner with industries to solve their unique procurement, operational and infrastructure challenges with reliable and future-ready solutions.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#our-industries" className="inline-flex items-center gap-2 rounded-md bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-[color:var(--navy-deep)] hover:brightness-105">
                  Explore Industries <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* OUR INDUSTRIES */}
      <section id="our-industries" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center font-display text-3xl font-bold">OUR INDUSTRIES</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded bg-[color:var(--gold)]" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((it) => (
            <article key={it.title} className="overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm transition hover:shadow-lg">
              <div className="relative h-44 overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute left-4 top-32 grid h-12 w-12 place-items-center rounded-md bg-[color:var(--navy-deep)] text-[color:var(--gold)] shadow-md">
                  <it.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-5 pt-7">
                <h3 className="font-display text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{it.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--gold)]">View Industry <ArrowRight className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INDUSTRY CHALLENGES */}
      <section className="bg-[color:var(--secondary)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-3xl font-bold">INDUSTRY CHALLENGES</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-[color:var(--gold)]" />

          <div className="mt-10 flex flex-wrap justify-center gap-2 border-b border-black/10">
            {(Object.keys(challenges) as Array<keyof typeof challenges>).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`relative px-5 py-3 text-sm font-medium transition ${tab === k ? "text-[color:var(--navy-deep)]" : "text-[color:var(--muted-foreground)] hover:text-[color:var(--navy-deep)]"}`}
              >
                {k}
                {tab === k && <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-[color:var(--gold)]" />}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg lg:col-span-1">
              <img src={chMfg} alt={tab} loading="lazy" className="h-full max-h-80 w-full object-cover" />
            </div>
            <div className="rounded-lg bg-white p-7 shadow-sm lg:col-span-1">
              <h3 className="font-display text-lg font-bold">Key Challenges in {tab}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {challenges[tab].map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-[color:var(--gold)]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-[color:var(--navy-deep)] p-7 text-white shadow-sm lg:col-span-1">
              <div className="mb-4 inline-block rounded bg-[color:var(--gold)] px-3 py-1 text-xs font-bold uppercase text-[color:var(--navy-deep)]">RR Enterprises Solutions</div>
              <ul className="mt-2 space-y-3 text-sm">
                {rrSolutions.map((s) => (
                  <li key={s.text} className="flex items-start gap-3">
                    <s.icon className="mt-0.5 h-4 w-4 flex-none text-[color:var(--gold)]" />
                    <span>{s.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center font-display text-2xl font-bold tracking-wide">RECOMMENDED PRODUCTS FOR {tab.toUpperCase()}</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded bg-[color:var(--gold)]" />
        <div className="mt-10 flex items-center gap-3">
          <button className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white hover:bg-[color:var(--secondary)]"><ChevronLeft className="h-4 w-4" /></button>
          <div className="grid flex-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {recProducts.map((p) => (
              <article key={p.name} className="overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm">
                <img src={p.img} alt={p.name} loading="lazy" className="h-32 w-full object-cover" />
                <div className="p-4">
                  <h4 className="font-display text-sm font-bold">{p.name}</h4>
                  <p className="text-xs text-[color:var(--muted-foreground)]">{p.tag}</p>
                  <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--gold)]">View Product <ArrowRight className="h-3 w-3" /></a>
                </div>
              </article>
            ))}
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white hover:bg-[color:var(--secondary)]"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-[color:var(--secondary)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-3xl font-bold">SUCCESS STORIES</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-[color:var(--gold)]" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stories.map((s) => (
              <article key={s.title} className="relative overflow-hidden rounded-lg bg-[color:var(--navy-deep)] text-white shadow-md">
                <div className="absolute inset-0">
                  <img src={s.img} alt="" className="h-full w-full object-cover opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--navy-deep)]/95 to-[color:var(--navy-deep)]/70" />
                </div>
                <div className="relative p-6">
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <div className="mt-4 space-y-3 text-sm">
                    <div><span className="font-semibold text-[color:var(--gold)]">Challenge</span><p className="text-white/80">{s.challenge}</p></div>
                    <div><span className="font-semibold text-[color:var(--gold)]">Solution</span><p className="text-white/80">{s.solution}</p></div>
                    <div><span className="font-semibold text-[color:var(--gold)]">Outcome</span><p className="text-white/80">{s.outcome}</p></div>
                  </div>
                  <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--gold)]">Read Full Story <ArrowRight className="h-4 w-4" /></a>
                  <div className="absolute bottom-4 right-5 text-right">
                    <div className="font-display text-3xl font-bold text-[color:var(--gold)]">{s.stat}</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/70">{s.statLabel}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[color:var(--navy-deep)] py-10 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded border border-[color:var(--gold)]/40 text-[color:var(--gold)]"><s.icon className="h-6 w-6" /></div>
              <div>
                <div className="font-display text-2xl font-bold text-[color:var(--gold)]">{s.num}</div>
                <div className="text-xs uppercase tracking-wider text-white/70">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[color:var(--muted-foreground)]">{label}</label>
      <input placeholder={placeholder} className="w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-sm" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--navy-deep)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <BrandLogo className="h-16" />
          <p className="mt-4 text-xs text-white/70">Your trusted partner for industrial procurement, infrastructure solutions and end-to-end supply growth.</p>
          <div className="mt-4 flex gap-2">
            {[Linkedin, Facebook, Instagram, Youtube].map((I, i) => (
              <a key={i} href="#" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 hover:bg-[color:var(--gold)] hover:text-[color:var(--navy-deep)]"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        {[
          { h: "SOLUTIONS", items: ["Packaging Materials", "Industrial Components", "Construction Materials", "PEB Structures", "MEP Services", "Solar Solutions"] },
          { h: "INDUSTRIES", items: ["Manufacturing", "Warehousing", "Logistics", "Construction", "Infrastructure", "EPC Contractors"] },
          { h: "RESOURCES", items: ["Blogs", "Case Studies", "Whitepapers", "Downloads", "FAQs"] },
          { h: "COMPANY", items: ["About Us", "Our Team", "Careers", "News & Updates"] },
        ].map((c) => (
          <div key={c.h}>
            <h4 className="font-display text-sm font-bold text-[color:var(--gold)]">{c.h}</h4>
            <ul className="mt-3 space-y-2 text-xs text-white/70">
              {c.items.map((i) => <li key={i}><a href="#" className="hover:text-[color:var(--gold)]">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-white/60 md:flex-row">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-[color:var(--gold)]" /> 123, Industrial Area, Pune, Maharashtra, India - 411001</span>
            <span className="flex items-center gap-1.5"><Phone className="h-3 w-3 text-[color:var(--gold)]" /> +91 98765 43210</span>
            <span className="flex items-center gap-1.5"><Mail className="h-3 w-3 text-[color:var(--gold)]" /> info@rrenterprises.com</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 rounded bg-[color:var(--gold)] px-3 py-1.5 text-[color:var(--navy-deep)]"><Phone className="h-3 w-3" /> Call</button>
            <button className="flex items-center gap-1 rounded bg-green-500 px-3 py-1.5"><MessageCircle className="h-3 w-3" /> WhatsApp</button>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-4 text-center text-[10px] text-white/40">© 2024 RR Enterprises. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
