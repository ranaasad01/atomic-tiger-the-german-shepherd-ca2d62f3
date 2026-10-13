"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Camera, Laugh, Star, Zap, Shield, Award } from 'lucide-react';
import { fadeInUp, staggerContainer, bounceIn, scaleIn } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";

const PET_NAME = "Tiger";
const PET_BREED = "German Shepherd";

// ── Inline data ──────────────────────────────────────────────────────────────

const PHOTOS = [
  {
    id: "1",
    src: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/b89e5f17951843e2ab7963bb72a00b84.jpg",
    alt: "German Shepherd",
    caption: "Tiger on his morning patrol 🐾",
  },
  {
    id: "2",
    src: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/b89e5f17951843e2ab7963bb72a00b84.jpg",
    alt: "German Shepherd",
    caption: "King of the backyard 👑",
  },
  {
    id: "3",
    src: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/b89e5f17951843e2ab7963bb72a00b84.jpg",
    alt: "German Shepherd",
    caption: "Nap time — do not disturb 😴",
  },
  {
    id: "4",
    src: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/b89e5f17951843e2ab7963bb72a00b84.jpg",
    alt: "German Shepherd",
    caption: "Ready for adventure! 🌲",
  },
];

const JOKES = [
  {
    id: "1",
    setup: "Why did the dog sit in the shade?",
    punchline: "Because he didn't want to be a hot dog! 🌭",
  },
  {
    id: "2",
    setup: "What do you call a dog magician?",
    punchline: "A labra-cadabra-dor! 🪄",
  },
  {
    id: "3",
    setup: "Why do dogs run in circles?",
    punchline: "Because it's too hard to run in squares! 🔄",
  },
  {
    id: "4",
    setup: "What kind of dog does Dracula have?",
    punchline: "A bloodhound! 🧛",
  },
  {
    id: "5",
    setup: "Why did the German Shepherd become a police dog?",
    punchline: "Because he was the best at sniffing out the competition! 🐕‍🦺",
  },
];

const FUN_FACTS = [
  {
    id: "1",
    icon: Shield,
    title: "Natural Protector",
    body: "German Shepherds are one of the most loyal and protective breeds in the world. Tiger takes his guard-dog duties very seriously — especially when squirrels are involved.",
  },
  {
    id: "2",
    icon: Zap,
    title: "Lightning Fast",
    body: "Tiger can reach speeds of up to 30 mph when chasing a tennis ball. He has never once caught a squirrel, but not for lack of trying.",
  },
  {
    id: "3",
    icon: Star,
    title: "Incredibly Smart",
    body: "German Shepherds rank 3rd in dog intelligence. Tiger learned 'sit', 'stay', and 'shake' in a single afternoon — then immediately forgot 'stay'.",
  },
  {
    id: "4",
    icon: Heart,
    title: "Pure Love",
    body: "Despite his tough exterior, Tiger is a total softie. He insists on sleeping at the foot of the bed and gives the best morning zoomies.",
  },
  {
    id: "5",
    icon: Award,
    title: "Champion Napper",
    body: "Tiger sleeps an average of 12 hours a day. He has perfected the art of the dramatic flop and the slow-motion couch takeover.",
  },
  {
    id: "6",
    icon: Camera,
    title: "Natural Model",
    body: "Tiger has an uncanny ability to look directly at the camera at exactly the right moment. His best side? All of them.",
  },
];

// ── Page Component ────────────────────────────────────────────────────────────

export default function HomePage() {
  const [jokeIndex, setJokeIndex] = useState(0);
  const [showPunchline, setShowPunchline] = useState(false);
  const [jokeKey, setJokeKey] = useState(0);

  const currentJoke = JOKES[jokeIndex];

  function handleNewJoke() {
    const next = (jokeIndex + 1) % JOKES.length;
    setJokeIndex(next);
    setShowPunchline(false);
    setJokeKey((k) => k + 1);
  }

  function handleReveal() {
    setShowPunchline(true);
  }

  return (
    <main className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <Reveal>
        <section
          id="home"
          className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-[var(--hero-bg)] overflow-hidden"
        >
          {/* Background paw prints */}
          <div className="absolute inset-0 pointer-events-none select-none opacity-[0.04]">
            {["top-10 left-8", "top-32 right-16", "bottom-20 left-20", "bottom-10 right-10", "top-1/2 left-4", "top-1/3 right-4"].map(
              (pos, i) => (
                <span key={i} className={`absolute text-7xl ${pos}`}>
                  🐾
                </span>
              )
            )}
          </div>

          {/* Glow blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--brand-primary)]/10 blur-[120px] pointer-events-none" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center gap-6 max-w-3xl"
          >
            {/* Badge */}
            <motion.div variants={bounceIn}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-primary)]/15 border border-[var(--brand-primary)]/30 text-[var(--brand-primary)] text-sm font-semibold tracking-wide">
                🐕 {PET_BREED} • Goodest Boy
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-black tracking-tight text-[var(--foreground)] leading-none"
            >
              Meet{" "}
              <span className="text-[var(--brand-primary)] relative">
                {PET_NAME}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8 Q50 2 100 8 Q150 14 198 8"
                    stroke="var(--brand-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-[var(--muted-foreground)] leading-relaxed max-w-xl"
            >
              The goodest boy on the internet. Loyal, fluffy, and absolutely
              convinced that every visitor is here to pet him.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center mt-2">
              <a
                href="#gallery"
                className="px-7 py-3.5 rounded-full bg-[var(--brand-primary)] text-[var(--brand-primary-fg)] font-bold text-base shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300"
              >
                See Photos 📸
              </a>
              <a
                href="#jokes"
                className="px-7 py-3.5 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-bold text-base hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all duration-300"
              >
                Tell Me a Joke 😂
              </a>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="relative z-10 mt-14 w-64 h-64 md:w-80 md:h-80"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[var(--brand-primary)]/40 shadow-[0_0_0_8px_var(--brand-primary)]/10,0_16px_64px_rgba(0,0,0,0.2)]">
              <img
                src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/b89e5f17951843e2ab7963bb72a00b84.jpg"
                alt="German Shepherd"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 bg-[var(--card)] border border-[var(--border)] rounded-2xl px-3 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.12)] text-sm font-bold text-[var(--foreground)]"
            >
              🐾 Goodest Boy
            </motion.div>
          </motion.div>
        </section>
      </Reveal>

      {/* ── BIO ──────────────────────────────────────────────────────────── */}
      <Reveal>
        <section
          id="bio"
          className="py-24 md:py-32 px-6 bg-[var(--background)]"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.12)] border border-[var(--border)]">
                <img
                  src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/b89e5f17951843e2ab7963bb72a00b84.jpg"
                  alt="German Shepherd"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {[
                    { label: "Age", value: "3 yrs" },
                    { label: "Weight", value: "75 lbs" },
                    { label: "Breed", value: "GSD" },
                    { label: "Mood", value: "Happy" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-lg font-black text-[var(--brand-primary)]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[var(--muted-foreground)] font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="flex flex-col gap-6">
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">
                About Tiger
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--foreground)] leading-tight text-balance">
                More than a dog. A whole personality.
              </h2>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
                Tiger is a 3-year-old German Shepherd with the heart of a lion
                and the appetite of a small bear. He joined the family as a tiny
                fluffball and has since grown into the most dramatic, lovable,
                and occasionally chaotic member of the household.
              </p>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
                His hobbies include: chasing tennis balls (never returning them),
                barking at the mailman, stealing socks, and performing
                award-winning zoomies at 6 AM. He is also an expert at the
                "puppy eyes" technique and has never once used it for evil.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Tennis Balls", "Belly Rubs", "Car Rides", "Treats", "Zoomies", "Cuddles"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-semibold border border-[var(--brand-primary)]/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <Reveal>
        <section
          id="gallery"
          className="py-24 md:py-32 px-6 bg-[var(--section-alt)]"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">
                Photo Gallery
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-[var(--foreground)] text-balance">
                Tiger through the lens 📸
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)] text-lg max-w-xl mx-auto leading-relaxed">
                Every photo tells a story. Most of them involve treats.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {PHOTOS.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  variants={scaleIn}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className={`group relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.08)] cursor-pointer ${
                    i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      i === 0 ? "aspect-square" : "aspect-[4/3]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-semibold">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── JOKES ────────────────────────────────────────────────────────── */}
      <Reveal>
        <section
          id="jokes"
          className="py-24 md:py-32 px-6 bg-[var(--background)]"
        >
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">
              Joke Corner
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-[var(--foreground)] text-balance">
              Tiger's comedy hour 😂
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)] text-lg leading-relaxed">
              Tiger may not be able to talk, but he has excellent taste in dog
              jokes. Press the button. You know you want to.
            </p>

            {/* Joke card */}
            <motion.div
              key={jokeKey}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[0_4px_32px_rgba(0,0,0,0.08)] text-left"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">🐕</span>
                <div className="flex-1">
                  <p className="text-xl font-bold text-[var(--foreground)] leading-snug">
                    {currentJoke.setup}
                  </p>

                  {showPunchline ? (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-4 text-lg text-[var(--brand-primary)] font-semibold"
                    >
                      {currentJoke.punchline}
                    </motion.p>
                  ) : (
                    <button
                      onClick={handleReveal}
                      className="mt-4 text-sm font-semibold text-[var(--muted-foreground)] underline underline-offset-4 hover:text-[var(--brand-primary)] transition-colors duration-200"
                    >
                      Reveal punchline...
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Controls */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleNewJoke}
                className="px-8 py-3.5 rounded-full bg-[var(--brand-primary)] text-[var(--brand-primary-fg)] font-bold text-base shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-all duration-300"
              >
                <Laugh className="inline-block w-5 h-5 mr-2 -mt-0.5" />
                Next Joke
              </motion.button>
              {!showPunchline && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleReveal}
                  className="px-8 py-3.5 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-bold text-base hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all duration-300"
                >
                  Show Punchline 🥁
                </motion.button>
              )}
            </div>

            <p className="mt-6 text-sm text-[var(--muted-foreground)]">
              Joke {jokeIndex + 1} of {JOKES.length}
            </p>
          </div>
        </section>
      </Reveal>

      {/* ── FUN FACTS ────────────────────────────────────────────────────── */}
      <Reveal>
        <section
          id="fun-facts"
          className="py-24 md:py-32 px-6 bg-[var(--section-alt)]"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--brand-primary)]">
                Fun Facts
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-[var(--foreground)] text-balance">
                Things you should know about Tiger
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)] text-lg max-w-xl mx-auto leading-relaxed">
                He is a complex individual with many layers. Most of those layers
                are fur.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {FUN_FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <motion.div
                    key={fact.id}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--brand-primary)]/12 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[var(--brand-primary)]" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                      {fact.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                      {fact.body}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-20 px-6 bg-[var(--brand-primary)]">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="text-6xl"
            >
              🐾
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--brand-primary-fg)] text-balance leading-tight">
              Tiger says hi. And also wants a treat.
            </h2>
            <p className="text-[var(--brand-primary-fg)]/80 text-lg leading-relaxed max-w-lg">
              Thanks for visiting Tiger's corner of the internet. He would shake
              your hand, but he is currently napping. Please come back later.
            </p>
            <a
              href="#gallery"
              className="mt-2 px-8 py-3.5 rounded-full bg-white text-[var(--brand-primary)] font-bold text-base shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
              See More Photos 📸
            </a>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
