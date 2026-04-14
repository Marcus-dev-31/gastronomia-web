import Image from "next/image";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Asesoría Gastronómica | Marcos Di Cesare",
  description:
    "Videollamada 1 a 1 con Marcos Di Cesare para resolver dudas sobre tu proyecto gastronómico. Seguimiento por WhatsApp incluido.",
};

export default function AsesoriaPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Contenido */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-serif text-3xl md:text-4xl text-brand-dark">
              Asesoría Gastronómica Online
            </h1>
            <p className="mt-6 text-brand-gray leading-relaxed max-w-lg mx-auto md:mx-0">
              Nos encontramos en vivo a través de una videollamada para charlar
              y trabajar juntos sobre tus inquietudes, desafíos o ideas.
            </p>

            <div className="mt-6 flex flex-col gap-4 text-brand-gray max-w-lg mx-auto md:mx-0">
              <p>
                ¿Tenés una idea para un proyecto gastronómico y no sabés cómo
                llevarla a cabo? ¿Tenés dudas acerca de un producto en
                particular que no te sale o te gustaría mejorar?
              </p>
              <p>
                ¿Tenés problemas con tu personal y no sabés cómo resolverlo?
                ¿No sabés cómo optimizar la producción de tu equipo de trabajo?
              </p>
              <p>
                Todos estos inconvenientes y todo lo referido a problemas
                gastronómicos son posibles de resolver. Una pequeña inversión
                para resolver grandes problemas.
              </p>
              <p>
                Una vez terminada la videollamada, seguimos en contacto por
                WhatsApp para que puedas consultarme lo que necesites.
              </p>
            </div>

            {/* Precios */}
            <div className="mt-8 flex flex-wrap items-center gap-6 justify-center md:justify-start">
              <div>
                <span className="text-2xl font-bold text-brand-dark">
                  $130.000
                </span>
                <p className="text-sm text-brand-gray">Pesos argentinos</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-brand-dark">
                  U$S100
                </span>
                <p className="text-sm text-brand-gray">
                  Dólares estadounidenses
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="#">Contratar asesoría</Button>
              <Button
                href="https://wa.me/5491100000000"
                variant="outline"
              >
                Consultar por WhatsApp
              </Button>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex-1 relative w-full max-w-md md:max-w-none">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
              <Image
                src="/images/asesoria.webp"
                alt="Marcos Di Cesare - Asesoría Gastronómica"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Qué incluye */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl text-brand-dark text-center mb-8">
            ¿Qué incluye la asesoría?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Videollamada 1 a 1 de una hora",
              "Seguimiento por WhatsApp post-asesoría",
              "Análisis de tu situación actual",
              "Plan de acción personalizado",
              "Revisión de costos y producción",
              "Consultas ilimitadas por 7 días",
            ].map((item, index) => (
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
                <span className="text-brand-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}