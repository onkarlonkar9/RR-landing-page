import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, MapPin, MessageCircle, ArrowRight, Calendar,
  Box, ClipboardList, Users, Headphones, ChevronDown, ChevronUp,
  Upload, Clock, Briefcase, Award, ShieldCheck, CheckCircle2,
  AlertTriangle, Linkedin, Facebook, Instagram, Youtube, Globe,
} from "lucide-react";

import heroImg from "@/assets/contact-hero.jpg";
import officePune from "@/assets/office-pune.jpg";
import officeMumbai from "@/assets/office-mumbai.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — RR Enterprises" },
      { name: "description", content: "Get in touch with RR Enterprises for industrial procurement, infrastructure solutions and expert consultation across India." },
      { property: "og:title", content: "Contact Us — RR Enterprises" },
      { property: "og:description", content: "Let's discuss your industrial requirements. Our experts are ready to help." },
    ],
  }),
  component: ContactPage,
});

const nav = ["Home", "About Us", "Solutions", "Industries", "Projects", "Resources", "Contact"];

const contactMethods = [
  { icon: Phone, title: "Call Us", sub: "Speak with our experts", value: "+91 98765 43210", extra: "Mon – Sat: 9AM – 6PM" },
  { icon: Mail, title: "Email Us", sub: "Send us an email", value: "info@rrenterprises.com", extra: "We reply within 2 hours" },
  { icon: MessageCircle, title: "WhatsApp Us", sub: "Chat with our team", value: "+91 98765 43210", extra: "Instant support on WhatsApp" },
  { icon: MapPin, title: "Visit Us", sub: "Our Head Office", value: "Pune, Maharashtra, India", extra: "Get directions →" },
];

const businessHours = [
  { day: "Monday", time: "09:00 AM – 06:00 PM" },
  { day: "Tuesday", time: "09:00 AM – 06:00 PM" },
  { day: "Wednesday", time: "09:00 AM – 06:00 PM" },
  { day: "Thursday", time: "09:00 AM – 06:00 PM" },
  { day: "Friday", time: "09:00 AM – 06:00 PM" },
  { day: "Saturday", time: "09:00 AM – 02:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const faqs = [
  "How quickly do you respond to inquiries?",
  "Can I upload my BOQ or technical drawings?",
  "Do you deliver across India?",
  "Can I request multiple products in one RFQ?",
  "Do you provide site visits or technical support?",
];

const whyChoose = [
  { icon: Briefcase, title: "Industry Experts", desc: "Experienced team with deep industry knowledge" },
  { icon: CheckCircle2, title: "End-to-End Solutions", desc: "From procurement to delivery and support" },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Strict quality checks & certified products" },
  { icon: Users, title: "Customer First", desc: "Your success is our priority" },
];

const trusted = ["TATA", "Reliance", "LARSEN & TOUBRO", "adani", "JSW", "Mahindra"];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-gold bg-transparent">
        <span className="font-display text-lg font-extrabold tracking-tight text-gold">RR</span>
      </div>
      <div>
        <div className={`font-display text-sm font-bold leading-tight ${light ? "text-white" : "text-navy"}`}>RR ENTERPRISES</div>
        <div className="text-[10px] leading-tight text-gold">One Partner. Multiple Solutions. Endless Possibilities.</div>
      </div>
    </div>
  );
}

function GoldBtn({ children, outline = false, className = "" }: { children: React.ReactNode; outline?: boolean; className?: string }) {
  if (outline) {
    return (
      <button className={`inline-flex items-center gap-2 rounded-md border border-white/80 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 ${className}`}>
        {children} <ArrowRight className="h-4 w-4" />
      </button>
    );
  }
  return (
    <button className={`inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-sm transition hover:bg-gold-soft ${className}`}>
      {children} <ArrowRight className="h-4 w-4" />
    </button>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold text-white">{title}</h4>
      <div className="mt-3 h-0.5 w-10 bg-gold" />
      <ul className="mt-4 space-y-2 text-xs">
        {items.map((i) => <li key={i}><a href="#" className="hover:text-gold">{i}</a></li>)}
      </ul>
    </div>
  );
}

function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [agree, setAgree] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* HERO + NAV */}
      <header className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/40" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/"><Logo light /></Link>
          <nav className="hidden items-center gap-7 text-sm text-white/90 lg:flex">
            {nav.map((n) => {
              const active = n === "Contact";
              const cls = `transition hover:text-gold ${active ? "text-gold font-semibold border-b-2 border-gold pb-1" : ""}`;
              if (n === "Home") return <Link key={n} to="/" className={cls}>{n}</Link>;
              if (n === "About Us") return <Link key={n} to="/about" className={cls}>{n}</Link>;
              if (n === "Solutions") return <Link key={n} to="/solutions" className={cls}>{n}</Link>;
              if (n === "Industries") return <Link key={n} to="/industries" className={cls}>{n}</Link>;
              if (n === "Contact") return <Link key={n} to="/contact" className={cls}>{n}</Link>;
              return <a key={n} href="#" className={cls}>{n}{n === "Resources" && " ▾"}</a>;
            })}
          </nav>
          <button className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-navy-deep hover:bg-gold-soft">
            Request Quote <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pt-6 pb-20 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] text-gold">GET IN TOUCH</div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Let's Discuss Your<br />Industrial Requirements
            </h1>
            <p className="mt-5 max-w-md text-sm text-white/80">
              Our experts are ready to help you with procurement, infrastructure, and industrial solutions.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/70">
              {["Procurement", "Infrastructure", "Engineering", "Packaging", "Construction", "Solar", "MEP", "Logistics"].map((t, i) => (
                <span key={t} className="flex items-center gap-1">
                  {i > 0 && <span className="mx-1 text-gold">•</span>}{t}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <GoldBtn>Request Quote</GoldBtn>
              <GoldBtn outline><Calendar className="h-4 w-4" /> Schedule Consultation</GoldBtn>
            </div>
          </div>

          {/* Stats cards */}
          <div className="flex items-center justify-end">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Box, n: "500+", l: "Products" },
                { icon: ClipboardList, n: "100+", l: "Projects" },
                { icon: Users, n: "50+", l: "Supply Partners" },
                { icon: Headphones, n: "24/7", l: "Support" },
              ].map((s) => (
                <div key={s.l} className="rounded-md border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <s.icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                  <div className="mt-2 font-display text-2xl font-bold">{s.n}</div>
                  <div className="text-xs text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* CONTACT METHODS */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((c) => (
            <div key={c.title} className="rounded-md border border-border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15">
                  <c.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">{c.title}</div>
                  <div className="text-[11px] text-muted-foreground">{c.sub}</div>
                </div>
              </div>
              <div className="mt-3 text-sm font-semibold text-navy">{c.value}</div>
              <div className="mt-1 text-[11px] text-muted-foreground">{c.extra}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="relative overflow-hidden rounded-md border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.03482732768!2d73.8629675!3d18.5248905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461180%3A0x3d2594f7f9684c47!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RR Enterprises Location"
          />
          <div className="absolute bottom-4 left-4">
            <a
              href="https://maps.google.com/?q=Pune,Maharashtra,India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2 text-xs font-semibold text-white hover:bg-navy-deep"
            >
              Open in Google Maps <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="font-display text-xl font-bold text-navy">Our Office Locations</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Pune */}
          <div className="overflow-hidden rounded-md border border-border bg-white shadow-sm">
            <div className="relative h-48">
              <img src={officePune} alt="Pune Office" className="h-full w-full object-cover" />
              <span className="absolute right-3 top-3 rounded bg-gold px-2 py-1 text-[10px] font-bold text-navy-deep">Corporate Office</span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-base font-bold text-navy">Head Office – Pune</h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" /> 123, Industrial Area, Chakan, Pune – 410501, Maharashtra, India</li>
                <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-gold" /> +91 98765 43210</li>
                <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-gold" /> info@rrenterprises.com</li>
                <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-gold" /> Mon – Sat: 9:00 AM – 6:00 PM</li>
              </ul>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline">Get Directions <ArrowRight className="h-3 w-3" /></a>
            </div>
          </div>
          {/* Mumbai */}
          <div className="overflow-hidden rounded-md border border-border bg-white shadow-sm">
            <div className="relative h-48">
              <img src={officeMumbai} alt="Mumbai Office" className="h-full w-full object-cover" />
              <span className="absolute right-3 top-3 rounded bg-gold px-2 py-1 text-[10px] font-bold text-navy-deep">Branch Office</span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-base font-bold text-navy">Mumbai Office</h3>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" /> Unit 501, Business Bay, Andheri East, Mumbai – 400093, Maharashtra, India</li>
                <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-gold" /> +91 98765 43211</li>
                <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-gold" /> mumbai@rrenterprises.com</li>
                <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-gold" /> Mon – Sat: 9:00 AM – 6:00 PM</li>
              </ul>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline">Get Directions <ArrowRight className="h-3 w-3" /></a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-sm hover:bg-secondary">
            View All Locations <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* FORMS SECTION */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
          {/* Left: Send Us a Message */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-lg font-bold text-navy">Send Us a Message</h3>
            <p className="mt-1 text-xs text-muted-foreground">We'd love to hear from you. Fill out the form and our team will get back to you.</p>
            <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-navy">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter your full name" className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-xs" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy">Company Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter company name" className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-xs" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-navy">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="Enter your email" className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-xs" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" placeholder="Enter your phone number" className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-xs" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Inquiry Type <span className="text-red-500">*</span></label>
                <select className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-xs text-muted-foreground">
                  <option>Select inquiry type</option>
                  <option>Product Inquiry</option>
                  <option>Service Request</option>
                  <option>Partnership</option>
                  <option>General</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Requirement Details <span className="text-red-500">*</span></label>
                <textarea rows={4} placeholder="Tell us about your requirement..." className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-xs" />
              </div>
              <div className="rounded border border-dashed border-border bg-white p-4 text-center">
                <Upload className="mx-auto h-6 w-6 text-muted-foreground" />
                <p className="mt-2 text-xs text-muted-foreground">Drag & drop files here or <span className="font-semibold text-gold">Browse</span></p>
                <p className="text-[10px] text-muted-foreground">PDF, DOC, XLS, DWG, ZIP (Max 20MB)</p>
              </div>
              <label className="flex items-center gap-2 text-xs">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="h-4 w-4 rounded border-border" />
                <span>I agree to the <a href="#" className="text-gold hover:underline">Privacy Policy</a> and <a href="#" className="text-gold hover:underline">Terms & Conditions</a></span>
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep">
                Submit Enquiry <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Middle: WhatsApp + Business Hours */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="rounded-md bg-emerald-600 p-6 text-white">
              <MessageCircle className="h-8 w-8" />
              <h4 className="mt-3 font-display text-lg font-bold">Need Immediate Assistance?</h4>
              <p className="mt-1 text-xs text-white/90">Chat instantly on WhatsApp. Get quick answers from our experts.</p>
              <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-white/90">
                Start WhatsApp Chat <ArrowRight className="h-4 w-4" />
              </button>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded border border-white/30 bg-white/10 py-2 text-[11px] font-semibold hover:bg-white/20">Request Quote</button>
                <button className="flex-1 rounded border border-white/30 bg-white/10 py-2 text-[11px] font-semibold hover:bg-white/20">Track Order</button>
                <button className="flex-1 rounded border border-white/30 bg-white/10 py-2 text-[11px] font-semibold hover:bg-white/20">Talk To Expert</button>
              </div>
            </div>
            {/* Business Hours */}
            <div className="rounded-md border border-border bg-white p-5">
              <div className="flex items-center justify-between">
                <h4 className="font-display text-sm font-bold text-navy">Business Hours</h4>
                <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">OPEN NOW</span>
              </div>
              <div className="mt-4 h-0.5 w-10 bg-gold" />
              <table className="mt-4 w-full text-xs">
                <tbody>
                  {businessHours.map((b) => (
                    <tr key={b.day} className="border-b border-border last:border-0">
                      <td className="py-2 text-muted-foreground">{b.day}</td>
                      <td className="py-2 text-right font-semibold text-navy">{b.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Quick RFQ */}
          <div className="rounded-md border border-border bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-navy">Quick RFQ</h3>
            <p className="mt-1 text-xs text-muted-foreground">Submit your requirement for fast quotation.</p>
            <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-semibold text-navy">Company Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter company name" className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-xs" />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Industry <span className="text-red-500">*</span></label>
                <select className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-xs text-muted-foreground">
                  <option>Select industry</option>
                  <option>Manufacturing</option>
                  <option>Construction</option>
                  <option>Logistics</option>
                  <option>Infrastructure</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Requirement Type <span className="text-red-500">*</span></label>
                <select className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-xs text-muted-foreground">
                  <option>Select requirement type</option>
                  <option>Product Supply</option>
                  <option>Service</option>
                  <option>Consultation</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Brief Requirement <span className="text-red-500">*</span></label>
                <textarea rows={3} placeholder="Enter brief requirement" className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-xs" />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Upload BOQ / File</label>
                <div className="mt-1 flex items-center gap-2 rounded border border-border bg-white px-3 py-2">
                  <button type="button" className="text-xs font-semibold text-navy">Choose File</button>
                  <span className="text-xs text-muted-foreground">No file chosen</span>
                </div>
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-navy-deep hover:bg-gold-soft">
                Submit RFQ <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 space-y-3">
              {[
                { icon: Clock, title: "Quick Response", desc: "Within 2 business hours" },
                { icon: Briefcase, title: "Expert Consultation", desc: "By industry specialists" },
                { icon: Award, title: "Competitive Pricing", desc: "Best value guaranteed" },
                { icon: MapPin, title: "Pan India Delivery", desc: "500+ locations" },
              ].map((f) => (
                <div key={f.title} className="flex items-center gap-3">
                  <f.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs font-semibold text-navy">{f.title}</div>
                    <div className="text-[10px] text-muted-foreground">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* URGENT BANNER */}
      <section className="bg-navy py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <AlertTriangle className="h-10 w-10 shrink-0 text-gold" />
            <div>
              <div className="font-display text-sm font-bold">Urgent Requirement?</div>
              <p className="text-xs text-white/70">We are here to help you 24/7.<br />For critical procurement or emergency support.</p>
            </div>
          </div>
          <div className="text-center">
            <div className="text-[10px] font-bold tracking-wider text-white/60">EMERGENCY CONTACT</div>
            <div className="mt-1 font-display text-2xl font-bold text-gold">+91 98765 43210</div>
            <div className="text-[10px] text-white/60">24/7 Dedicated Support Line</div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep hover:bg-gold-soft">
            Call Emergency Team <Phone className="h-4 w-4" />
          </button>
          <div className="text-xs text-white/70">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-gold" /> Critical Supply</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-gold" /> Urgent Procurement</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-gold" /> Project Escalation</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-gold" /> Technical Support</div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-center font-display text-lg font-bold text-navy">Trusted By Leading Companies</h2>
        <div className="mx-auto mt-3 h-0.5 w-12 bg-gold" />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          {trusted.map((t) => (
            <div key={t} className="flex h-12 items-center justify-center px-4 text-lg font-bold tracking-wide text-navy/70">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ + WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* FAQ */}
          <div>
            <h3 className="font-display text-lg font-bold text-navy">Frequently Asked Questions</h3>
            <div className="mt-5 space-y-3">
              {faqs.map((q, i) => (
                <div key={i} className="rounded-md border border-border bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-navy"
                  >
                    {q}
                    {openFaq === i ? <ChevronUp className="h-4 w-4 text-gold" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-3 text-xs text-muted-foreground">
                      Our team typically responds within 2 business hours. For urgent requirements, you can reach us via WhatsApp or our emergency contact line for instant assistance.
                    </div>
                  )}
                </div>
              ))}
            </div>
            <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline">View All FAQs <ArrowRight className="h-3 w-3" /></a>
          </div>

          {/* Why Choose */}
          <div>
            <h3 className="font-display text-lg font-bold text-navy">Why Choose RR Enterprises?</h3>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {whyChoose.map((w) => (
                <div key={w.title} className="rounded-md border border-border bg-white p-4 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold/15">
                    <w.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div className="mt-2 text-sm font-bold text-navy">{w.title}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-navy-deep py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div>
            <h3 className="font-display text-xl font-bold">Ready to Start Your Next Project?</h3>
            <p className="text-sm text-white/75">Let's build something great together.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <GoldBtn>Request Quote</GoldBtn>
            <GoldBtn outline>Talk To Our Experts</GoldBtn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep pt-14 pb-6 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-5 text-xs text-white/70">Your trusted partner for industrial procurement, infrastructure solutions and sustainable growth.</p>
            <div className="mt-4 flex gap-2">
              {[Linkedin, Facebook, Instagram, Youtube].map((I, i) => (
                <a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-white/20 hover:bg-white/10"><I className="h-4 w-4" /></a>
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
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gold">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp float */}
      <a href="#" className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
