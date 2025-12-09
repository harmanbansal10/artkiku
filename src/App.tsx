import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import HeroSlider from "./components/HeroSlider";
import ContactAndFaq from "./components/ContactAndFaq";
import Gallery from "./components/Gallery";


export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-[#F8F8F6]">
      <Navbar />

      <main>
        <HeroSlider />

        {/* ===================== SERVICES ===================== */}
        <Section id="services" title="What I Paint">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Left big artwork */}
            <div className="md:col-span-1 overflow-hidden rounded-3xl shadow">
              <img
                src="/img/art-portrait.jpg"
                alt="Watercolor artwork"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right cards (Watercolor Services) */}
            <div className="md:col-span-2 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Watercolor Portraits",
                  desc: "Hand-painted portraits capturing emotions in soft watercolor tones.",
                  icon: "🖼️",
                },
                {
                  title: "Floral Illustrations",
                  desc: "Elegant botanical compositions perfect for décor, prints, and gifts.",
                  icon: "🌸",
                },
                {
                  title: "Custom Art Commissions",
                  desc: "Wedding invites, gifts, home décor pieces crafted with care.",
                  icon: "🎁",
                },
                {
                  title: "Bookmarks & Mini Art",
                  desc: "Handcrafted watercolor bookmarks and miniature artworks.",
                  icon: "📖",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="mb-3 text-3xl">{s.icon}</div>
                  <h3 className="font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-block text-sm font-semibold text-[#6EC5C0] hover:text-[#5ab2ad]"
                  >
                    Contact → 
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ===================== ABOUT ARTIST ===================== */}
        <Section id="about" title="About the Artist"> 
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm bg-white/80">
            <div className="relative z-10 grid gap-6 md:grid-cols-3">
              {/* Artist bio + image */}
              <div className="md:col-span-2">
                <p className="mb-1 text-xs/5 text-gray-500">The Story</p>

                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  Watercolor Artist Creating Moments You Can Feel
                </h3>

                <p className="mt-3 max-w-xl text-sm/6 text-gray-600">
                  I'm <strong>Kiku</strong> — a watercolor artist who finds calm,
                  beauty, and emotion in soft blends and delicate brush strokes.
                  Every artwork I create is painted by hand using professional
                  watercolor paper and archival-safe pigments.
                </p>

                <p className="mt-3 max-w-xl text-sm/6 text-gray-600">
                  Whether it's a personalized portrait, a floral illustration,
                  or a thoughtful gift, my goal is to make art that feels warm,
                  soulful, and meaningful.
                </p>

                <div className="mt-4 overflow-hidden rounded-2xl shadow">
                  <img
                    className="h-64 w-full object-cover md:h-72"
                    src="/img/artist.jpg"
                    alt="Artist working"
                  />
                </div>
              </div>

              {/* Side cards */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Why Watercolor?
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Watercolor brings softness, emotion, and texture that no other
                    medium can match. Every stroke flows naturally and unpredictably.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                    <div className="rounded-xl bg-[#F3F8F8] p-4">
                      <div className="text-2xl font-extrabold text-gray-900">150+</div>
                      <div className="text-xs text-gray-500">Artworks</div>
                    </div>

                    <div className="rounded-xl bg-[#F3F8F8] p-4">
                      <div className="text-2xl font-extrabold text-gray-900">80+</div>
                      <div className="text-xs text-gray-500">Happy Clients</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900">
                    What Inspires My Art?
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Nature, faces, emotions, and small details that tell stories.
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href="#gallery"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#6EC5C0] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5ab2ad]"
                    >
                      View Gallery
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Order Art
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ===================== GALLERY ===================== */}
         <Gallery />

        {/* ===================== CONTACT ===================== */}
        <ContactAndFaq />
      </main>

      <Footer />
    </div>
  );
}
