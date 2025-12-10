import { useState } from "react";
import Section from "./Section";
import { sendEmail } from "../utils/sendEmail";


const brand = "#6EC5C0";

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "Do you take custom painting orders?",
    a: "Yes! Portraits, florals, pets, and special-occasion commissions are all available. Just share your idea in the message box.",
  },
  {
    q: "What medium do you use?",
    a: "All artworks are hand-painted using high-quality watercolor on premium textured paper.",
  },
  {
    q: "How long does a custom artwork take?",
    a: "Most custom pieces take 5-10 days depending on complexity. Urgent timelines may be available.",
  },
  {
    q: "Do you ship artwork?",
    a: "Yes, shipping is available in Canada and across globally. You can also request digital high-resolution copies.",
  },
];

function FaqItem({ item, open, onToggle }: { item: Faq; open: boolean; onToggle: () => void }) {
  return (
    <div
      className={`rounded-2xl border transition shadow-sm bg-white ${
        open ? "border-slate-300" : "border-slate-200"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <h4 className="text-base md:text-lg font-semibold text-slate-900">{item.q}</h4>

        <span
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border text-slate-900"
          style={{ borderColor: brand, color: brand }}
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M5 12h14" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          )}
        </span>
      </button>

      {open && <div className="px-5 pb-5 pt-0 text-sm text-slate-600">{item.a}</div>}
    </div>
  );
}

export default function ContactAndFaq() {
  const [open, setOpen] = useState<number>(0);

  // form states
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    const formData = { firstName, lastName, email, phone, message };

    sendEmail(formData)
      .then(() => {
        alert("Message sent!");
        setFirst("");
        setLast("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch(() => alert("Something went wrong."));
  }

  return (
    <Section id="contact" title="Get in Touch">
      <div className="grid gap-8 md:grid-cols-2">
        {/* LEFT — CONTACT FORM */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <p className="text-slate-600">
            Have a question or want a custom painting? Feel free to send a message — I’d love to
            create something special for you.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#6EC5C0]/40 outline-none"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirst(e.target.value)}
                required
              />
              <input
                className="rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#6EC5C0]/40 outline-none"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLast(e.target.value)}
              />
            </div>

            <input
              className="rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#6EC5C0]/40 outline-none"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              className="rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#6EC5C0]/40 outline-none"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              className="rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#6EC5C0]/40 outline-none"
              rows={4}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button
              className="mt-2 w-full rounded-full px-6 py-3 text-sm font-semibold text-white shadow transition"
              style={{ backgroundColor: brand }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT — FAQs */}
        <div>
          <p className="text-xs font-medium tracking-wide text-slate-500 mb-2">FAQ</p>

          <h3 className="text-2xl md:text-3xl font-tan text-slate-900 mb-4">Common Questions</h3>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                item={f}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
