import { testimonials } from "@/data/testimonials";
import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-brand-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Lo que dicen los alumnos"
          subtitle="Más de 20.000 personas ya se formaron con nuestros cursos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
              course={testimonial.course}
            />
          ))}
        </div>
      </div>
    </section>
  );
}