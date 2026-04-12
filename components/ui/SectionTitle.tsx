interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-10">
      <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-brand-gray max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
