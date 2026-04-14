import Image from "next/image";
import Link from "next/link";
import { inPersonCourses } from "@/data/in-person-courses";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Cursos Presenciales | Marcos Di Cesare",
  description:
    "Cursos presenciales de panadería y cocina en Carbo Bakery, Olivos. Grupos reducidos con Marcos Di Cesare.",
};

export default function PresencialesPage() {
  return (
    <section className="bg-brand-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Cursos Presenciales"
          subtitle="Vení a cocinar en vivo. Grupos reducidos, práctica 100% hands-on y todo el material incluido."
        />

        <div className="flex flex-col gap-12">
          {inPersonCourses.map((course) => (
            <div
              key={course.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-dark/5"
            >
              <div className="flex flex-col md:flex-row">
                {/* Imagen */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Contenido */}
                <div className="flex-1 p-6 md:p-8">
                  <h2 className="font-serif text-2xl text-brand-dark">
                    {course.name}
                  </h2>
                  <p className="mt-3 text-brand-gray leading-relaxed">
                    {course.description}
                  </p>

                  {/* Detalles */}
                  <div className="mt-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm text-brand-dark">
                      <svg
                        className="w-5 h-5 text-brand-gold shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{course.date} — {course.schedule}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-brand-dark">
                      <svg
                        className="w-5 h-5 text-brand-gold shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{course.location} — {course.address}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-brand-gold shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-brand-gold font-semibold">
                        {course.spots} cupos disponibles
                      </span>
                    </div>
                  </div>

                  {/* Precios */}
                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    <div>
                      <span className="text-2xl font-bold text-brand-dark">
                        ${course.price.toLocaleString("es-AR")}
                      </span>
                      <p className="text-sm text-brand-gray">Pesos argentinos</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-brand-dark">
                        U$S{course.dollarPrice}
                      </span>
                      <p className="text-sm text-brand-gray">Dólares estadounidenses</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button href="#">Reservar mi lugar</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}