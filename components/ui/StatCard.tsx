interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <p className="font-serif text-3xl md:text-4xl text-brand-gold font-bold">
        {value}
      </p>
      <p className="text-sm text-brand-gray mt-1">
        {label}
      </p>
    </div>
  );
}