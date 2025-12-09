import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;        // optional extra styles (padding/bg, etc.)
  containerClassName?: string; // optional wrapper (grid width tweaks)
};

export default function Section({
  id,
  title,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-10 ${className}`}>
      <div className={`mx-auto max-w-7xl px-8 md:px-12 ${containerClassName}`}>
        <h2 className="text-2xl md:text-3xl font-tan font-bold text-center text-gray-900">{title}</h2>
        <div className="mt-6 text-gray-600 py-5">{children}</div>
      </div>
    </section>
  );
}
