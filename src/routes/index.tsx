import { createFileRoute } from "@tanstack/react-router";
import {
  Package, Settings, Building2, Wrench, Sun, Factory, Warehouse, Truck,
  HardHat, Network, Users, Award, ClipboardList, Headphones, ShieldCheck,
  Clock, Layers, Briefcase, IndianRupee, MapPin, ChevronLeft, ChevronRight,
  ArrowRight, Box, Handshake, Phone, Mail, Globe, Linkedin, Facebook,
  Instagram, Youtube, MessageCircle, Calendar, FileText, Quote, Check,
} from "lucide-react";

import hero from "@/assets/hero-warehouse.jpg";
import solPackaging from "@/assets/sol-packaging.jpg";
import solComponents from "@/assets/sol-components.jpg";
import solConstruction from "@/assets/sol-construction.jpg";
import solPeb from "@/assets/sol-peb.jpg";
import solMep from "@/assets/sol-mep.jpg";
import solSolar from "@/assets/sol-solar.jpg";
import pBubble from "@/assets/p-bubble.jpg";
import pStretch from "@/assets/p-stretch.jpg";
import pBoxes from "@/assets/p-boxes.jpg";
import pBearings from "@/assets/p-bearings.jpg";
import pPipes from "@/assets/p-pipes.jpg";
import pSolar from "@/assets/p-solar.jpg";
import projManufacturing from "@/assets/proj-manufacturing.jpg";
import projWarehouse from "@/assets/proj-warehouse.jpg";
import projSolar from "@/assets/proj-solar.jpg";
import projMep from "@/assets/proj-mep.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RR Enterprises — Industrial Procurement Simplified" },
      { name: "description", content: "End-to-end industrial sourcing, packaging, construction and infrastructure solutions across India." },
      { property: "og:title", content: "RR Enterprises — Industrial Procurement Simplified" },
      { property: "og:description", content: "One Partner. Multiple Solutions. Endless Possibilities." },
    ],
  }),
  component: Index,
});

const nav = ["Solutions", "Industries", "Projects", "Resources", "RFQ", "Contact"];

const solutions = [
  { img: solPackaging, icon: Package, title: "Packaging Materials", desc: "High quality packaging solutions for industrial and commercial needs." },
  { img: solComponents, icon: Settings, title: "Industrial Components", desc: "Wide range of industrial components for critical operations." },
  { img: solConstruction, icon: Building2, title: "Construction Materials", desc: "Reliable construction materials for stronger and safer infrastructure." },
  { img: solPeb, icon: Layers, title: "PEB Structures", desc: "Pre-engineered buildings for factory, warehouse and industrial sheds." },
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

const whyUs = [
  { icon: Award, title: "Quality Assurance", desc: "International quality standards & testing" },
  { icon: Clock, title: "On-Time Delivery", desc: "Committed to timelines with reliable logistics" },
  { icon: Layers, title: "Wide Product Range", desc: "One stop solution for all industrial needs" },
  { icon: Briefcase, title: "Technical Expertise", desc: "Experienced team for end-to-end support" },
  { icon: IndianRupee, title: "Cost Effective", desc: "Competitive pricing with maximum value" },
  { icon: MapPin, title: "Pan India Network", desc: "Strong presence across the country" },
];

const products = [
  { img: pBubble, name: "Bubble Roll", desc: "Protective packaging solution" },
  { img: pStretch, name: "Stretch Film", desc: "High performance stretch film" },
  { img: pBoxes, name: "Corrugated Boxes", desc: "Durable & eco-friendly boxes" },
  { img: pBearings, name: "Industrial Bearings", desc: "Precision bearings for machines" },
  { img: pPipes, name: "GI Pipes", desc: "High strength GI pipes" },
  { img: pSolar, name: "Solar Panels", desc: "High efficiency solar panels" },
];

const projects = [
  { img: projManufacturing, title: "Manufacturing Plant", challenge: "High downtime & inefficient sourcing", solution: "End-to-end procurement & supply", outcome: "25% cost reduction & on-time delivery" },
  { img: projWarehouse, title: "Warehouse Construction", challenge: "Delayed material supply", solution: "Timely supply & structural solutions", outcome: "30% faster project completion" },
  { img: projSolar, title: "Solar Installation", challenge: "High energy costs", solution: "Custom solar solution deployment", outcome: "40% energy savings" },
  { img: projMep, title: "MEP Project", challenge: "Complex MEP requirements", solution: "Integrated MEP execution", outcome: "Seamless operations & efficiency" },
];

const testimonials = [
  { text: "RR Enterprises has been our trusted partner for over 3 years. Their timely delivery and quality products have improved our operations significantly.", who: "Procurement Manager", role: "Leading Manufacturing Company" },
  { text: "The professionalism and technical support from RR Enterprises are exceptional. They truly understand our requirements.", who: "Project Director", role: "Infrastructure Company" },
  { text: "From packaging to complete PEB structures, their solutions are reliable, efficient and cost effective.", who: "Operations Head", role: "Logistics Company" },
];

const stats = [
  { icon: Award, n: "10+", l: "Years of Experience" },
  { icon: Box, n: "500+", l: "Products Available" },
  { icon: ClipboardList, n: "100+", l: "Successful Deliveries" },
  { icon: Users, n: "50+", l: "Supply Partners" },
  { icon: Headphones, n: "24/7", l: "Customer Support" },
];

const rfqFeatures = [
  { icon: Clock, title: "Quick & Easy Inquiry", desc: "Submit your requirements in minutes" },
  { icon: Briefcase, title: "Expert Evaluation", desc: "Our experts will analyze your requirement" },
  { icon: Award, title: "Best Competitive Quote", desc: "Receive the best quote within 24 hours" },
  { icon: ShieldCheck, title: "Secure & Confidential", desc: "Your information is 100% safe with us" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-gold bg-transparent">
        <span className="text-gold font-display font-extrabold text-lg tracking-tight">RR</span>
      </div>
      <div>
        <div className={`font-display font-bold leading-tight text-sm ${light ? "text-white" : "text-navy"}`}>RR ENTERPRISES</div>
        <div className="text-[10px] text-gold leading-tight">One Partner. Multiple Solutions. Endless Possibilities.</div>
      </div>
    </div>
  );
}

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

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO + NAV */}
      <header className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        </div>

        {/* nav */}
        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Logo light />
          <nav className="hidden items-center gap-7 text-sm text-white/90 lg:flex">
            {nav.map((n) => (
              <a key={n} href="#" className="transition hover:text-gold">{n}{["Solutions","Industries","Resources"].includes(n) && " ▾"}</a>
            ))}
          </nav>
          <button className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-navy-deep hover:bg-gold-soft">
            <Calendar className="h-4 w-4" /> Schedule Consultation
          </button>
        </div>

        {/* hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-32">
          <div className="text-xs font-semibold tracking-[0.2em] text-gold">INDUSTRIAL PROCUREMENT & INFRASTRUCTURE SOLUTIONS</div>
          <h1 className="mt-5 max-w-2xl font-display text-5xl font-bold leading-tight md:text-6xl">
            Industrial Procurement Simplified
          </h1>
          <p className="mt-5 text-xl font-semibold text-white">
            One <span className="text-gold">Partner.</span> Multiple <span className="text-gold">Solutions.</span> Endless <span className="text-gold">Possibilities.</span>
          </p>
          <p className="mt-4 max-w-xl text-sm text-white/80">
            End-to-end industrial sourcing, packaging, construction and infrastructure solutions across India.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <GoldBtn>Request Quote</GoldBtn>
            <GoldBtn outline>Schedule Consultation</GoldBtn>
          </div>

          {/* hero stats */}
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { icon: Box, n: "500+", l: "Products Available" },
              { icon: Building2, n: "100+", l: "Projects Delivered" },
              { icon: Handshake, n: "50+", l: "Global Partners" },
              { icon: MapPin, n: "Pan India", l: "Supply Network" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-3">
                <s.icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                <div>
                  <div className="font-display text-2xl font-bold">{s.n}</div>
                  <div className="text-xs text-white/70">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* trusted bar */}
        <div className="relative z-10 mx-auto -mb-16 max-w-6xl translate-y-1/2 px-6">
          <div className="rounded-md bg-white px-8 py-6 shadow-xl">
            <div className="text-center text-xs font-bold tracking-[0.2em] text-navy">TRUSTED BY INDUSTRIES. DELIVERED WITH EXCELLENCE.</div>
            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-5">
              {stats.map((s) => (
                <div key={s.l} className="flex items-center justify-center gap-3">
                  <s.icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                  <div>
                    <div className="font-display text-xl font-bold text-navy">{s.n}</div>
                    <div className="text-[11px] text-muted-foreground">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="h-20" />

      {/* SOLUTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center font-display text-2xl font-bold tracking-wide text-navy">OUR SOLUTIONS</h2>
        <div className="mx-auto mt-2 h-0.5 w-16 bg-gold" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border transition hover:shadow-md">
              <img src={s.img} alt={s.title} loading="lazy" className="h-44 w-full object-cover" />
              <div className="relative p-5">
                <div className="absolute -top-7 left-5 flex h-12 w-12 items-center justify-center rounded-md bg-navy text-gold shadow-md">
                  <s.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div className="pl-16">
                  <h3 className="font-display text-base font-bold text-navy">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  <a className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline">Learn More <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-center font-display text-2xl font-bold tracking-wide text-navy">INDUSTRIES WE SERVE</h2>
        <div className="mx-auto mt-2 h-0.5 w-16 bg-gold" />
        <div className="mt-8 flex items-center gap-3">
          <button className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-navy text-white hover:bg-navy-deep"><ChevronLeft className="h-4 w-4" /></button>
          <div className="grid flex-1 grid-cols-3 gap-3 md:grid-cols-6">
            {industries.map((i, idx) => (
              <div key={i.label} className={`flex flex-col items-center gap-2 rounded-md border bg-white px-3 py-5 ${idx === 0 ? "border-gold" : "border-border"}`}>
                <i.icon className="h-9 w-9 text-gold" strokeWidth={1.3} />
                <span className="text-xs font-semibold text-navy">{i.label}</span>
                {idx === 0 && <div className="h-0.5 w-10 bg-gold" />}
              </div>
            ))}
          </div>
          <button className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-navy text-white hover:bg-navy-deep"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-navy-deep py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-2xl font-bold tracking-wide">WHY CHOOSE RR ENTERPRISES</h2>
          <div className="mx-auto mt-2 h-0.5 w-16 bg-gold" />
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {whyUs.map((w) => (
              <div key={w.title} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-gold/40">
                  <w.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="mt-3 text-sm font-semibold">{w.title}</h3>
                <p className="mt-1 text-xs text-white/70">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center font-display text-2xl font-bold tracking-wide text-navy">FEATURED PRODUCTS</h2>
        <div className="mx-auto mt-2 h-0.5 w-16 bg-gold" />
        <div className="mt-10 flex items-center gap-3">
          <button className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gold text-navy-deep hover:bg-gold-soft"><ChevronLeft className="h-4 w-4" /></button>
          <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {products.map((p) => (
              <div key={p.name} className="rounded-md bg-white p-3 shadow-sm ring-1 ring-border">
                <div className="aspect-square overflow-hidden rounded bg-muted">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-navy">{p.name}</h3>
                <p className="text-[11px] text-muted-foreground">{p.desc}</p>
                <a className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline">View Details <ArrowRight className="h-3 w-3" /></a>
              </div>
            ))}
          </div>
          <button className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gold text-navy-deep hover:bg-gold-soft"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-center font-display text-2xl font-bold tracking-wide text-navy">PROJECTS DELIVERED ACROSS INDUSTRIES</h2>
        <div className="mx-auto mt-2 h-0.5 w-16 bg-gold" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-lg">
              <img src={p.img} alt={p.title} loading="lazy" className="h-72 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/30" />
              <div className="absolute inset-0 flex flex-col p-5 text-white">
                <div className="inline-block self-start rounded bg-black/40 px-2 py-1 text-xs font-bold">{p.title}</div>
                <div className="mt-auto space-y-2 text-xs">
                  <div><div className="font-bold text-gold">Challenge</div><div className="text-white/85">{p.challenge}</div></div>
                  <div><div className="font-bold text-gold">Solution</div><div className="text-white/85">{p.solution}</div></div>
                  <div><div className="font-bold text-gold">Outcome</div><div className="text-white/85">{p.outcome}</div></div>
                  <a className="inline-flex items-center gap-1 pt-1 font-semibold text-gold hover:underline">View Case Study <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-navy-deep py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-2xl font-bold tracking-wide">WHAT OUR CLIENTS SAY</h2>
          <div className="mx-auto mt-2 h-0.5 w-16 bg-gold" />
          <div className="mt-10 flex items-center gap-4">
            <button className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/15 hover:bg-white/25"><ChevronLeft className="h-4 w-4" /></button>
            <div className="grid flex-1 gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.who} className="rounded-md p-2">
                  <Quote className="h-6 w-6 text-gold" fill="currentColor" />
                  <p className="mt-2 text-sm text-white/90">{t.text}</p>
                  <div className="mt-4 text-sm font-semibold text-white">– {t.who}</div>
                  <div className="text-xs text-white/70">{t.role}</div>
                </div>
              ))}
            </div>
            <button className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/15 hover:bg-white/25"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>

      {/* RFQ */}
      <section className="bg-secondary py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">SMART RFQ – GET BEST QUOTE IN 24 HOURS <Check className="inline h-5 w-5 text-gold" /></h2>
            <ul className="mt-6 space-y-4">
              {rfqFeatures.map((f) => (
                <li key={f.title} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-white text-gold ring-1 ring-border">
                    <f.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy">{f.title}</div>
                    <div className="text-xs text-muted-foreground">{f.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form className="rounded-md bg-white p-6 shadow-sm ring-1 ring-border">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Company Name *", "input"],
                ["Contact Person *", "input"],
                ["Email *", "input"],
                ["Phone Number *", "input"],
                ["Industry *", "select"],
                ["Requirement Type *", "select"],
                ["Product Category *", "select"],
                ["Estimated Quantity", "input"],
                ["Location *", "input"],
              ].map(([label, type]) => (
                <label key={label} className="text-xs">
                  <span className="font-semibold text-navy">{label}</span>
                  {type === "select" ? (
                    <select className="mt-1 w-full rounded border border-input bg-white px-3 py-2 text-sm">
                      <option>Select {String(label).replace(" *","").replace("Requirement Type","Type")}</option>
                    </select>
                  ) : (
                    <input className="mt-1 w-full rounded border border-input bg-white px-3 py-2 text-sm" />
                  )}
                </label>
              ))}
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-xs">
                <span className="font-semibold text-navy">Message / Requirement Details</span>
                <textarea rows={4} placeholder="Write your requirement..." className="mt-1 w-full rounded border border-input bg-white px-3 py-2 text-sm" />
              </label>
              <label className="text-xs">
                <span className="font-semibold text-navy">Upload BOQ / File</span>
                <div className="mt-1 rounded border border-input bg-white px-3 py-2 text-sm">
                  <input type="file" className="text-xs" />
                </div>
                <span className="mt-1 block text-[10px] text-muted-foreground">Max file size: 10MB (PDF, DOC, XLS, DWG)</span>
              </label>
            </div>
            <div className="mt-5 text-center">
              <button type="button" className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-2.5 text-sm font-bold text-navy-deep hover:bg-gold-soft">
                Submit RFQ <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-10 text-white">
        <div className="absolute inset-0 opacity-20"><img src={hero} alt="" className="h-full w-full object-cover" /></div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div>
            <h3 className="font-display text-2xl font-bold">Ready to Simplify Your Industrial Procurement?</h3>
            <p className="text-sm text-white/80">Let's build something great together.</p>
          </div>
          <div className="flex gap-3">
            <GoldBtn>Request Quote</GoldBtn>
            <GoldBtn outline>Talk to Our Experts</GoldBtn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep py-14 text-white/85">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-5 text-xs text-white/70">Your trusted partner for industrial procurement, infrastructure solutions and sustainable growth.</p>
            <div className="mt-4 flex gap-2">
              {[Linkedin, Facebook, Instagram, Youtube].map((I, i) => (
                <a key={i} className="flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-white/20 hover:bg-white/10"><I className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          <FooterCol title="SOLUTIONS" items={["Packaging Materials","Industrial Components","Construction Materials","PEB Structures","MEP Services","Solar Solutions"]} />
          <FooterCol title="INDUSTRIES" items={["Manufacturing","Warehousing","Logistics","Construction","Infrastructure","EPC Contractors"]} />
          <FooterCol title="QUICK LINKS" items={["About Us","Projects","Resources","RFQ Portal","Vendor Portal","Contact Us"]} />
          <div>
            <h4 className="font-display text-sm font-bold text-white">CONTACT INFO</h4>
            <div className="mt-3 h-0.5 w-10 bg-gold" />
            <ul className="mt-4 space-y-2 text-xs">
              <li className="flex gap-2"><MapPin className="h-4 w-4 flex-none text-gold" /> 123, Industrial Area,<br />Pune, Maharashtra, India – 411001</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 flex-none text-gold" /> +91 98765 43210</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 flex-none text-gold" /> info@rrenterprises.com</li>
              <li className="flex gap-2"><Globe className="h-4 w-4 flex-none text-gold" /> www.rrenterprises.com</li>
            </ul>
            <h4 className="mt-6 font-display text-sm font-bold text-white">NEWSLETTER</h4>
            <div className="mt-3 h-0.5 w-10 bg-gold" />
            <p className="mt-3 text-xs text-white/70">Stay updated with our latest solutions and insights.</p>
            <input placeholder="Enter your email" className="mt-3 w-full rounded border border-white/20 bg-transparent px-3 py-2 text-xs" />
            <button className="mt-2 w-full rounded bg-gold py-2 text-xs font-bold text-navy-deep hover:bg-gold-soft">Subscribe</button>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-white/10 px-6 pt-5 text-xs text-white/60 md:flex-row">
          <div>© 2024 RR Enterprises. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a className="hover:text-gold">Privacy Policy</a>
            <span>|</span>
            <a className="hover:text-gold">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      {/* Whatsapp float */}
      <a className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold text-white">{title}</h4>
      <div className="mt-3 h-0.5 w-10 bg-gold" />
      <ul className="mt-4 space-y-2 text-xs">
        {items.map((i) => <li key={i}><a className="hover:text-gold">{i}</a></li>)}
      </ul>
    </div>
  );
}
