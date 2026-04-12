import StarRating from "./StarRating";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  course: string;
}

export default function TestimonialCard({
  name,
  text,
  rating,
  course,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-brand-dark/5">
      <StarRating rating={rating} />
      <p className="mt-4 text-brand-dark leading-relaxed">
        {text}
      </p>
      <div className="mt-4 pt-4 border-t border-brand-dark/10">
        <p className="font-semibold text-sm text-brand-dark">
          {name}
        </p>
        <p className="text-xs text-brand-gray">
          {course}
        </p>
      </div>
    </div>
  );
}