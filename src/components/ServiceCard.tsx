type ServiceCardProps = {
  title: string;
  img: string;
  children?: React.ReactNode;
};

export default function ServiceCard({ title, img, children }: ServiceCardProps) {
  return (
    <li className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white hover:shadow-md transition">
      <img src={img} alt={title} className="h-48 w-full object-cover" />

      <div className="p-6">
        <h3 className="font-semibold text-lg text-[#1A1A1A]">{title}</h3>

        {children && (
          <div className="mt-2 text-sm text-gray-600">{children}</div>
        )}
      </div>
    </li>
  );
}
