import React from 'react';
import { Helmet } from 'react-helmet';

const prompts = [
  {
    title: 'The Proactive Negative Response Prompt',
    benefit: 'Neutralizes angry reviewers with empathy plus a compliant next step.',
  },
  {
    title: 'The Smile-Saver Follow-Up Prompt',
    benefit: 'Turns lukewarm feedback into a chance to invite patients back.',
  },
  {
    title: 'The Fast Gratitude Prompt',
    benefit: 'Sends heartfelt thank-yous to positive reviewers in seconds.',
  },
  {
    title: 'The Reputation Shield Prompt',
    benefit: 'Protects your brand by addressing misinformation politely.',
  },
  {
    title: 'The Weekend Queue Prompt',
    benefit: 'Preps templated replies so Monday mornings are stress-free.',
  },
];

const VALUE_ROWS = [
  { label: 'Average response time', oldWay: '30 mins per review', aiWay: '5 mins total' },
  { label: 'Tone consistency', oldWay: 'Depends on who replies', aiWay: 'Always on-brand + compliant' },
  { label: 'Stress level', oldWay: 'High during peak times', aiWay: 'Calm, handled ahead of time' },
];

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80';

const GALLERY_HIGHLIGHTS = [
  {
    title: 'Chairside Confidence',
    caption: 'Give every reviewer the same calm assurance they felt in your operatory.',
    image:
      'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Team-Wide Consistency',
    caption: 'Front-desk, office manager, or doctor—everyone sounds aligned and compliant.',
    image:
      'https://images.unsplash.com/photo-1520012218364-4f56e55c30b5?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Trust-Building Follow Ups',
    caption: 'Layer in gratitude, next steps, and reassurance in one polished reply.',
    image:
      'https://images.unsplash.com/photo-1506738995538-611f3d52f3a1?auto=format&fit=crop&w=900&q=80',
  },
];

const DentalAILandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <Helmet>
        <title>The 5-Minute AI Review Responder Kit: Dental Practice Reputation Management</title>
        <meta
          name="description"
          content="Instantly generate professional, compliant AI responses for all dental clinic reviews. Save time and protect your reputation with 5 specialized prompts. $37 one-time price."
        />
        <meta
          name="keywords"
          content="dental practice management, AI automation, reputation management, dental marketing, respond to reviews, dentist business, ChatGPT prompts, review template, dental office manager, small business AI"
        />
      </Helmet>

      <header className="relative overflow-hidden bg-gradient-to-br from-cyan-800 via-sky-700 to-sky-500 text-white">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-cyan-300 blur-3xl" />
          <div className="absolute left-20 bottom-0 h-48 w-48 rounded-full bg-teal-300 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cyan-100">
                Trusted dental AI asset
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
                The 5-Minute AI Review Responder Kit™
              </h1>
              <p className="mt-6 text-lg md:text-2xl text-cyan-50">
                Stop wasting hours rewriting review replies. Protect your professional reputation with five
                specialized AI prompts designed for dental practices.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <a
                  href="https://chaudarytalha.gumroad.com/l/szsox"
                  className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-semibold text-sky-700 shadow-lg shadow-cyan-900/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
                >
                  Buy Now — $37
                </a>
                <div className="flex flex-col text-sm text-cyan-100">
                  <span>Instant Gumroad download</span>
                  <span>HIPAA-friendly tone guardrails</span>
                </div>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-6 text-sm text-cyan-50">
                <div>
                  <dt className="font-semibold text-lg text-white">5 premium prompts</dt>
                  <dd>Cover every review scenario from praise to crisis.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-lg text-white">10x faster replies</dt>
                  <dd>Average clinic saves 4+ hours every week.</dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 bg-cyan-400/40 blur-3xl rounded-full" aria-hidden="true" />
              <figure className="relative rounded-[32px] overflow-hidden border border-white/20 shadow-2xl shadow-cyan-900/30">
                <img
                  src={HERO_IMAGE}
                  alt="Dental professional reviewing patient feedback on a tablet"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm text-slate-700 shadow">
                  Specialized prompts + human warmth
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <section className="grid gap-6 md:grid-cols-3">
          <div className="bg-white/80 border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800">Generic Replies</h3>
            <p className="mt-3 text-slate-600">
              Copy-paste responses sound robotic and make patients wonder if you even read their words.
            </p>
          </div>
          <div className="bg-white/80 border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800">Wasted Time</h3>
            <p className="mt-3 text-slate-600">
              Doctors and office managers lose productive hours crafting the perfect tone on every reply.
            </p>
          </div>
          <div className="bg-white/80 border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800">Reputation Risk</h3>
            <p className="mt-3 text-slate-600">
              Slow or poorly worded responses can spark compliance issues and hurt referral trust.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3">
            <div className="h-10 w-1 rounded-full bg-cyan-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Your 5 Specialized AI Prompts</h2>
          </div>
          <p className="mt-4 text-slate-600 max-w-3xl">
            Built specifically for independent dental clinics, each prompt guides AI tools like ChatGPT
            to deliver compliant, on-brand responses that feel human and caring.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {prompts.map((prompt) => (
              <div
                key={prompt.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-slate-900">{prompt.title}</h3>
                <p className="mt-3 text-slate-600">{prompt.benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {GALLERY_HIGHLIGHTS.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-200/60"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.caption}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="bg-sky-50 border border-sky-100 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-slate-900">Why the Kit Works</h2>
          <p className="mt-4 text-slate-600">
            The prompts walk AI through tone, compliance, follow-up steps, and personalization so you can
            reply faster without sacrificing quality.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-sky-100">
            <table className="w-full text-left text-slate-800">
              <thead className="bg-sky-100 text-slate-900">
                <tr>
                  <th className="py-4 px-6 text-sm font-semibold uppercase tracking-wide">Metric</th>
                  <th className="py-4 px-6 text-sm font-semibold uppercase tracking-wide">The Old Way</th>
                  <th className="py-4 px-6 text-sm font-semibold uppercase tracking-wide text-sky-700">
                    The AI Way
                  </th>
                </tr>
              </thead>
              <tbody>
                {VALUE_ROWS.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/70'}
                  >
                    <td className="py-4 px-6 font-medium">{row.label}</td>
                    <td className="py-4 px-6 text-slate-500">{row.oldWay}</td>
                    <td className="py-4 px-6 text-sky-700 font-semibold">{row.aiWay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-center bg-white border border-slate-100 rounded-3xl p-10 shadow-lg shadow-slate-200/70">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 font-semibold">
            Final Call
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            $37 One-Time Payment — Lifetime Access
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Download instantly on Gumroad, copy the prompts, and start responding to every review in minutes.
            No subscriptions, no complicated software, just the proven scripts you need.
          </p>
          <div className="mt-8">
            <a
              href="https://chaudarytalha.gumroad.com/l/szsox"
              className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-12 py-4 text-xl font-semibold text-white shadow-xl shadow-cyan-600/40 transition hover:bg-cyan-500"
            >
              Buy the Kit Now
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">Secure checkout via Gumroad.</p>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 bg-white/90 backdrop-blur border-t border-slate-200 px-6 py-4 shadow-xl md:hidden">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">One-Time Payment</p>
            <p className="text-lg font-semibold text-slate-900">$37 USD</p>
          </div>
          <a
            href="https://chaudarytalha.gumroad.com/l/szsox"
            className="flex-1 inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-600/40"
          >
            Buy Now
          </a>
        </div>
      </div>

      <a
        href="https://chaudarytalha.gumroad.com/l/szsox"
        className="fixed bottom-6 right-6 hidden md:inline-flex items-center gap-3 rounded-full bg-cyan-600 px-6 py-3 text-white font-semibold shadow-2xl shadow-cyan-600/40 hover:bg-cyan-500 z-50"
      >
        Buy Now — $37
      </a>
    </div>
  );
};

export default DentalAILandingPage;

