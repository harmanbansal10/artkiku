import { useState } from "react";
import Section from "./Section"; // adjust import path

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      monthly: 29,
      yearly: 290,
      featured: false,
      perks: [
        "Comprehensive website audit",
        "Keyword research and analysis",
        "Content creation and optimization",
        "Local SEO implementation",
      ],
      ctaClass: "bg-[#f42f54] text-white hover:bg-[#d63e4d]", // updated
      cardClass: "bg-white border-slate-200",
    },
    {
      name: "Standard Plan",
      monthly: 39,
      yearly: 390,
      featured: true,
      perks: [
        "Comprehensive website audit",
        "Keyword research and analysis",
        "Content creation and optimization",
        "Local SEO implementation",
      ],
      ctaClass: "bg-slate-900 text-white hover:bg-black",
      cardClass: "bg-[#f42f54]/10 border-[#f42f54]/40", // highlight card
    },
    {
      name: "Premium Plan",
      monthly: 49,
      yearly: 490,
      featured: false,
      perks: [
        "Comprehensive website audit",
        "Keyword research and analysis",
        "Content creation and optimization",
        "Local SEO implementation",
      ],
      ctaClass: "bg-[#f42f54] text-white hover:bg-[#d63e4d]", // updated
      cardClass: "bg-white border-slate-200",
    },
  ];

  return (
    <Section id="pricing" title="Pricing">
      <div className="mx-auto max-w-7xl px-6">
        {/* Toggle */}
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`text-sm font-medium ${
              yearly ? "text-slate-500" : "text-slate-900"
            }`}
          >
            Monthly
          </button>

          <button
            type="button"
            aria-label="toggle billing period"
            onClick={() => setYearly(!yearly)}
            className={`relative h-8 w-14 rounded-full transition ${
              yearly ? "bg-slate-900" : "bg-[#f42f54]"
            }`}
          >
            <span
              className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition-transform ${
                yearly ? "translate-x-6" : ""
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`text-sm font-medium ${
              yearly ? "text-slate-900" : "text-slate-500"
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {plans.map((p) => {
            const price = yearly ? p.yearly : p.monthly;
            const per = yearly ? "/Per Year" : "/Per Month";
            return (
              <div
                key={p.name}
                className={`rounded-3xl border shadow-sm p-6 md:p-8 ${p.cardClass} ${
                  p.featured ? "ring-2 ring-[#f42f54]" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Our popular plan for small teams.
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <div className="text-4xl font-extrabold text-slate-900">
                    ${price}
                  </div>
                  <div className="pb-1 text-sm text-slate-500">{per}</div>
                </div>

                <ul className="mt-6 space-y-3">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="mt-0.5 h-5 w-5 flex-none text-[#f42f54]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" className="opacity-20" />
                        <path d="M8 12l2.5 2.5L16 9" />
                      </svg>
                      <span className="text-slate-700">{perk}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold shadow ${p.ctaClass}`}
                >
                  Get Started Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
