import { notFound } from "next/navigation";
import Image from "next/image";
import { onlineCourses } from "@/data/online-courses";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return onlineCourses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = onlineCourses.find((c) => c.slug === slug);

  if (!course) {
    return { title: "Curso no encontrado" };
  }

  return {
    title: `${course.name} | Marcos Di Cesare`,
    description: course.description,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = onlineCourses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  // ... el resto del return queda igual

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header del curso */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Info */}
          <div className="flex-1">
            <span className="inline-block bg-brand-gold text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {course.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-brand-dark">
              {course.name}
            </h1>
            <p className="mt-4 text-brand-gray leading-relaxed">
              {course.longDescription}
            </p>
            <p className="mt-2 text-sm text-brand-gold font-medium">
              {course.access}
            </p>

            {/* Precios */}
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-brand-dark">
                    ${course.price.toLocaleString("es-AR")}
                  </span>
                  {course.previousPrice && (
                    <span className="text-lg text-brand-gray line-through">
                      ${course.previousPrice.toLocaleString("es-AR")}
                    </span>
                  )}
                </div>
                <p className="text-sm text-brand-gray">Pesos argentinos</p>
              </div>
              {course.dollarPrice && (
                <div>
                  <span className="text-2xl font-bold text-brand-dark">
                    U$S{course.dollarPrice}
                  </span>
                  <p className="text-sm text-brand-gray">
                    Dólares estadounidenses
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-3">
  <Button href="#">Comprar curso</Button>
  <a
    href="#"
    className="inline-flex items-center gap-2 text-brand-gold text-sm font-medium hover:underline"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
      />
    </svg>
    Comprar como regalo
  </a>
</div>
          </div>

          {/* Imagen */}
          <div className="flex-1 relative w-full max-w-md md:max-w-none">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={course.image}
                alt={course.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
                style={{ objectPosition: course.imagePosition || "top" }}
              />
            </div>
          </div>
        </div>

        {/* Aprendizajes */}
        {course.learnings.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-brand-dark mb-6">
              Con este curso aprenderás
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.learnings.map((learning, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-brand-light rounded-lg p-4"
                >
                  <svg
                    className="w-5 h-5 text-brand-gold shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-brand-dark">{learning}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info adicional */}
        {(course.targetAudience || course.requirements) && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {course.targetAudience && (
              <div>
                <h2 className="font-serif text-2xl text-brand-dark mb-4">
                  Orientado para
                </h2>
                <p className="text-brand-gray leading-relaxed">
                  {course.targetAudience}
                </p>
              </div>
            )}
            {course.requirements && (
              <div>
                <h2 className="font-serif text-2xl text-brand-dark mb-4">
                  Requerimientos
                </h2>
                <p className="text-brand-gray leading-relaxed">
                  {course.requirements}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Temario */}
        {course.syllabus.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-brand-dark mb-6">
              Temario del curso
            </h2>
            <div className="flex flex-col gap-2">
              {course.syllabus.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-brand-light rounded-lg p-4"
                >
                  <svg
                    className="w-5 h-5 text-brand-gray shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-brand-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recursos */}
        {course.resources.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-brand-dark mb-6">
              Recursos & Material Descargable
            </h2>
            <div className="flex flex-col gap-2">
              {course.resources.map((resource, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-brand-light rounded-lg p-4"
                >
                  <svg
                    className="w-5 h-5 text-brand-gray shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-brand-dark">{resource}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructor */}
        <div className="mt-16 text-center">
          <h2 className="font-serif text-2xl text-brand-dark mb-6">
            Instructor
          </h2>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/images/marcos-instructor.webp"
              alt="Marcos Di Cesare"
              width={80}
              height={80}
              className="rounded-full grayscale"
            />
            <p className="font-semibold text-brand-dark">
              Marcos Di Cesare
            </p>
            <p className="text-sm text-brand-gray max-w-md">
              Cocinero hace +20 años. Egresado del Instituto Argentino
              de Gastronomía. Autor de "Anti Recetas" y "Sos infeliz y
              es tu culpa".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
