import { useEffect, useState } from "react";
import logo from "../assets/kiku-logo.png"; // use your uploaded logo

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-white/85 backdrop-blur shadow" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Art by Kiku" className="h-12 w-auto" />
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-300 px-3 py-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
            <path fill="currentColor" d="M4 6h16v2H4zM4 12h16v2H4zM4 18h16v2H4z" />
          </svg>
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-800">
          {["Home", "Gallery", "Services", "About", "Contact"].map((item) => (
            <li key={item}>
              <a className="hover:text-[#6EC5C0]" href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              className="rounded-full border-2 border-[#6EC5C0] px-5 py-2 text-[#1A1A1A] hover:bg-[#6EC5C0] hover:text-white transition"
            >
              Order Art
            </a>
          </li>
        </ul>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="mx-auto max-w-7xl px-4 py-3 space-y-3 text-gray-800">
            {["Home", "Gallery", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  onClick={() => setOpen(false)}
                  className="block py-2"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}

            <li>
              <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl border-2 border-[#6EC5C0] px-4 py-2 font-medium hover:bg-[#6EC5C0] hover:text-white transition"
              >
                Order Art
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
