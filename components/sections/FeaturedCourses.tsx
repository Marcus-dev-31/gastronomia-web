import { onlineCourses } from "@/data/online-courses";
import SectionTitle from "../ui/SectionTitle";
import CourseCard from "../ui/CourseCard";
import Button from "../ui/Button";

export default function FeaturedCourses() {
  const featuredCourses = onlineCourses.filter((course) => course.featured);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Cursos Destacados"
          subtitle="Aprendé a tu ritmo con cursos diseñados para todos los niveles. Acceso ilimitado y de por vida."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <div
              key={course.slug}
              className={index >= 4 ? "hidden md:block" : ""}
            >
              <CourseCard
                slug={course.slug}
                name={course.name}
                description={course.description}
                price={course.price}
                previousPrice={course.previousPrice}
                category={course.category}
                image={course.image}
                imagePosition={course.imagePosition}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/cursos">Ver todos los cursos</Button>
        </div>
      </div>
    </section>
  );
}