"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Phone, Sparkles, Star, Send } from "lucide-react";
import { business } from "@/data/business";



export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
     {/* NAVBAR */}
<nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
    <a
      href="#"
      className="text-xl font-bold tracking-[0.2em]"
    >
      APEX<span className="text-zinc-500">DETAILING</span>
    </a>

    <div className="hidden items-center gap-8 md:flex">
      <a
        href="#services"
        className="text-sm text-zinc-400 transition hover:text-white"
      >
        Services
      </a>

      <a
        href="#work"
        className="text-sm text-zinc-400 transition hover:text-white"
      >
        Our Work
      </a>

      <a
        href="#contact"
        className="text-sm text-zinc-400 transition hover:text-white"
      >
        Contact
      </a>
    </div>

    <a
      href="#contact"
      className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
    >
      Book Now
    </a>
  </div>
</nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/40" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-zinc-300">
              <Sparkles size={16} />
              {business.tagline}
            </div>

            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              YOUR CAR.
              <br />
              <span className="text-zinc-400">PERFECTED.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
              Professional car detailing focused on the smallest details.
              Bringing your car back to its best.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105"
              >
                View Services
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
  {business.stats.map(([number, label]) => (
    <div key={label} className="px-6 py-10 text-center">
      <div className="text-3xl font-bold">{number}</div>
      <div className="mt-2 text-sm text-zinc-500">{label}</div>
    </div>
  ))}
</div>
      </section>

      {/* SERVICES */}
<section id="services" className="mx-auto max-w-7xl px-6 py-32">
  <div className="mb-16 max-w-2xl">
    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
      Our Services
    </p>

    <h2 className="text-4xl font-bold sm:text-6xl">
      SIMPLE.
      <br />
      <span className="text-zinc-500">THOROUGH.</span>
    </h2>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    {business.services.map((service, index) => (
      <motion.div
        key={service.title}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/25 hover:bg-white/[0.06]"
      >
        <div className="mb-12 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
            <Sparkles size={20} />
          </div>

          <span className="text-2xl font-bold">
            {service.price}
          </span>
        </div>

        <h3 className="text-2xl font-semibold">
          {service.title}
        </h3>

        <p className="mt-4 min-h-14 text-zinc-500">
          {service.description}
        </p>

        <a
          href="#contact"
          className="mt-8 flex items-center gap-2 text-sm font-semibold"
        >
          Book this service
          <ArrowRight size={16} />
        </a>
      </motion.div>
    ))}
  </div>
</section>

{/* GALLERY */}
<section
  id="work"
  className="mx-auto max-w-7xl px-6 py-32"
>
  <div className="mb-16">
    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
      Our Work
    </p>

    <h2 className="text-4xl font-bold sm:text-6xl">
      THE WORK.
      <br />
      <span className="text-zinc-500">SPEAKS FOR ITSELF.</span>
    </h2>
  </div>

  <div className="grid gap-5 md:grid-cols-3">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="md:col-span-2 md:row-span-2"
    >
      <img
        src="/images/after.jpg"
        alt="Apex Detailing"
        className="h-full min-h-[400px] w-full rounded-3xl object-cover transition duration-700 hover:scale-[1.01]"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-3xl"
    >
      <img
        src="/images/before.jpg"
        alt="Apex Detailing"
        className="h-full min-h-[250px] w-full object-cover transition duration-700 hover:scale-105"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 0, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-3xl"
    >
      <img
        src="/images/car-3.jpg"
        alt="Apex Detailing"
        className="h-full min-h-[250px] w-full object-cover transition duration-700 hover:scale-105"
      />
    </motion.div>
  </div>
</section>

      {/* WHY US */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Why Apex
            </p>

            <h2 className="text-4xl font-bold sm:text-6xl">
              DETAILS MAKE
              <br />
              <span className="text-zinc-500">THE DIFFERENCE.</span>
            </h2>

            <p className="mt-8 max-w-xl leading-8 text-zinc-400">
              We don't rush the process. Every vehicle gets the attention it
              deserves, from the wheels to the smallest interior details.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Professional-grade products",
              "Carefully inspected before delivery",
              "Fully tailored detailing packages",
              "Friendly and reliable service",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <Check size={16} />
                </div>

                <span className="text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center">
        <div className="flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>

        <blockquote className="mt-8 text-3xl font-medium leading-tight sm:text-5xl">
          “The car looked better than it did the day I bought it.”
        </blockquote>

        <p className="mt-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
          — Michael R.
        </p>
      </section>

      {/* CONTACT */}
<section id="contact" className="border-t border-white/10 bg-[#0d0d0d]">
  <div className="mx-auto max-w-7xl px-6 py-32">
    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Book Your Detail
        </p>

        <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
          READY TO MAKE
          <br />
          <span className="text-zinc-500">YOUR CAR SHINE?</span>
        </h2>

        <p className="mt-6 max-w-lg leading-8 text-zinc-500">
          Tell us a little about your vehicle and the service you're
          interested in. We'll get back to you with availability.
        </p>

        <div className="mt-10 space-y-4">
          {[
            "Professional-grade products",
            "Flexible appointment times",
            "Personalized service",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                <Check size={14} />
              </div>

              <span className="text-zinc-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks! We'll contact you shortly.");
        }}
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">

          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm text-zinc-400">
              Name
            </label>

            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Email
            </label>

            <input
              required
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Phone
            </label>

            <input
              type="tel"
              placeholder="+32 ..."
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm text-zinc-400">
              Service
            </label>

            <select
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
            >
              <option>Exterior Detail</option>
              <option>Interior Detail</option>
              <option>Full Detail</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm text-zinc-400">
              Message
            </label>

            <textarea
              rows={4}
              placeholder="Tell us about your car..."
              className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30"
            />
          </div>

          <button
            type="submit"
            className="sm:col-span-2 flex items-center justify-center gap-2 rounded-xl bg-white py-4 font-semibold text-black transition hover:bg-zinc-200"
          >
            Send Request
            <Send size={17} />
          </button>

        </div>
      </form>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-600 sm:flex-row">
          <span>© 2026 {business.name}</span>
          <span>{business.location}</span>
        </div>
      </footer>
    </main>
  );
}