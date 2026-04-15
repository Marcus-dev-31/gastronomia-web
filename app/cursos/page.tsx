"use client";

import { useState } from "react";
import { onlineCourses } from "@/data/online-courses";
import { CourseCategory } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import CategoryFilter from "@/components/ui/CategoryFilter";
import CourseCard from "@/components/ui/CourseCard";

const categories: CourseCategory[] = [
  "Panadería",
  "Cocina",
  "Pastelería",
  "Gestión",
];

export default function CursosPage() {
  const [activeCategory, setActiveCategory] = useState <CourseCategory | "Todos">("Todos");

  const filteredCourses =
    activeCategory === "Todos"
      ? onlineCourses
      : onlineCourses.filter((course) => course.category === activeCategory);

  return (
    <section className="bg-brand-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Cursos Online"
          subtitle="Sin fechas límite. Olvidate de correr. El acceso es ilimitado para que disfrutes del proceso de aprendizaje."
        />

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.slug}
              slug={course.slug}
              name={course.name}
              description={course.description}
              price={course.price}
              previousPrice={course.previousPrice}
              category={course.category}
              image={course.image}
              imagePosition={course.imagePosition}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <p className="text-center text-brand-gray mt-8">
            No hay cursos en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}