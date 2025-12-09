import { useState } from "react";

export default function Gallery() {
  const allImages = [
    "/img/g1.jpg",
    "/img/g2.jpg",
    "/img/g3.jpg",
    "/img/g4.jpg",
    "/img/g5.jpg",
    "/img/g6.jpg",
  ];

  const [visibleCount, setVisibleCount] = useState(6);
  const visibleImages = allImages.slice(0, visibleCount);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-tan text-[#1A1A1A] mb-10">
          Gallery
        </h2>

        {/* Uniform grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleImages.map((src) => (
            <div
              key={src}
              onClick={() => setSelectedImage(src)}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={src}
                alt="Artwork"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* View More */}
        {visibleCount < allImages.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount(visibleCount + 3)}
              className="px-8 py-3 rounded-full bg-[#6EC5C0] text-white font-semibold shadow hover:bg-[#5ab2ad]"
            >
              View More
            </button>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-h-[85vh] max-w-[90vw] rounded-3xl shadow-2xl animate-[fadeIn_0.3s_ease]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
