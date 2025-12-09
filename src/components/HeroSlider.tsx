import { useEffect, useRef, useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";


type Slide = {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  bg: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Art by Kiku",
    subtitle: "Hand-painted watercolor portraits with soul and emotion.",
     img: hero1,
    bg: "from-[#FFEDE9] via-[#FFD4CF] to-[#FFAEA9]",
  },
  {
    id: 2,
    title: "Watercolor Florals",
    subtitle: "Soft botanical illustrations perfect for décor and gifting.",
    img: hero2,
    bg: "from-[#FFEFE6] via-[#FFCFC1] to-[#FF9F8A]",
  },
  {
    id: 3,
    title: "Custom Paintings",
    subtitle: "Commission personalized artwork for your special moments.",
    img: hero3,
    bg: "from-[#FDEEE5] via-[#F8D4C6] to-[#E8A898]",
  },
  {
    id: 4,
    title: "Live Classes",
    subtitle: "Learn watercolor techniques with simple and fun lessons.",
    img: hero4,
    bg: "from-[#FFEDE9] via-[#FFD4CF] to-[#FFAEA9]",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);

    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (i: number) => setIndex(i % slides.length);

  return (
    <section id="home" className="pt-20 pb-16">
      <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden rounded-none md:rounded-3xl">

        {slides.map((s, i) => (
          <div
            key={s.id}
            aria-hidden={index !== i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
          >

            {/* Soft pastel gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${s.bg} opacity-60`}
            />

            {/* Clean hero image visible clearly */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{ backgroundImage: `url(${s.img})` }}
            />

            {/* Soft vignette for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
              <div className="max-w-2xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                <h1 className="text-4xl font-tan leading-tight sm:text-5xl md:text-6xl">
                  {s.title}
                </h1>

                <p className="mt-4 text-lg md:text-xl text-white/90">
                  {s.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#gallery"
                    className="rounded-full bg-[#6EC5C0] px-6 py-3 font-semibold shadow hover:bg-[#37928d]"
                  >
                    View Gallery
                  </a>

                  <a
                    href="#contact"
                    className="rounded-full bg-white/20 border border-white/50 px-6 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white/30"
                  >
                    Order Art
                  </a>
                </div>
              </div>
            </div>

          </div>
        ))}

        {/* Slider Dots */}
        <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`pointer-events-auto h-2 w-6 rounded-full transition ${
                index === i ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
