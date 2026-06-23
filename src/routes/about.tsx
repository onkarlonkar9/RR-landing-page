import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, Settings, Network, Users, Target, Eye, Award, Sparkles,
  CheckCircle2, Lightbulb, Handshake, Leaf, Quote, ChevronLeft, ChevronRight,
  Building2, Box, ClipboardList, Headphones, MapPin, Truck, Warehouse,
  HardHat, Calendar, ArrowRight, ArrowUp, Phone, Mail, Globe,
  Linkedin, Facebook, Instagram, Youtube,
} from "lucide-react";

import heroImg from "@/assets/about-hero.jpg";
import warehouseAerial from "@/assets/about-warehouse-aerial.jpg";
import directorImg from "@/assets/director-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RR Enterprises — Built on Trust. Driven by Excellence." },
      { name: "description", content: "RR Enterprises is a leading industrial procurement & infrastructure solutions company delivering quality, reliability and value across India." },
      { property: "og:title", content: "About RR Enterprises" },
      { property: "og:description", content: "Built on Trust. Driven by Excellence." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: About,
});

const nav = [
  { label: "Solutions", caret: true },
  { label: "Industries", caret: true },
  { label: "Projects" },
  { label: "Resources", caret: true },
  { label: "RFQ" },
  { label: "About Us", active: true },
  { label: "Contact" },
];

const whoWeAre = [
  { icon: ShieldCheck, title: "Quality Assured Products", desc: "Sourced from trusted global manufacturers" },
  { icon: Settings, title: "Technical Expertise", desc: "Experienced team delivering end-to-end support" },
  { icon: Network, title: "Pan India Presence", desc: "Strong logistics and distribution network" },
  { icon: Users, title: "Customer Focused", desc: "We grow when our customers grow" },
];

const coreValues = [
  { icon: Award, title: "Integrity", desc: "Honesty and transparency in everything we do" },
  { icon: Sparkles, title: "Excellence", desc: "Striving for the highest standards always" },
  { icon: CheckCircle2, title: "Reliability", desc: "Delivering on our promises, every time" },
  { icon: Lightbulb, title: "Innovation", desc: "Continuously improving and creating value" },
  { icon: Handshake, title: "Partnership", desc: "Building long-term relationships" },
  { icon: Leaf, title: "Sustainability", desc: "Committed to a better tomorrow" },
];

const journey = [
  { y: "2018", t: "Company Founded" },
  { y: "2019", t: "Packaging Division Launch" },
  { y: "2020", t: "Industrial Components Expansion" },
  { y: "2021", t: "Construction Materials Division" },
  { y: "2022", t: "PEB & MEP Services Launch" },
  { y: "2023", t: "Strengthened Pan India Network" },
  { y: "2024", t: "Solar Solutions Expansion" },
  { y: "Future", t: "Building India's Industrial Future" },
];

const whyChoose = [
  { icon: Warehouse, title: "Quality Infrastructure", desc: "State-of-the-art warehouse and storage facilities" },
  { icon: Box, title: "Strong Supply Chain", desc: "Reliable network of global and domestic partners" },
  { icon: Building2, title: "Large Inventory", desc: "Wide range of products ready for immediate supply" },
  { icon: HardHat, title: "Engineering Support", desc: "Technical experts to assist your project needs" },
  { icon: Truck, title: "Timely Delivery", desc: "On-time delivery with efficient logistics" },
  { icon: Users, title: "Customer First", desc: "Dedicated support and long-term relationships" },
];

const certs = ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "CE", "MAKE IN INDIA"];
const partners = ["TATA STEEL", "JSW", "adani", "JINDAL", "SAINT-GOBAIN"];

const stats = [
  { icon: Box, n: "500+", l: "Products" },
  { icon: ClipboardList, n: "100+", l: "Projects Completed" },
  { icon: Users, n: "50+", l: "Supply Partners" },
  { icon: Headphones, n: "24/7", l: "Customer Support" },
  { icon: Handshake, n: "Pan India", l: "Service Network" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-gold">
        <span className="font-display text-lg font-extrabold tracking-tight text-gold">RR</span>
      </div>
      <div>
        <div className={`font-display text-sm font-bold leading-tight ${light ? "text-white" : "text-navy"}`}>RR ENTERPRISES</div>
        <div className="text-[9px] leading-tight text-gold">One Partner. Multiple Solutions. Endless Possibilities.</div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <header className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
        </div>

        {/* nav */}
        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/"><Logo light /></Link>
          <nav className="hidden items-center gap-7 text-sm text-white/90 lg:flex">
            {nav.map((n) => {
              const to = n.label === "Solutions" ? "/solutions" : n.label === "Industries" ? "/industries" : n.label === "Home" ? "/" : n.label === "Contact" ? "/contact" : null;
              const cls = `transition hover:text-gold ${n.active ? "border-b-2 border-gold pb-1 text-gold" : ""}`;
              if (to) return <Link key={n.label} to={to} className={cls}>{n.label}</Link>;
              return <a key={n.label} href="#" className={cls}>{n.label}{n.caret && " ▾"}</a>;
            })}
          </nav>
          <button className="inline-flex items-center gap-2 rounded-md border-2 border-gold px-4 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-navy-deep">
            Request Quote <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-10">
          <div className="text-xs font-bold tracking-[0.25em] text-gold">ABOUT US</div>
          <h1 className="mt-5 font-display text-5xl font-bold leading-tight md:text-6xl">
            Built on Trust.<br />
            <span className="text-gold">Driven by Excellence.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm text-white/85">
            RR Enterprises is a leading industrial procurement & infrastructure solutions company delivering quality, reliability and value across India.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep hover:bg-gold-soft">
              Explore Solutions <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-white/80 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Talk To Our Experts <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={warehouseAerial} alt="Warehouse" loading="lazy" className="w-full rounded-md object-cover shadow-lg" />
          <div>
            <div className="text-xs font-bold tracking-[0.25em] text-gold">WHO WE ARE</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy">Your Trusted Industrial<br />Solutions Partner</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              RR Enterprises partners with industries and organizations to supply high-quality materials, engineered solutions and services that drive efficiency, safety and long-term value.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {whoWeAre.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold/15">
                    <f.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy">{f.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-0 overflow-hidden rounded-md bg-navy-deep md:grid-cols-2">
          <div className="p-10 text-white">
            <Target className="h-10 w-10 text-gold" strokeWidth={1.5} />
            <div className="mt-4 text-xs font-bold tracking-[0.25em] text-gold">OUR MISSION</div>
            <h3 className="mt-3 font-display text-2xl font-bold leading-snug">
              To deliver superior industrial solutions through quality, innovation and reliability.
            </h3>
            <p className="mt-4 text-sm text-white/75">
              We are committed to providing the right products, on time, with excellent service and competitive value to empower industries to achieve more.
            </p>
          </div>
          <div className="bg-white p-10">
            <Eye className="h-10 w-10 text-gold" strokeWidth={1.5} />
            <div className="mt-4 text-xs font-bold tracking-[0.25em] text-gold">OUR VISION</div>
            <h3 className="mt-3 font-display text-2xl font-bold leading-snug text-navy">
              To be the most trusted and preferred industrial solutions partner in India.
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              We envision a future where industries build, operate and grow with sustainable, efficient and innovative solutions delivered by RR Enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-wide text-navy">OUR CORE VALUES</h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gold" />
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {coreValues.map((v) => (
            <div key={v.title} className="rounded-md border border-border bg-white p-6 text-center shadow-sm transition hover:shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                <v.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
              </div>
              <div className="mt-4 text-sm font-bold text-navy">{v.title}</div>
              <div className="mt-2 text-xs text-muted-foreground">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-md bg-secondary/60 p-8 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[280px_1fr]">
            <div className="text-center">
              <img src={directorImg} alt="Mr. Ranjit Wable" loading="lazy" className="mx-auto h-72 w-60 rounded-md object-cover shadow-md" />
              <div className="mt-4 font-display text-xl font-bold text-navy">Mr. Ranjit Wable</div>
              <div className="text-sm text-gold">Director</div>
              <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-navy/20 bg-white px-3 py-1.5 text-xs font-semibold text-navy">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" /> Ex Indian Armed Forces
              </div>
            </div>
            <div className="border-l-2 border-gold/60 pl-8">
              <div className="text-xs font-bold tracking-[0.25em] text-gold">MESSAGE FROM THE DIRECTOR</div>
              <Quote className="mt-4 h-6 w-6 text-gold" />
              <p className="mt-3 text-sm leading-relaxed text-navy/85">
                At RR Enterprises, our commitment is to empower industries with reliable solutions, timely delivery and exceptional service. We believe in building long-term partnerships based on trust, transparency and performance.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy/85">
                Thank you for trusting RR Enterprises as your growth partner.
              </p>
              <div className="mt-5 font-display text-2xl italic text-navy">Ranjit Wable</div>
              <div className="mt-1 text-xs font-semibold text-navy">Mr. Ranjit Wable</div>
              <div className="text-xs text-muted-foreground">Director, RR Enterprises</div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-wide text-navy">OUR JOURNEY</h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gold" />
        </div>
        <div className="relative mt-14">
          <button className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep text-white shadow-md">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="absolute right-0 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep text-white shadow-md">
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="mx-12 relative">
            <div className="absolute left-0 right-0 top-3 h-0.5 bg-gold/40" />
            <div className="relative grid grid-cols-4 gap-4 md:grid-cols-8">
              {journey.map((j) => (
                <div key={j.y} className="flex flex-col items-center text-center">
                  <div className="h-6 w-6 rounded-full border-4 border-gold bg-white" />
                  <div className="mt-3 font-display text-base font-bold text-gold">{j.y}</div>
                  <div className="mt-1 text-xs text-navy">{j.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-navy-deep py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-wide">WHY CHOOSE RR ENTERPRISES</h2>
            <div className="mx-auto mt-3 h-0.5 w-16 bg-gold" />
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {whyChoose.map((w) => (
              <div key={w.title} className="rounded-md border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                <w.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                <div className="mt-3 text-sm font-bold">{w.title}</div>
                <div className="mt-2 text-xs text-white/70">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & PARTNERSHIPS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-center">
              <h3 className="font-display text-xl font-bold tracking-wider text-navy">CERTIFICATIONS</h3>
              <div className="mx-auto mt-3 h-0.5 w-12 bg-gold" />
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              {certs.map((c) => (
                <div key={c} className="flex h-16 min-w-24 items-center justify-center rounded-md border border-border bg-white px-4 text-xs font-bold text-navy shadow-sm">
                  {c}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-center">
              <h3 className="font-display text-xl font-bold tracking-wider text-navy">OUR PARTNERSHIPS</h3>
              <div className="mx-auto mt-3 h-0.5 w-12 bg-gold" />
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              {partners.map((p) => (
                <div key={p} className="flex h-16 min-w-28 items-center justify-center rounded-md border border-border bg-white px-4 text-sm font-bold text-navy shadow-sm">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-secondary/60 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-5">
          {stats.map((s) => (
            <div key={s.l} className="flex items-center gap-3">
              <s.icon className="h-9 w-9 text-gold" strokeWidth={1.5} />
              <div>
                <div className="font-display text-2xl font-bold text-navy">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold">Let's Build Something Great Together</h3>
            <p className="mt-2 max-w-xl text-sm text-white/75">Partner with RR Enterprises for reliable, efficient and sustainable industrial solutions.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep hover:bg-gold-soft">
              Request Quote Now <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-white/80 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Talk To Our Experts <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep pt-14 pb-6 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-xs text-xs text-white/70">
              Your trusted partner for industrial procurement, infrastructure solutions and sustainable growth.
            </p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Facebook, Instagram, Youtube].map((I, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-navy-deep">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {[
            { h: "SOLUTIONS", items: ["Packaging Materials", "Industrial Components", "Construction Materials", "PEB Structures", "MEP Services", "Solar Solutions"] },
            { h: "INDUSTRIES", items: ["Manufacturing", "Warehousing", "Logistics", "Construction", "Infrastructure", "EPC Contractors"] },
            { h: "RESOURCES", items: ["Blogs", "Case Studies", "Whitepapers", "Downloads", "Guides", "News & Updates"] },
            { h: "QUICK LINKS", items: ["About Us", "Projects", "RFQ Portal", "Careers", "Privacy Policy", "Terms & Conditions"] },
          ].map((col) => (
            <div key={col.h}>
              <div className="text-xs font-bold tracking-[0.15em] text-gold">{col.h}</div>
              <ul className="mt-4 space-y-2 text-xs text-white/75">
                {col.items.map((it) => <li key={it}><a href="#" className="hover:text-gold">{it}</a></li>)}
              </ul>
            </div>
          ))}
          <div>
            <div className="text-xs font-bold tracking-[0.15em] text-gold">CONTACT US</div>
            <ul className="mt-4 space-y-3 text-xs text-white/75">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" /> 123, Industrial Area, Pune, Maharashtra, India – 411001</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-gold" /> +91 98765 43210</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-gold" /> info@rrenterprises.com</li>
              <li className="flex gap-2"><Globe className="h-4 w-4 shrink-0 text-gold" /> www.rrenterprises.com</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-white/10 px-6 pt-5 text-xs text-white/60 md:flex-row">
          <div>© 2024 RR Enterprises. All Rights Reserved.</div>
          <div>Designed with Excellence for a Better Tomorrow.</div>
        </div>
      </footer>

      <button className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-md bg-gold text-navy-deep shadow-lg hover:bg-gold-soft">
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
